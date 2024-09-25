import React, { useEffect, useState } from 'react'
import { AcceptButton, ShowError, ShowSuccess, UpdateButton, UpdateChooser, UpdateChooserOption } from '../../styles/CommonStyle';
import { Indicator, TextArea } from './styles/thesis.styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import { thesisManualApi } from '@/api/thesisManual';

const Update = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState();
    const back = () => {
        setHead("YAZIM KURALLARI");
        backFunc();
        setBackFunc(null);
    }
    const [selectedId, setSelecetedId] = useState(null);
    const [waitingChange, setWaitingChange] = useState(false);
    const [willBeUpdate, setWillBeUpdate] = useState(null);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['tm_info'],
        queryFn: () => {
            return thesisManualApi('get', 'info');
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
        setHead("YAZIM KURALLARI - Güncelle");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const selectedThesisManuel = useMutation({
        mutationFn: (id) => {
            return thesisManualApi('get', id);
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: (data) => {
            setWillBeUpdate(data.resData);
        }
    })

    const updateThesisManuel = useMutation({
        mutationFn: (data) => {
            return thesisManualApi('put', '', data, {
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

    function chooseThesisManual() {
        if (selectedId) {
            selectedThesisManuel.mutate(selectedId);
        } else {
            setErr('Lütfen önce güncellemek istediğiniz yazım kuralı tanımlayıcı başlığını seçiniz.')
        }

    }

    const handleChange = (e) => {
        setWaitingChange(true);
        setErr(null);
        setWillBeUpdate({ ...willBeUpdate, [e.target.name]: e.target.value })
    }

    function sendRequest() {
        if (!waitingChange)
            return setErr('Henüz bir değişiklik yapmadınız.')
        if (willBeUpdate.indicator?.trim().replace(/ +/g, " ").length < 5)
            return setErr("Tanımlayacı başlık en az 5 karakter olmalı.")
        if (willBeUpdate.thesis_manual?.trim().replace(/ +/g, " ").length < 10)
            return setErr("Yazım kuralları en az 10 karakter olmalı.")

        updateThesisManuel.mutate(willBeUpdate);
    }

    return (
        <>
            {
                !selectedThesisManuel.isSuccess ?
                    <>
                        <UpdateChooser disabled={isLoading || selectedThesisManuel.isPending || isError} onChange={(e) => { setSelecetedId(e.target.value); setErr(null) }}>
                            <option hidden>{isLoading ? 'Yazım Kuralları Listeleniyor...' : 'Güncellenecek Yazım Kuralı Tanımlayıcı Başlığını Seçin'}</option>
                            {
                                !isLoading && !isError &&
                                data.resData.map((k, i) => (
                                    <UpdateChooserOption key={i} value={k.id}>{selectedThesisManuel.isPending ? "Bekleyiniz..." : k.indicator}</UpdateChooserOption>
                                ))
                            }
                        </UpdateChooser>
                        {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
                        <UpdateButton $PENDING={isLoading || selectedThesisManuel.isPending} disabled={isLoading || selectedThesisManuel.isPending || isError} onClick={chooseThesisManual}>SEÇ</UpdateButton>
                    </>
                    :
                    <>
                        <Indicator $UPDATE onChange={handleChange} name='indicator' value={willBeUpdate.indicator} maxLength={20} />
                        <TextArea  maxLength={6000} $FEEDBACK={err || updateThesisManuel.isSuccess} $UPDATE onChange={handleChange} name='thesis_manual' value={willBeUpdate.thesis_manual} />
                        {err && <ShowError>{err}</ShowError>}
                        {updateThesisManuel.isSuccess && !err && <ShowSuccess>{updateThesisManuel.data.resData.message}</ShowSuccess>}
                        <AcceptButton
                            $PENDING={updateThesisManuel.isPending}
                            disabled={updateThesisManuel.isPending || updateThesisManuel.isSuccess}
                            onClick={sendRequest}>ONAYLA</AcceptButton>
                    </>
            }
        </>
    )
}

export default Update