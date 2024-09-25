import { useEffect, useState } from 'react'
import AddOneImage from '../../../components/AddOneImage';
import { Head, TextArea } from './styles/announcement.styled';
import {
    AcceptButton, AddChooser, AddChooserOption, CommonInfoFrame,
    CommonInfoHead, ShowError, ShowInfo, ShowSuccess
} from '../../styles/CommonStyle';
import { normalizeFileName } from '@/utils/helperFunctions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { announcementApi } from '@/api/announcement';

const AddAnnouncement = ({ backFunc, allEvents_IdAndTitle, setHead, setBackFunc }) => {
    const [err, setErr] = useState();
    const back = () => {
        setHead("DUYURULAR");
        backFunc();
        setBackFunc(null);
    }
    const [announcement, setAnnouncement] = useState({
        // head: "",
        // description: "", 
        // image: <file>
    })

    useEffect(() => {
        setHead("DUYURULAR - Ekle");
        setBackFunc(() => {
            return () => {
                back();
            }
        })
    }, [])

    const addAnnouncement = useMutation({
        mutationFn: (data) => {
            return announcementApi('post', '', data, {
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
        if (addAnnouncement.isPending || addAnnouncement.isSuccess) return 0;

        if (e.target.name === 'image') {
            const url = URL.createObjectURL(e.target.files[0]);
            setAnnouncement({ ...announcement, image: { file: e.target.files[0], url } });
        } else if (e.target.name === 'event_id') {
            if (e.target.value !== "0") {
                setAnnouncement({ ...announcement, [e.target.name]: parseInt(e.target.value) })
            } else {
                const { event_id, ...announcementWithOutEvent_Id } = announcement
                setAnnouncement(announcementWithOutEvent_Id);
            }
        } else {
            setAnnouncement({ ...announcement, [e.target.name]: e.target.value })
        }
        setErr(null);
    }

    const sendRequest = () => {
        if (announcement.head?.trim().length < 1 || !announcement.head)
            return setErr("Başlık en az 1 karakter olmalı.")
        if (announcement.description?.trim().replace(/ +/g, " ").length < 10 || !announcement.description)
            return setErr("Metin en az 10 karakter olmalı.")

        const { image, ...temp } = announcement;

        if (!image)
            return setErr("Duyurularda fotoğraf zorunludur. Lütfen fotoğraf ekleyiniz.")

        const formData = new FormData();
        formData.append("data", JSON.stringify({ ...temp }));
        formData.append(
            "image",
            announcement.image.file,
            normalizeFileName(announcement.image.file.name)
        );

        addAnnouncement.mutate(formData);
    }

    function removeImage() {
        //handle disabled
        if (!addAnnouncement.isPending && !addAnnouncement.isSuccess)
            setAnnouncement({ ...announcement, image: null })
    }

    return (
        <>
            <CommonInfoFrame>
                <Head $ADD maxLength={50} onChange={handleChange} name='head' placeholder='Duyuru Başlık' />
                <ShowInfo title="Duyurunun başlık alanıdır. Minumum 1, maksimum 50 karakter girilebilir." />
            </CommonInfoFrame>

            <CommonInfoFrame style={{ height: "calc(100% - 380px - 20px - 1.6em)" }}>
                <TextArea $ADD onChange={handleChange} name="description" maxLength={6000} placeholder='Duyuru Metni (Minumum 10, maksimum 6000 karakter girilebilir.) ' />
                <ShowInfo title="Duyurunun açıklama alanıdır. Minumum 10, maksimum 6000 karakter girilebilir." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <AddChooser onChange={handleChange} name='event_id'>
                    <option hidden>Etkinlik ile Bağdaştır</option>
                    <AddChooserOption value={0}>Etkinlik Bağdaştırma Yok</AddChooserOption>
                    {
                        allEvents_IdAndTitle?.map((k, i) => (
                            <AddChooserOption key={i} value={k.id}>{k.title}</AddChooserOption>
                        ))
                    }
                </AddChooser>
                <ShowInfo title="Duyuruya tıklandığında açılacak etkinliği seçiniz. Eğer yoksa boş bırakınız." />
            </CommonInfoFrame>
            <CommonInfoHead>Duyuru Görseli Ekle (Zorunlu)</CommonInfoHead>
            <AddOneImage crop={(err || addAnnouncement.isSuccess) ? true : false} title="Görsel Eklemek Zorunlu" image={announcement.image} handleChange={handleChange} removeFunc={removeImage} />
            {addAnnouncement.isSuccess && !err && <ShowSuccess>{addAnnouncement.data.resData.message}</ShowSuccess>}
            {err && <ShowError>{err}</ShowError>}
            <AcceptButton
                $PENDING={addAnnouncement.isPending}
                disabled={addAnnouncement.isPending || addAnnouncement.isSuccess}
                onClick={sendRequest}>ONAYLA</AcceptButton>
        </>
    )
}

export default AddAnnouncement
