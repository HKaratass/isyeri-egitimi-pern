import { useEffect, useState } from 'react'
import { DelButton, DelChooser, DelChooserOption, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { useMutation, useQuery } from '@tanstack/react-query';
import { thesisManualApi } from '@/api/thesisManual';
import SureDelete from '../../../components/SureDelete';

const Delete = ({ setHead, backFunc, setBackFunc }) => {
    const [selectedId, setSelecetedId] = useState(null);
    const [err, setErr] = useState(null);
    const [delModal, setDelModal] = useState(false);
    const openDelModal = () =>{
        if (selectedId) {
            setDelModal(true)
        } else {
            setErr('Lütfen önce silmek istediğiniz yazım kuralı tanımlayıcı başlığını seçiniz.');
        }
    };
    const closeDelModal = () => setDelModal(false);
    const back = () => {
        setHead("YAZIM KURALLARI");
        backFunc();
        setBackFunc(null);
    }
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
        setHead("YAZIM KURALLARI - Sil");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const deleteThesisManuel = useMutation({
        mutationFn: (id) => {
            setDelModal(false);
            return thesisManualApi('delete', id, null, {
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
        deleteThesisManuel.mutate(selectedId);
    }

    const handleChange = (e) => {
        setSelecetedId(e.target.value)
        setErr(null);
    }

    return (
        <>
            <DelChooser disabled={isLoading || deleteThesisManuel.isPending || isError} onChange={handleChange}>
                <option hidden>{isLoading ? 'Yazım Kuralları Listeleniyor...' : 'Silinecek Yazım Kuralı Tanımlayıcı Başlığını Seçin'}</option>
                {
                    !isLoading && !isError &&
                    data.resData.map((k, i) => (
                        <DelChooserOption key={i} value={k.id}>{deleteThesisManuel.isPending ? 'Bekleyiniz...' : k.indicator}</DelChooserOption>
                    ))
                }
            </DelChooser>
            {delModal && <SureDelete YES={deleteRequest} NO={closeDelModal}/>}
            {deleteThesisManuel.isSuccess && !err && <ShowSuccess>{deleteThesisManuel.data.resData.message}</ShowSuccess>}
            {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
            <DelButton
                $PENDING={isLoading || deleteThesisManuel.isPending}
                disabled={isLoading || deleteThesisManuel.isPending || isError || deleteThesisManuel.isSuccess}
                onClick={openDelModal}>SİL</DelButton>
        </>
    )
}

export default Delete