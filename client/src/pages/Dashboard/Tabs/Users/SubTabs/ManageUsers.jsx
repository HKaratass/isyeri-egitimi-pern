import React, { useEffect, useState } from 'react'
import { CommonToast, ScrollArea, ShowError } from '../../styles/CommonStyle';
import UserLine from '../components/UserLine';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userApi } from '@/api/user';
import SureDelete from '../../../components/SureDelete';

let delId = null;
const index = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [scs, setScs] = useState(null);
    const [delModal, setDelModal] = useState(false);
    const openDelModal = (id) => {
        if (deleteUser.isPending || err || scs || changeRank.isPending) return 0;
        delId = id;
        setDelModal(true)
    };
    const closeDelModal = () => setDelModal(false);
    const back = () => {
        setHead("KULLANICILARI YÖNET");
        backFunc();
        setBackFunc(null);
    }
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return userApi('get', 'all', null, {
                withCredentials: true,
            });
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
        setHead("KULLANICILARI YÖNET - Kullanıcıları Yönet");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const queryClient = useQueryClient();
    const deleteUser = useMutation({
        mutationFn: (id) => {
            delId = null;
            setDelModal(false);
            return userApi('delete', `delete/${id}`, null, {
                withCredentials: true,
            })
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
            setTimeout(() => {
                setErr(null);
            }, 2600);
        }
    })

    const changeRank = useMutation({
        mutationFn: (data) => {
            const { id, ...patch } = data;
            return userApi('patch', id, patch, {
                withCredentials: true,
            });
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
            setTimeout(() => {
                setErr(null);
            }, 2600);
        }
    })
    function deleteFunc(id) {
        deleteUser.mutate(id, {
            onSuccess: (data) => {
                queryClient.setQueryData(['users'], old =>
                    old.filter(k => k.id !== id)
                )
                setScs(data.message);

                setTimeout(() => {
                    setScs(null);
                }, 2600);
            }
        })
    }
    const changeRankFunc = (e, id) => {
        if (deleteUser.isPending || err || scs || changeRank.isPending) return 0;
        const newRank = e.target.value;
        changeRank.mutate({
            id,
            access_rank: newRank
        }, {
            onSuccess: (data) => {
                setScs(data.message);

                setTimeout(() => {
                    setScs(null);
                }, 2600);

                queryClient.setQueryData(['users'], old =>
                    old.map(k => k.id === id ? { ...k, access_rank: parseInt(newRank) } : k)
                        .sort((a, b) => b.access_rank - a.access_rank)
                )
            }
        })
    }

    return (
        <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
            {scs && !err && <CommonToast>{scs}</CommonToast>}
            {err && <CommonToast $ERROR>{err}</CommonToast>}
            {delModal && <SureDelete YES={() => deleteFunc(delId)} NO={closeDelModal} />}
            <ScrollArea>
                {
                    !isLoading && !isError &&
                    data?.map((k, i) => {
                        return (
                            <UserLine pending={deleteUser.isPending || err || scs || changeRank.isPending} key={i} data={k} changeRank={changeRankFunc} deleteFunc={openDelModal} />
                        )
                    })
                }
            </ScrollArea>
        </div>
    )
}

export default index