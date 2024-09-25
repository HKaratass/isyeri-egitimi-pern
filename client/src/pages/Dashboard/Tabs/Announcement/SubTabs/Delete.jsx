import { useEffect, useState } from 'react'
import {
    DelButton, DelChooser, DelChooserOption,
    ShowError, ShowSuccess
} from '../../styles/CommonStyle';
import { useMutation, useQuery } from '@tanstack/react-query';
import { announcementApi } from '@/api/announcement';
import SureDelete from '../../../components/SureDelete';

const Delete = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [delModal, setDelModal] = useState(false);
    const openDelModal = () => {
        if (selectedId) {
            setDelModal(true)
        } else {
            setErr('Lütfen önce silmek istediğiniz duyuru başlığını seçiniz.')
        }
    };
    const closeDelModal = () => setDelModal(false);
    const back = () => {
        setHead("DUYURULAR");
        backFunc();
        setBackFunc(null);
    }
    const [selectedId, setSelecetedId] = useState(null);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['a_info'],
        queryFn: () => {
            return announcementApi('get', 'info');
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
        setHead("DUYURULAR - Sil");
        setBackFunc(() => {
            return () => {
                back();
            }
        })
    }, [])


    const deleteAnnouncement = useMutation({
        mutationFn: (id) => {
            setDelModal(false);
            return announcementApi('delete', id, null, {
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

    function deleteRequest() {
        deleteAnnouncement.mutate(selectedId);
    }


    const handleChange = (e) => {
        setSelecetedId(e.target.value)
        setErr(null);
    }

    return (
        <>
            <DelChooser disabled={isLoading || deleteAnnouncement.isPending || isError} onChange={handleChange}>
                <option hidden>{isLoading ? 'Duyuru Başlıkları Listeleniyor...' : 'Silinecek Duyurunun Başlığını Seçin'}</option>
                {
                    !isLoading && !isError &&
                    data.resData.map((k, i) => (
                        <DelChooserOption key={i} value={k.id}>{deleteAnnouncement.isPending ? 'Bekleyiniz...' : k.head}</DelChooserOption>
                    ))
                }
            </DelChooser>
            {delModal && <SureDelete YES={deleteRequest} NO={closeDelModal}/>}
            {deleteAnnouncement.isSuccess && !err && <ShowSuccess>{deleteAnnouncement.data.resData.message}</ShowSuccess>}
            {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
            <DelButton
                $PENDING={isLoading || deleteAnnouncement.isPending}
                disabled={isLoading || deleteAnnouncement.isPending || isError || deleteAnnouncement.isSuccess}
                onClick={openDelModal}>SİL</DelButton>
        </>
    )
}

export default Delete