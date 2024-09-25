import { useEffect, useState } from 'react'
import { DelButton, DelChooser, DelChooserOption, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { useMutation, useQuery } from '@tanstack/react-query';
import { committeeApi } from '@/api/committee';
import SureDelete from '../../../components/SureDelete';

const Delete = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [delModal, setDelModal] = useState(false);
    const openDelModal = () => {
        if (selectedId) {
            setDelModal(true)
        } else {
            setErr('Lütfen önce silmek istediğiniz komite üyesini seçiniz.')
        }
    };
    const closeDelModal = () => setDelModal(false);
    const back = () => {
        setHead("KOMİTE ÜYELERİ");
        backFunc();
        setBackFunc(null);
    }
    const [selectedId, setSelecetedId] = useState(null);
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
        setHead("KOMİTE ÜYELERİ - Sil");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const deleteCommitteeMember = useMutation({
        mutationFn: (id) => {
            setDelModal(false);
            return committeeApi('delete', id, null, {
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
        deleteCommitteeMember.mutate(selectedId);
    }

    const handleChange = (e) => {
        setSelecetedId(e.target.value)
        setErr(null);
    }

    return (
        <>
            <DelChooser disabled={isLoading || deleteCommitteeMember.isPending || isError} onChange={handleChange}>
                <option hidden>{isLoading ? 'Yazım Kuralları Listeleniyor...' : 'Silinecek Komite Üyesini Seçin'}</option>
                {
                    !isLoading && !isError &&
                    data.resData.map((k, i) => (
                        <DelChooserOption key={i} value={k.id}>{deleteCommitteeMember.isPending ? 'Bekleyiniz...' : k.name}</DelChooserOption>
                    ))
                }
            </DelChooser>
            {delModal && <SureDelete YES={deleteRequest} NO={closeDelModal}/>}
            {deleteCommitteeMember.isSuccess && !err && <ShowSuccess>{deleteCommitteeMember.data.resData.message}</ShowSuccess>}
            {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
            <DelButton
                $PENDING={isLoading || deleteCommitteeMember.isPending}
                disabled={isLoading || deleteCommitteeMember.isPending || isError || deleteCommitteeMember.isSuccess}
                onClick={openDelModal}>SİL</DelButton>
        </>
    )
}

export default Delete