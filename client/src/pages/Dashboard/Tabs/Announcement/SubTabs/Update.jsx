import { useEffect, useState } from 'react'
import {
    AcceptButton, CommonInfoFrame, CommonInfoHead,
    ShowError,
    ShowInfo, ShowSuccess, UpdateButton, UpdateChooser, UpdateChooserOption
} from '../../styles/CommonStyle';
import { Head, TextArea } from './styles/announcement.styled';
import AddOneImage from '../../../components/AddOneImage';
import { normalizeFileName } from '@/utils/helperFunctions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { announcementApi } from '@/api/announcement';
import { eventApi } from '@/api/event';

const Update = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const back = () => {
        setHead("DUYURULAR");
        backFunc();
        setBackFunc(null);
    }
    const [selectedId, setSelecetedId] = useState(null);
    const [willBeUpdate, setWillBeUpdate] = useState(null);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['a_info'],
        queryFn: () => {
            return announcementApi('get', 'info');
        }
    })
    const { isLoading: eventIsLoading, isError: eventIsError, data: eventData, error: eventError } = useQuery({
        queryKey: ['e_info'],
        queryFn: () => {
            return eventApi('get', 'info');
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
        setHead("DUYURULAR - Güncelle");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    function handleChange(e) {
        if (updateAnnouncement.isSuccess || updateAnnouncement.isPending) return 0;

        if (e.target.name === 'chooser') {
            setSelecetedId(e.target.value)
        } else if (e.target.name === 'image') {
            const url = URL.createObjectURL(e.target.files[0]);
            setWillBeUpdate({ ...willBeUpdate, image: { file: e.target.files[0], url } });
        } else if (e.target.name === 'event_id') {
            if (e.target.value !== '0') {
                setWillBeUpdate({ ...willBeUpdate, [e.target.name]: parseInt(e.target.value) })
            } else {
                const { event_id, ...willBeUpdateWithOutEvent_Id } = willBeUpdate
                setWillBeUpdate(willBeUpdateWithOutEvent_Id);
            }
        } else {
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: e.target.value })
        }
        setErr(null);
    }

    function removeImage() {
        //handle disabled
        if (!updateAnnouncement.isPending && !updateAnnouncement.isSuccess)
            setWillBeUpdate({ ...willBeUpdate, image: -1 })
    }

    const selectedAnnouncement = useMutation({
        mutationFn: (id) => {
            return announcementApi('get', id);
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: (data) => {
            data.resData.image = { url: `${import.meta.env.VITE_API_URL}/Images/Announcement/${data.resData.id}.jpg` }
            setWillBeUpdate(data.resData);
        }
    })

    function chooseAnnouncement() {
        if (selectedId) {
            selectedAnnouncement.mutate(selectedId)
        } else {
            setErr('Lütfen önce güncellemek istediğiniz duyuru başlığını seçiniz.')
        }
    }




    const updateAnnouncement = useMutation({
        mutationFn: (data) => {
            return announcementApi('put', '', data, {
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

    const sendRequest = () => {
        if (willBeUpdate.head?.trim().length < 1)
            return setErr("Başlık en az 1 karakter olmalı.")
        if (willBeUpdate.description?.trim().replace(/ +/g, " ").length < 10)
            return setErr("Metin en az 10 karakter olmalı.")
        if (willBeUpdate.image === -1)
            return setErr("Duyurularda fotoğraf zorunludur. Lütfen fotoğraf ekleyiniz.")

        const { image, ...temp } = willBeUpdate;
        const formData = new FormData();
        formData.append("data", JSON.stringify(temp));
        if (image.file)
            formData.append(
                "image",
                willBeUpdate.image.file,
                normalizeFileName(willBeUpdate.image.file.name)
            );

        updateAnnouncement.mutate(formData);
    }

    return (
        <>
            {
                !selectedAnnouncement.isSuccess ?
                    <>
                        <UpdateChooser disabled={isLoading || selectedAnnouncement.isPending || isError} onChange={handleChange} name='chooser'>
                            <option hidden>{isLoading ? 'Duyuru Başlıkları Listeleniyor...' : 'Güncellenecek Duyuru Başlığını Seçin'}</option>
                            {
                                !isLoading && !isError &&
                                data.resData.map((k, i) => (
                                    <UpdateChooserOption key={i} value={k.id}>{selectedAnnouncement.isPending ? "Bekleyiniz..." : k.head}</UpdateChooserOption>
                                ))
                            }
                        </UpdateChooser>
                        {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
                        <UpdateButton
                            $PENDING={isLoading || selectedAnnouncement.isPending}
                            disabled={isLoading || selectedAnnouncement.isPending || isError}
                            onClick={chooseAnnouncement}>SEÇ</UpdateButton>
                    </>
                    :
                    <>
                        <CommonInfoFrame>
                            <Head $UPDATE value={willBeUpdate.head} maxLength={50} onChange={handleChange} name='head' placeholder='Duyuru Başlık' />
                            <ShowInfo title="Duyurunun başlık alanıdır. Minumum 1, maksimum 50 karakter girilebilir." />
                        </CommonInfoFrame>

                        <CommonInfoFrame style={{ height: "calc(100% - 380px - 20px - 1.6em)" }}>
                            <TextArea value={willBeUpdate.description} $UPDATE onChange={handleChange} name="description" maxLength={6000} placeholder='Duyuru Metni (Minumum 10, maksimum 6000 karakter girilebilir.) ' />
                            <ShowInfo title="Duyurunun açıklama alanıdır. Minumum 10, maksimum 6000 karakter girilebilir." />
                        </CommonInfoFrame>

                        <CommonInfoFrame>
                            <UpdateChooser disabled={eventIsError || eventIsLoading} value={willBeUpdate?.event_id || 0} onChange={handleChange} name='event_id'>
                                <UpdateChooserOption value={0}>{eventIsError ? "Etkinlik başlıkları bulunamadı..." : (eventIsLoading ? "Etkinlik Başlıkları Listeleniyor..." : "Etkinlik Bağdaştırma Yok")}</UpdateChooserOption>
                                {
                                    !eventIsLoading && !eventIsError &&
                                    eventData.resData.map((k, i) => (
                                        <UpdateChooserOption key={i} value={k.id}>{k.title}</UpdateChooserOption>
                                    ))
                                }
                            </UpdateChooser>
                            <ShowInfo title="Duyuruya tıklandığında açılacak etkinliği seçiniz. Eğer yoksa boş bırakınız." />
                        </CommonInfoFrame>

                        <CommonInfoHead>Duyuru Görseli Ekle (Zorunlu)</CommonInfoHead>
                        <AddOneImage crop={(err || updateAnnouncement.isSuccess) ? true : false} title="Görsel Eklemek Zorunlu" image={willBeUpdate.image !== -1 && willBeUpdate.image} handleChange={handleChange} removeFunc={removeImage} />
                        {err && <ShowError>{err}</ShowError>}
                        {updateAnnouncement.isSuccess && !err && <ShowSuccess>{updateAnnouncement.data.resData.message}</ShowSuccess>}
                        <AcceptButton
                            $PENDING={updateAnnouncement.isPending}
                            disabled={updateAnnouncement.isPending || updateAnnouncement.isSuccess}
                            onClick={sendRequest} >ONAYLA</AcceptButton>
                    </>
            }


        </>
    )
}

export default Update