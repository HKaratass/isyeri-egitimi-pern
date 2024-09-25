import { useEffect, useState } from 'react'
import {
    AcceptButton, CommonInfoFrame, CommonInfoHead,
    CommonInputText, ShowError, ShowInfo, ShowSuccess,
    UpdateButton, UpdateChooser, UpdateChooserOption
} from '../../styles/CommonStyle';
import AddOneImage from '../../../components/AddOneImage';
import { normalizeFileName } from '@/utils/helperFunctions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { committeeApi } from '@/api/committee';


const Update = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const back = () => {
        setHead("KOMİTE ÜYELERİ");
        backFunc();
        setBackFunc(null);
    }
    const [selectedId, setSelecetedId] = useState(null);
    const [willBeUpdate, setWillBeUpdate] = useState(null);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['c_info'],
        queryFn: () => {
            return committeeApi('get', 'info');
        }
    })
    useEffect(() => {
        if (isError) {
            setTimeout(() => {
                back()
            }, 3000);
        }
    }, [isError])

    useEffect(() => {
        setHead("KOMİTE ÜYELERİ - Güncelle");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])



    const handleChange = (e) => {
        if (e.target.name === "chooser") {
            setSelecetedId(e.target.value)
        } else if (e.target.name === 'image') {
            const url = URL.createObjectURL(e.target.files[0]);
            setWillBeUpdate({ ...willBeUpdate, image: { file: e.target.files[0], url } });
        } else {
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: e.target.value });
        }
        setErr(null);
    }

    function removeImage() {
        //handle disabled
        if (!updateCommitteeMember.isPending && !updateCommitteeMember.isSuccess)
            setWillBeUpdate({ ...willBeUpdate, image: -1 })
    }

    const selectedCommitteeMember = useMutation({
        mutationFn: (id) => {
            return committeeApi('get', id);
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: (data) => {
            if (data.resData.image) {
                data.resData.image = { url: `${import.meta.env.VITE_API_URL}/Images/Committee/${data.resData.id}.jpg` }
            }
            setWillBeUpdate(data.resData);
        }
    })

    function chooseCommitteeMember() {
        if (selectedId) {
            selectedCommitteeMember.mutate(selectedId);
        } else {
            setErr('Lütfen önce güncellemek istediğiniz komite üyesini seçiniz.')
        }
    }

    const updateCommitteeMember = useMutation({
        mutationFn: (data) => {
            return committeeApi('put', '', data, {
                withCredentials: true,
            })
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: () => {
            setTimeout(() => {
                back()
            }, 1000);
        }
    })

    function sendRequest() {
        if (willBeUpdate.name?.trim().replace(/ +/g, " ").length < 5)
            return setErr("Ad-Soyad en az 5 karakter olmalı.")
        if (willBeUpdate.title?.length < 5)
            return setErr("Ünvan en az 5 karakter olmalı.")
        const { image, ...temp } = willBeUpdate;
        const formData = new FormData();
        if (!image)
            temp.image = false;
        if (image === -1)
            temp.image = -1;

        formData.append("data", JSON.stringify({ ...temp }));

        if (image.file) {
            willBeUpdate.image && formData.append("image", willBeUpdate.image.file, normalizeFileName(willBeUpdate.image.file.name));
        }

        updateCommitteeMember.mutate(formData);
    }

    return (
        <>
            {
                !selectedCommitteeMember.isSuccess ?
                    <>
                        <UpdateChooser disabled={isLoading || selectedCommitteeMember.isPending || isError} name='chooser' onChange={handleChange}>
                            <option hidden>{isLoading ? 'Komite Üyeleri Listeleniyor...' : 'Güncellenecek Komite Üyesini Seçin'}</option>
                            {
                                !isLoading && !isError &&
                                data.resData.map((k, i) => (
                                    <UpdateChooserOption key={i} value={k.id}>{selectedCommitteeMember.isPending ? "Bekleyiniz..." : k.name}</UpdateChooserOption>
                                ))
                            }
                        </UpdateChooser>
                        {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
                        <UpdateButton
                            $PENDING={isLoading || selectedCommitteeMember.isPending}
                            disabled={isLoading || selectedCommitteeMember.isPending || isError}
                            onClick={chooseCommitteeMember}>SEÇ</UpdateButton>
                    </>
                    :
                    <>
                        <CommonInfoFrame>
                            <CommonInputText value={willBeUpdate.name} $UPDATE onChange={handleChange} name='name' placeholder='Komite üyesinin Doktorası - Adı - Soyadı' maxLength={50} />
                            <ShowInfo title="Örnek: 'Prof. Dr. Civan ARTUKLU'. Minumum 5, maksimum 50 karakter girilebilir." />
                        </CommonInfoFrame>
                        <CommonInfoFrame>
                            <CommonInputText value={willBeUpdate.title} $UPDATE onChange={handleChange} name='title' placeholder='Komite üyesinin Ünvanı' maxLength={60} />
                            <ShowInfo title="Örnek: 'Eğitim Kurulu Başkanı'. Minumum 5, maksimum 60 karakter girilebilir." />
                        </CommonInfoFrame>
                        <CommonInfoHead>Komite Üyesinin Fotoğrafı</CommonInfoHead>
                        <AddOneImage image={willBeUpdate.image !== -1 && willBeUpdate.image} handleChange={handleChange} removeFunc={removeImage} />
                        {err && <ShowError>{err}</ShowError>}
                        {updateCommitteeMember.isSuccess && !err && <ShowSuccess>{updateCommitteeMember.data.resData.message}</ShowSuccess>}
                        <AcceptButton
                            $PENDING={updateCommitteeMember.isPending}
                            disabled={updateCommitteeMember.isPending || updateCommitteeMember.isSuccess}
                            onClick={sendRequest}>ONAYLA</AcceptButton>
                    </>
            }


        </>
    )
}

export default Update