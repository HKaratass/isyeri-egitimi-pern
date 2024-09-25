import React, { useEffect, useState } from 'react'
import AddOneImage from '../../../components/AddOneImage'
import { CheckBox, CheckBoxLabel } from '../../styles/AddSlide.styled'
import {
    AcceptButton, AddChooser, AddChooserOption,
    CommonInfoFrame, CommonInfoHead, ShowError,
    ShowInfo, ShowSuccess
} from '../../styles/CommonStyle'
import { useMutation } from '@tanstack/react-query'
import { sliderApi } from '@/api/slider';
import { target } from '@/data/common';
import { normalizeFileName } from '@/utils/helperFunctions';


const Add = ({ allEvents_IdAndTitle, setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const back = () => {
        setHead("SLAYTLAR");
        backFunc();
        setBackFunc(null);
    }
    const [slide, setSlide] = useState({
        onAir: true, //default geçildi databasede
        // event_id
        // target
        // image: [] //tek dosya json yeter
    })
    const mutation = useMutation({
        mutationFn: (data) => {
            return sliderApi('post', '', data, {
                withCredentials: true,
            });
        },
        onError: () => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: () => {
            setTimeout(() => {
                back();
            }, 1000);
        }
    })

    useEffect(() => {
        setHead("SLAYTLAR - Ekle");
        setBackFunc(() => {
            return () => {
                back();
            }
        })
    }, [])


    function handleChange(e) {
        if (e.target.name === 'image') {
            const url = URL.createObjectURL(e.target.files[0])
            setSlide({ ...slide, image: { file: e.target.files[0], url } });
        } else if (e.target.name === 'event_id') {
            if (e.target.value !== '0') {
                setSlide({ ...slide, [e.target.name]: parseInt(e.target.value) })
            } else {
                const { event_id, ...slideWithOutEvent_Id } = slide
                setSlide(slideWithOutEvent_Id);
            }
        } else if (e.target.name === 'target') {
            if (e.target.value !== "about") {
                setSlide({ ...slide, [e.target.name]: e.target.value })
            } else {
                const { target, ...announcementWithOutTarget } = slide
                setSlide(announcementWithOutTarget);
            }
        } else if (e.target.name === 'onAir') {
            setSlide({ ...slide, [e.target.name]: !slide.onAir })
        } else {
            setSlide({ ...slide, [e.target.name]: e.target.value })
        }
        setErr(null);
    }



    const sendRequest = () => {
        if(!slide.image)
        return setErr("Görsel eklemek zorunlu.")
        const { image, ...temp } = slide;
        const formData = new FormData();
        formData.append("data", JSON.stringify(temp));

        slide.image && formData.append(
            "image",
            slide.image.file,
            normalizeFileName(slide.image.file.name)
        );
        mutation.mutate(formData);
    }

    function removeImage() {
        //handle disabled
        if (!mutation.isPending && !mutation.isSuccess)
            setSlide({ ...slide, image: null })
    }


    return (
        <>
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
                <ShowInfo title="Slayta tıklandığında açılacak etkinliği seçiniz. Eğer yoksa boş bırakınız." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <AddChooser onChange={handleChange} name='target'>
                    <AddChooserOption hidden>Etkinlik Alt Başlığı ile Bağdaştır</AddChooserOption>
                    {
                        target.map((k, i) => (
                            <AddChooserOption key={i} value={k.link}>{k.tr}</AddChooserOption>
                        ))
                    }
                </AddChooser>
                <ShowInfo title="Slayta tıklandığında açılacak etkinliğin alt başlığını seçiniz. Varsayılan Hakkında alt başlığıdır." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <CheckBoxLabel>
                    <CheckBox onChange={handleChange} name="onAir" checked={slide.onAir} />
                    Yayına Alısın Mı?
                </CheckBoxLabel>
                <ShowInfo title="Slayt yüklendikten sonra gösterime çıksın mı?" />
            </CommonInfoFrame>

            <CommonInfoHead>Slayt Görseli Ekle (Zorunlu)</CommonInfoHead>
            <AddOneImage crop={(err || mutation.isSuccess) ? true : false} slide title="Görsel Eklemek Zorunlu" image={slide.image} handleChange={handleChange} removeFunc={removeImage} />
            {mutation.isSuccess && !err && <ShowSuccess>{mutation.data.message}</ShowSuccess>}
            {err && <ShowError>{err}</ShowError>}
            <AcceptButton
                $PENDING={mutation.isPending}
                disabled={mutation.isPending || mutation.isSuccess}
                onClick={sendRequest}>ONAYLA</AcceptButton>
        </>
    )
}

export default Add