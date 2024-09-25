import { useEffect, useState } from 'react'
import { RemovedButton, ShowImage, ShowImageFrame } from '../../../components/styles/AddOneImage.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CommonToast, OnAirButton, ScrollArea } from '../../styles/CommonStyle';
import { target } from '@/data/common';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { sliderApi } from '@/api/slider';
import SureDelete from '../../../components/SureDelete';

const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let delId = null;
const Delete = ({ allEvents_IdAndTitle, setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [scs, setScs] = useState(null);
    const [delModal, setDelModal] = useState(false);
    const openDelModal = (id) =>{
        if (patchSlide.isPending || err || scs || deleteSlide.isPending) return 0
        delId = id;
        setDelModal(true)
    };
    const closeDelModal = () => setDelModal(false);
    const back = () => {
        setHead("SLAYTLAR");
        backFunc();
        setBackFunc(null);
    }
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['slides_all'],
        queryFn: () => {
            return sliderApi('get', 'all', null, {
                withCredentials: true,
            });
        },
        refetchOnWindowFocus: false,
    })
    useEffect(() => {
        if (isError) {
            setTimeout(() => {
                back()
            }, 3000);
        }
    }, [isError])

    useEffect(() => {
        setHead("SLAYTLAR - Güncelle - Sil");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const queryClient = useQueryClient();
    const patchSlide = useMutation({
        mutationFn: (data) => {
            return sliderApi('patch', '', data, {
                withCredentials: true,
            });
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);

            setTimeout(() => {
                setErr(null);
            }, 2600);
        },
        onSuccess: (data) => {
            const { message, ...withOutMessage } = data;
            queryClient.setQueryData(['slides_all'], old =>
                old.map(k => k.id === withOutMessage.id ? withOutMessage : k)
                    .sort((a, b) => parseInt(a.queue) - parseInt(b.queue))
            )
            setScs(message);

            setTimeout(() => {
                setScs(null);
            }, 2600);
        }
    })


    const deleteSlide = useMutation({
        mutationFn: (id) => {
            delId = null;
            setDelModal(false);
            return sliderApi('delete', id, null, {
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

    const removeFunc = (id) => {
        deleteSlide.mutate(id, {
            onSuccess: (data) => {
                queryClient.setQueryData(['slides_all'], old =>
                    old.filter(k => k.id !== id)
                )
                setScs(data.message);

                setTimeout(() => {
                    setScs(null);
                }, 2600);
            }
        })
    }

    function handleChangePatchUpdate(e, id) {
        if (patchSlide.isPending || err || scs || deleteSlide.isPending) return 0
        const sendData = { id, [e.target.name]: e.target.value };
        patchSlide.mutate(sendData);
    }
    
    return (
        <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
            {scs && !err && <CommonToast>{scs}</CommonToast>}
            {err && <CommonToast $ERROR>{err}</CommonToast>}
            {delModal && <SureDelete YES={() => removeFunc(delId)} NO={closeDelModal}/>}
            <ScrollArea>
                <div style={{
                    textAlign: "center",
                    margin: "5px 10px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 0",
                    borderRadius: "5px",
                }}>Lütfen daha sonra kullanmayacağınız slaytları siliniz.</div>
                <div style={{
                    textAlign: "center",
                    margin: "5px 10px",
                    backgroundColor: "black",
                    color: "red",
                    padding: "5px 0",
                    borderRadius: "5px",
                }}><label style={{ fontWeight: "700" }}>Dikkat!</label> Slaytın yayında olmaması demek sadece slayt ekranında gözükmeyeceği anlamına gelir. Arka plandan yetkisiz erişim yapılabilir.</div>
                {
                    (isLoading || isError) ?
                        (
                            isError ?
                                <div>Yüklenemedi</div>
                                :
                                <div>Slaytlar yükleniyor</div>
                        )
                        :
                        data?.map((k, i) => (
                            <ShowImageFrame style={{ margin: "10px 10px" }} key={i} $SLIDE>
                                <ShowImage src={`${import.meta.env.VITE_API_URL}/Images/Slider/${k.id}.jpg`} alt="Loaded Photo" />
                                <RemovedButton
                                    $PENDING={patchSlide.isPending || err || scs || deleteSlide.isPending}
                                    title='Slaytı sil.' onClick={() => openDelModal(k.id)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </RemovedButton>
                                <OnAirButton
                                    $PENDING={patchSlide.isPending || err || scs || deleteSlide.isPending}
                                    $onAir={k.onAir}
                                    title={k.onAir ? 'Şu an yayında, basarsanız yayından kalkar.' : 'Şu an yayında değil, basarsanız yayına girer.'}
                                    onClick={() => handleChangePatchUpdate({
                                        target: {
                                            name: "onAir",
                                            value: !k.onAir
                                        }
                                    }, k.id)}>
                                    <FontAwesomeIcon icon={faPowerOff} />
                                </OnAirButton>
                                <select
                                    name="queue"
                                    disabled={patchSlide.isPending || err || scs || deleteSlide.isPending}
                                    title='Slayt sırası' style={{
                                        position: "absolute",
                                        top: "2em",
                                        right: "1em",
                                        outline: "0",
                                        cursor: (patchSlide.isPending || err || scs || deleteSlide.isPending) ? "progress" : "pointer"
                                    }}
                                    value={k.queue}
                                    onChange={(e) => handleChangePatchUpdate(e, k.id)}
                                >
                                    {
                                        queue.map((x, s) => (
                                            <option key={s} value={x}>{x}</option>
                                        ))
                                    }
                                </select>

                                <select name="event_id"
                                    disabled={patchSlide.isPending || err || scs || deleteSlide.isPending}
                                    title='Etkinlik Başlığı Bağlılık'
                                    style={{
                                        position: "absolute",
                                        top: "1em",
                                        left: "1em",
                                        outline: "0",
                                        cursor: (patchSlide.isPending || err || scs || deleteSlide.isPending) ? "progress" : "pointer"
                                    }}
                                    value={k.event_id}
                                    onChange={(e) => handleChangePatchUpdate(e, k.id)}
                                >
                                    <option value={0}>Etkinlik Bağdaştırma Yok</option>
                                    {
                                        allEvents_IdAndTitle?.map((x, s) => (
                                            <option key={s} value={x.id}>{x.title}</option>
                                        ))
                                    }
                                </select>

                                <select name="target"
                                    disabled={patchSlide.isPending || err || scs || deleteSlide.isPending}
                                    title='Etkinlik Alt Başlığı Bağlılık'
                                    style={{
                                        position: "absolute",
                                        top: "3em",
                                        left: "1em",
                                        outline: "0",
                                        cursor: (patchSlide.isPending || err || scs || deleteSlide.isPending) ? "progress" : "pointer"
                                    }}
                                    value={k.target || 'about'}
                                    onChange={(e) => handleChangePatchUpdate(e, k.id)}
                                >
                                    {
                                        target.map((x, s) => (
                                            <option key={s} value={x.link}>{x.tr}</option>
                                        ))
                                    }
                                </select>
                            </ShowImageFrame>
                        ))
                }
            </ScrollArea>
        </div>
    )
}

export default Delete