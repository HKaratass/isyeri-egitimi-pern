import React, { useEffect, useState } from 'react'
import { DelButton, DelChooser, DelChooserOption, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { eventApi } from '@/api/event';
import { useMutation, useQuery } from '@tanstack/react-query';
import SureDelete from '../../../components/SureDelete';

const Delete = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [delModal, setDelModal] = useState(false);
    const openDelModal = () => {
        if (selectedId) {
            setDelModal(true)
        } else {
            setErr('Lütfen önce silmek istediğiniz etkinliği seçiniz.');
        }
    };
    const closeDelModal = () => setDelModal(false);
    const back = () => {
        setHead("ETKİNLİKLER");
        backFunc();
        setBackFunc(null);
    }
    const [selectedId, setSelecetedId] = useState(null);
    const { isLoading, isError, data, error } = useQuery({
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

    const deleteEvent = useMutation({
        mutationFn: (id) => {
            setDelModal(false);
            return eventApi('delete', id, null, {
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

    useEffect(() => {
        setHead("ETKİNLİKLER - Sil");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    function deleteRequest() {
        deleteEvent.mutate(selectedId);
    }

    const handleChange = (e) => {
        setSelecetedId(e.target.value)
        setErr(null);
    }

    return (
        <>
            <DelChooser disabled={isLoading || deleteEvent.isPending || isError} onChange={handleChange}>
                <option hidden>{isLoading ? 'Etkinlikler Listeleniyor...' : 'Silinecek Etkinlik Başlığını Seçin'}</option>
                {
                    !isLoading && !isError &&
                    data.resData.map((k, i) => (
                        <DelChooserOption key={i} value={k.id}>{deleteEvent.isPending ? 'Bekleyiniz...' : k.title}</DelChooserOption>
                    ))
                }
            </DelChooser>
            {delModal && <SureDelete YES={deleteRequest} NO={closeDelModal}/>}
            {deleteEvent.isSuccess && !err && <ShowSuccess>{deleteEvent.data.resData.message}</ShowSuccess>}
            {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
            <DelButton
                $PENDING={isLoading || deleteEvent.isPending}
                disabled={isLoading || deleteEvent.isPending || isError || deleteEvent.isSuccess}
                onClick={openDelModal}>SİL</DelButton>
        </>
    )
}

export default Delete