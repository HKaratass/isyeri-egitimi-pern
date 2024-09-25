import { useEffect, useState } from 'react'
import {
    AcceptButton, CommonInfoFrame, CommonInfoHead,
    CommonInputText, ShowError, ShowInfo, ShowSuccess
} from '../../styles/CommonStyle';
import AddOneImage from '../../../components/AddOneImage';
import { normalizeFileName } from '@/utils/helperFunctions';
import { useMutation } from '@tanstack/react-query';
import { committeeApi } from '@/api/committee';

const Add = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState();
    const back = () => {
        setHead("KOMİTE ÜYELERİ");
        backFunc();
        setBackFunc(null);
    }
    const [committeeMember, setCommitteeMember] = useState({
        // name: "",
        // title: "", 
        // image: (array kullanılmadı - File)
    })

    useEffect(() => {
        setHead("KOMİTE ÜYELERİ - Ekle");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const addCommitteeMember = useMutation({
        mutationFn: (data) => {
            return committeeApi('post', '', data, {
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

    function handleChange(e) {
        if (e.target.name === 'image') {
            const url = URL.createObjectURL(e.target.files[0]);
            setCommitteeMember({ ...committeeMember, image: { file: e.target.files[0], url } });
        } else {
            setCommitteeMember({ ...committeeMember, [e.target.name]: e.target.value })
        }
        setErr(null);
    }

    function removeImage() {
        //handle disabled
        if (!addCommitteeMember.isPending && !addCommitteeMember.isSuccess)
            setCommitteeMember({ ...committeeMember, image: null })
    }

    const sendRequest = () => {
        if (committeeMember.name?.trim().replace(/ +/g, " ").length < 5 || !committeeMember.name)
            return setErr("Ad-Soyad en az 5 karakter olmalı.")
        if (committeeMember.title?.length < 5 || !committeeMember.title)
            return setErr("Ünvan en az 5 karakter olmalı.")

        const { image, ...temp } = committeeMember;
        const formData = new FormData();
        formData.append("data", JSON.stringify(temp));
        if (committeeMember.image?.file)
            formData.append(
                "image",
                committeeMember.image.file,
                normalizeFileName(committeeMember.image.file.name)
            );

        addCommitteeMember.mutate(formData);
    }

    return (
        <>
            <CommonInfoFrame>
                <CommonInputText $ADD onChange={handleChange} name='name' placeholder='Komite üyesinin Doktorası - Adı - Soyadı' maxLength={50} />
                <ShowInfo title="Örnek: 'Prof. Dr. Civan ARTUKLU'. Minumum 5, maksimum 50 karakter girilebilir." />
            </CommonInfoFrame>
            <CommonInfoFrame>
                <CommonInputText $ADD onChange={handleChange} name='title' placeholder='Komite üyesinin Ünvanı' maxLength={60} />
                <ShowInfo title="Örnek: 'Eğitim Kurulu Başkanı'. Minumum 5, maksimum 60 karakter girilebilir." />
            </CommonInfoFrame>
            <CommonInfoHead>Komite Üyesinin Fotoğrafı</CommonInfoHead>
            <AddOneImage image={committeeMember.image} handleChange={handleChange} removeFunc={removeImage} />
            {err && <ShowError>{err}</ShowError>}
            {addCommitteeMember.isSuccess && !err && <ShowSuccess>{addCommitteeMember.data.resData.message}</ShowSuccess>}
            <AcceptButton
                $PENDING={addCommitteeMember.isPending}
                disabled={addCommitteeMember.isPending || addCommitteeMember.isSuccess}
                onClick={sendRequest}>ONAYLA</AcceptButton>
        </>
    )
}

export default Add