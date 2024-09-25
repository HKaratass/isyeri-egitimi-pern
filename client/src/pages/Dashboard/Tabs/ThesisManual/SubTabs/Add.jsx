import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AcceptButton, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { Indicator, TextArea } from './styles/thesis.styled';
import { useMutation } from '@tanstack/react-query';
import { thesisManualApi } from '@/api/thesisManual';

const Add = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState();
    const [postData, setPostData] = useState({
        // indicator: ""
        // thesis_manual: ""
    });
    useEffect(() => {
        setHead("YAZIM KURALLARI - Ekle");
        setBackFunc(() => {
            return () => {
                setHead("YAZIM KURALLARI");
                backFunc();
                setBackFunc(null);
            }
        })
    }, [])

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
        setErr(null);
    }

    const mutation = useMutation({
        mutationFn: (data) => {
            return thesisManualApi('post', '', data, {
                withCredentials: true,
            })
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: () => {
            setTimeout(() => {
                setHead("YAZIM KURALLARI");
                backFunc();
                setBackFunc(null);
            }, 1000);
        }
    })

    function sendRequest() {
        if (postData.indicator?.trim().replace(/ +/g, " ").length < 5 || !postData.indicator)
            return setErr("Tanımlayacı başlık en az 5 karakter olmalı.")
        if (postData.thesis_manual?.trim().replace(/ +/g, " ").length < 10 || !postData.thesis_manual)
            return setErr("Yazım kuralları en az 10 karakter olmalı.")
        mutation.mutate(postData);
    }

    return (
        <>
            <Indicator $ADD onChange={handleChange} name='indicator' placeholder='Tanımlayıcı Başlık Ekle (Maksimum 20 karakter)' maxLength={20} />
            <TextArea $FEEDBACK={err || mutation.isSuccess} $ADD onChange={handleChange} name='thesis_manual' placeholder='Yazım Kuralları (Maksimum 6000 karakter)' maxLength={6000} />
            {err && <ShowError>{err}</ShowError>}
            {mutation.isSuccess && !err && <ShowSuccess>{mutation.data.resData.message}</ShowSuccess>}
            <AcceptButton $PENDING={mutation.isPending} disabled={mutation.isPending || mutation.isSuccess} onClick={sendRequest}>ONAYLA</AcceptButton>
        </>
    )
}

export default Add