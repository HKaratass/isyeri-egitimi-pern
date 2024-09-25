import { useEffect, useState } from 'react'
import { AcceptButton, CommonInfoFrame, CommonInfoHead, CommonInputDate, CommonInputText, CommonProgressAnimBar, CommonProgressFrame, CommonProgressInfo, ScrollArea, ShowError, ShowInfo, ShowSuccess, UpdateButton, UpdateChooser, UpdateChooserOption } from '../../styles/CommonStyle';
import { AcceptDateButton, DateInfoFrame, DateInfoFrameInner, DateInfoLabel, DateLine, DatesArea, SubHead, TextArea } from './styles/event.styled';
import { event_type } from '@/data/common';
import { RemovedButton } from '../../../components/styles/AddOneImage.styled';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KurulCard from '../../../../Detail/[id]/components/KurulCard';
import SelectCommitteeMember from '../../../components/SelectCommitteeMember';
import { CommitteeContainer } from '../../styles/AddEvent.styled';
import AddFiles from '../../../components/AddFiles';
import AddMultiImage from '../../../components/AddMultiImage';
import AddOneImage from '../../../components/AddOneImage';
import { CheckBox, CheckBoxLabel } from '../../styles/AddSlide.styled';
import { normalizeFileName, dateFormat_TR } from '@/utils/helperFunctions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { eventApi } from '@/api/event';
import { committeeApi } from '@/api/committee';
import { thesisManualApi } from '@/api/thesisManual';
import { TimeZonePlus3, startEndDateFormatter } from '../../../../../utils/helperFunctions';

const handleError = (event) => {
    if (event.title.trim().replace(/ +/g, " ").length < 3)
        return "Başlık en 3 karakter olmalı.";
    if (event.subtitle.trim().replace(/ +/g, " ").length < 5)
        return "Alt başlık en 5 karakter olmalı.";
    return null;
}

const Update = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const back = () => {
        setHead("ETKİNLİKLER");
        backFunc();
        setBackFunc(null);
    }
    const [tempDate, setTempDate] = useState({
        title: "",
        start_date: "",
        end_date: "",
    });
    const [selectedId, setSelecetedId] = useState(null);
    const [willBeUpdate, setWillBeUpdate] = useState(null);
    const [tempDates, setTempDates] = useState([]);
    const { isLoading: committeeIsLoading, isError: committeeIsError, data: committeeData, error: committeeError } = useQuery({
        queryKey: ['c_all'],
        queryFn: () => {
            return committeeApi('get', '');
        }
    })
    const { isLoading: thesisManualIsLoading, isError: thesisManualIsError, data: thesisManualData, error: thesisManualError } = useQuery({
        queryKey: ['tm_info'],
        queryFn: () => {
            return thesisManualApi('get', 'info');
        }
    })
    //listed_events
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

    useEffect(() => {
        setHead("ETKİNLİKLER - Güncelle");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    const gallery = [];
    const contents = []
    const selectedEvent = useMutation({
        mutationFn: (id) => {
            return eventApi('get', `${id}/for-update`);
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: (data) => {
            data.resData.contents?.map((k, _) => {
                const json = JSON.parse(k)
                contents.push({ ...json, file: { name: json.file_name }, url: `${import.meta.env.VITE_API_URL}/Contents/Events/${data.resData.id}/${json.file_name}` });
            })
            data.resData.gallery?.map((k, _) => {
                const json = JSON.parse(k)
                gallery.push({ ...json, url: `${import.meta.env.VITE_API_URL}/Images/Events/${data.resData.id}/${json.image_id}.jpg` });
            })

            const formatedData = {
                ...data.resData,
                start_date: data.resData.start_date ? TimeZonePlus3(data.resData.start_date) : null,
                end_date: data.resData.end_date ? TimeZonePlus3(data.resData.end_date) : null,
                sum_first_day_date: data.resData.sum_first_day_date ? TimeZonePlus3(data.resData.sum_first_day_date) : null,
                sum_last_day_date: data.resData.sum_last_day_date ? TimeZonePlus3(data.resData.sum_last_day_date) : null,
                text_first_day_date: data.resData.text_first_day_date ? TimeZonePlus3(data.resData.text_first_day_date) : null,
                text_last_day_date: data.resData.text_last_day_date ? TimeZonePlus3(data.resData.text_last_day_date) : null,
                contents: contents,
                gallery: gallery,
                files: [],
                images: [],
                dates: [],
                imageFreeId: [],
                fileFreeId: [],
            }
            data.resData.schedule ? (formatedData.schedule = { url: `${import.meta.env.VITE_API_URL}/Images/Events/${data.resData.id}/schedule.jpg` }) : formatedData.schedule = false;
            setWillBeUpdate(formatedData);
            setTempDates(data.resData.dates?.slice(3));
        }
    })
    function chooseEvent() {
        if (selectedId) {
            selectedEvent.mutate(selectedId);
        } else {
            setErr('Lütfen önce güncellemek istediğiniz etkinliği seçiniz.')
        }
    }

    function tempDateHandleChange(e) {
        if (updateEvent.isPending || updateEvent.isSuccess) return 0;
        if (e.target.name === 'start_date' || e.target.name === 'end_date')
            setTempDate({ ...tempDate, [e.target.name]: new Date(e.target.value) })
        else
            setTempDate({ ...tempDate, [e.target.name]: e.target.value });
    }

    function handleChange(e, key) {
        if (e.target.name === 'images') {
            for (let i = 0; i < e.target.files.length; i++) {
                // .filter(item => item.hasOwnProperty('url'))
                if (willBeUpdate.gallery.length < 12) {
                    const lastDotIndex = e.target.files[i].name.lastIndexOf('.');
                    const fileNameWithoutExtension = e.target.files[i].name.slice(0, lastDotIndex);

                    const url = URL.createObjectURL(e.target.files[i])
                    willBeUpdate.images.push({ file: e.target.files[i], url, title: (lastDotIndex === -1 || lastDotIndex === 0) ? e.target.files[i].name : fileNameWithoutExtension })
                    willBeUpdate.gallery.push({ url, title: (lastDotIndex === -1 || lastDotIndex === 0) ? e.target.files[i].name : fileNameWithoutExtension })
                }

            }
            setWillBeUpdate({ ...willBeUpdate });
        } else if (e.target.name === 'files') {
            for (let i = 0; i < e.target.files.length; i++) {
                if (willBeUpdate.contents.length < 8) {
                    const lastDotIndex = e.target.files[i].name.lastIndexOf('.');
                    const fileNameWithoutExtension = e.target.files[i].name.slice(0, lastDotIndex);

                    const url = URL.createObjectURL(e.target.files[i])
                    willBeUpdate.files.push({ file: e.target.files[i], url, title: (lastDotIndex === -1 || lastDotIndex === 0) ? e.target.files[i].name : fileNameWithoutExtension })
                    willBeUpdate.contents.push({ url, file: { name: e.target.files[i].name }, title: (lastDotIndex === -1 || lastDotIndex === 0) ? e.target.files[i].name : fileNameWithoutExtension })
                }
            }
            setWillBeUpdate({ ...willBeUpdate });
        } else if (e.target.name === 'onAir') {
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: !willBeUpdate.onAir })
        } else if (e.target.name === 'file_name') {
            willBeUpdate.files[key].title = e.target.value;
            setWillBeUpdate({ ...willBeUpdate });
        } else if (e.target.name === 'image_name') {
            // .filter(item => item.hasOwnProperty('url'))
            willBeUpdate.gallery[key].title = e.target.value;
            setWillBeUpdate({ ...willBeUpdate });
        } else if (e.target.name === 'schedule') {
            const url = URL.createObjectURL(e.target.files[0]);
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: { file: e.target.files[0], url } });
        } else if (
            e.target.name === 'start_date' ||
            e.target.name === 'end_date' ||
            e.target.name === 'sum_first_day_date' ||
            e.target.name === 'sum_last_day_date' ||
            e.target.name === 'text_first_day_date' ||
            e.target.name === 'text_last_day_date'
        ) {
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: new Date(e.target.value) })
        } else if (e.target.name === 'committee_chairman') {
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: parseInt(e.target.value) })
        } else if (e.target.name === 'science_committee') {
            willBeUpdate.science_committee.push(parseInt(e.target.value))
            setWillBeUpdate({ ...willBeUpdate })
        } else if (e.target.name === 'regulatory_authority') {
            willBeUpdate.regulatory_authority.push(parseInt(e.target.value))
            setWillBeUpdate({ ...willBeUpdate })
        } else {
            setWillBeUpdate({ ...willBeUpdate, [e.target.name]: e.target.value })
        }
        setErr(null);
    }

    const [progress, setProgress] = useState(0);
    const updateEvent = useMutation({
        mutationFn: (data) => {
            return eventApi('put', '', data, {
                withCredentials: true,
                onUploadProgress: progressEvent => setProgress(Math.round(
                    (progressEvent.loaded * 1000) / progressEvent.total
                )),
            })
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: () => {
            setTimeout(() => {
                back()
            }, 1000);
        },
    })

    const sendEvent = () => {
        const error = handleError(willBeUpdate);
        if (error)
            return setErr(error);
        const dates = [];
        dates.push(`Özet Gönderimi İçin Son Tarih: ${startEndDateFormatter(willBeUpdate.sum_first_day_date, willBeUpdate.sum_last_day_date)}`);
        dates.push(`Tam Metin Gönderme Tarihi: ${startEndDateFormatter(willBeUpdate.text_first_day_date, willBeUpdate.text_last_day_date)}`);
        dates.push(`${event_type[willBeUpdate.event_type || 0]} Tarihi: ${startEndDateFormatter(willBeUpdate.start_date, willBeUpdate.end_date)}`);
        willBeUpdate.dates = dates;
        const { images, schedule, files, ...temp } = willBeUpdate;

        if (willBeUpdate.schedule === -1) {
            temp.schedule = -1;
        }

        const formData = new FormData();
        formData.append("data", JSON.stringify({ ...temp, dates: [...willBeUpdate.dates, ...tempDates] }));

        willBeUpdate.schedule?.file && formData.append("schedule", willBeUpdate.schedule.file, normalizeFileName(willBeUpdate.schedule.file.name));

        for (let i = 0; i < willBeUpdate.images.length; i++) {
            formData.append(`images`, willBeUpdate.images[i].file, normalizeFileName(willBeUpdate.images[i].file.name));
        }
        for (let i = 0; i < willBeUpdate.files.length; i++) {
            formData.append(`files`, willBeUpdate.files[i].file, normalizeFileName(willBeUpdate.files[i].file.name));
        }

        updateEvent.mutate(formData);
    }

    const confirmDate = () => {
        if (tempDate.start_date !== "" && tempDate.end_date !== "" && tempDate.title !== "") {
            tempDates.push(`${tempDate.title}: ${startEndDateFormatter(tempDate.start_date, tempDate.end_date)}`)
            setTempDates(tempDates);
            setTempDate({ ...tempDate, title: "" });
        }
    }
    const removeSchedule = () => {
        setWillBeUpdate({ ...willBeUpdate, schedule: -1 });
    }

    const removeGalleryImage = (url) => {
        willBeUpdate.gallery.map((k, i) => {
            if (k.url === url) {
                if (k.image_id || k.image_id === 0)
                    willBeUpdate.imageFreeId.push(k.image_id);

                willBeUpdate.gallery.splice(i, 1);
            }
        })
        setWillBeUpdate({ ...willBeUpdate });
    }

    const removeFileFromFiles = (url) => {
        willBeUpdate.contents.map((k, i) => {
            if (k.url === url) {
                if (k.file_name)
                    //DİKKAT SADECE TEK HANELİ DOSYA SAYISINDA ÇALIŞIR
                    willBeUpdate.fileFreeId.push(k.file_name.substring(0, 1));
                willBeUpdate.contents.splice(i, 1);
            }
        })
        setWillBeUpdate({ ...willBeUpdate });
    }
    const removeDate = (index) => {
        setTempDates(tempDates.filter((_, i) => i !== index));
    }

    function removeCommitteeMember(index, groupName) {
        if (groupName === "committee_chairman") {
            setWillBeUpdate({ ...willBeUpdate, committee_chairman: 0 })
        }
        if (groupName === "science_committee") {
            setWillBeUpdate({ ...willBeUpdate, science_committee: willBeUpdate.science_committee.filter((k, i) => i !== index) })
        }
        if (groupName === "regulatory_authority") {
            setWillBeUpdate({ ...willBeUpdate, regulatory_authority: willBeUpdate.regulatory_authority.filter((k, i) => i !== index) })
        }
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    return (
        <>
            {
                !selectedEvent.isSuccess ?
                    <>
                        <UpdateChooser disabled={isLoading || selectedEvent.isPending || isError} onChange={(e) => { setSelecetedId(e.target.value); setErr(null) }}>
                            <option hidden>{isLoading ? 'Etkinlikler Listeleniyor...' : 'Güncellenecek Etkinlik Başlığını Seçin'}</option>
                            {
                                !isLoading && !isError &&
                                data.resData.map((k, i) => (
                                    <UpdateChooserOption key={i} value={k.id}>{selectedEvent.isPending ? "Bekleyiniz..." : k.title}</UpdateChooserOption>
                                ))
                            }
                        </UpdateChooser>
                        {(isError || err) && <ShowError>{isError ? `${error.data?.code} - ${error.data?.message}` : err}</ShowError>}
                        <UpdateButton
                            $PENDING={isLoading || selectedEvent.isPending}
                            disabled={isLoading || selectedEvent.isPending || isError}
                            onClick={chooseEvent}>SEÇ</UpdateButton>
                    </>
                    :
                    <ScrollArea>
                        <CommonInfoFrame>
                            <UpdateChooser value={willBeUpdate.event_type} name="event_type" onChange={handleChange}>
                                <UpdateChooserOption value={0}>Sempozyum</UpdateChooserOption>
                                <UpdateChooserOption value={1}>Panel</UpdateChooserOption>
                                <UpdateChooserOption value={2}>Çalıştay</UpdateChooserOption>
                            </UpdateChooser>
                            <ShowInfo title="Etkinliğin tipi şeçiniz. Varsayılan sempozyum." />
                        </CommonInfoFrame>

                        <CommonInfoFrame>
                            <CommonInputText value={willBeUpdate.title} $UPDATE onChange={handleChange} name='title' placeholder={`Etkinlik (${event_type[willBeUpdate.event_type || 0]}) Başlığı`} />
                            <ShowInfo title="Etkinliğin başlık alanıdır. Minumum 1, maksimum 100 karakter girilebilir." />
                        </CommonInfoFrame>

                        <CommonInfoFrame>
                            <CommonInputText value={willBeUpdate.subtitle} $UPDATE onChange={handleChange} name='subtitle' placeholder={`Etkinlik (${event_type[willBeUpdate.event_type || 0]}) Alt Başlığı`} />
                            <ShowInfo title="Etkinliğin alt başlık alanıdır. Minumum 5, maksimum 200 karakter girilebilir. Sadece tabloda görünür." />
                        </CommonInfoFrame>

                        <DateInfoFrame>
                            <DateInfoFrameInner style={{ width: "50%", margin: "5px 10px" }}>
                                <label style={{ color: "black", fontSize: "1rem", margin: "2px" }}>Etkinlik ({event_type[willBeUpdate.event_type || 0]}) Başlangıç Tarihi: </label>
                                <CommonInputDate value={willBeUpdate.start_date ? formatDate(willBeUpdate.start_date) : undefined} name='start_date' onChange={handleChange} />
                                <ShowInfo title={`Etkinlik(${event_type[willBeUpdate.event_type || 0]}) bitiş tarihi.`} />
                            </DateInfoFrameInner>

                            <DateInfoFrameInner style={{ width: "50%" }}>
                                <label style={{ color: "black", fontSize: "1rem", margin: "2px" }}>Etkinlik ({event_type[willBeUpdate.event_type || 0]}) Bitiş Tarihi: </label>
                                <CommonInputDate value={willBeUpdate.end_date ? formatDate(willBeUpdate.end_date) : undefined} name='end_date' onChange={handleChange} />
                                <ShowInfo title={`Etkinlik(${event_type[willBeUpdate.event_type || 0]}) bitiş tarihi.`} />
                            </DateInfoFrameInner>
                        </DateInfoFrame>



                        <CommonInfoHead>Hakkında</CommonInfoHead>
                        <CommonInfoFrame style={{ height: "calc(100% - 380px - 20px - 1.6em)" }}>
                            <TextArea value={willBeUpdate.purpose || undefined} $UPDATE maxLength={1000} placeholder={`${event_type[willBeUpdate.event_type || 0]} Amacı`} onChange={handleChange} name="purpose" />
                            <ShowInfo title={`Etkinlik(${event_type[willBeUpdate.event_type || 0]}) hakkında kısmındaki amaç alanı.`} />
                        </CommonInfoFrame>

                        <CommonInfoFrame style={{ height: "calc(100% - 380px - 20px - 1.6em)" }}>
                            <TextArea value={willBeUpdate.text || undefined} $UPDATE maxLength={5000} placeholder={`${event_type[willBeUpdate.event_type || 0]} Metni`} onChange={handleChange} name="text" />
                            <ShowInfo title={`Etkinlik(${event_type[willBeUpdate.event_type || 0]}) hakkında kısmındaki metin alanı.`} />
                        </CommonInfoFrame>

                        <CommonInfoHead>Tarihler</CommonInfoHead>
                        <CommonInfoFrame>
                            <DatesArea>
                                <DateLine>Özet Gönderimi İçin Son Tarih: {startEndDateFormatter(willBeUpdate.sum_first_day_date, willBeUpdate.sum_last_day_date)}</DateLine>
                                <DateLine>Tam Metin Gönderme Tarihi: {startEndDateFormatter(willBeUpdate.text_first_day_date, willBeUpdate.text_last_day_date)}</DateLine>
                                <DateLine>{event_type[willBeUpdate.event_type || 0]} Tarihi: {startEndDateFormatter(willBeUpdate.start_date, willBeUpdate.end_date)}</DateLine>
                                {
                                    tempDates?.map((k, i) => (
                                        <div style={{ position: "relative" }} key={i}>
                                            <DateLine>{k}</DateLine>
                                            <RemovedButton onClick={() => removeDate(tempDates.indexOf(k))}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </RemovedButton>
                                        </div>
                                    ))
                                }
                            </DatesArea>
                        </CommonInfoFrame>

                        <CommonInfoFrame>
                            <DateInfoLabel $UPDATE>Özet Gönderim Tarih Aralığı</DateInfoLabel>
                            <CommonInputDate value={willBeUpdate.sum_first_day_date ? formatDate(willBeUpdate.sum_first_day_date) : undefined} name='sum_first_day_date' onChange={handleChange} />
                            <CommonInputDate value={willBeUpdate.sum_last_day_date ? formatDate(willBeUpdate.sum_last_day_date) : undefined} name='sum_last_day_date' onChange={handleChange} />
                            <ShowInfo title="Özet gönderim tarih aralığını sistemin tanıması için soldaki tarih girdisinden seçiniz." />
                        </CommonInfoFrame>

                        <CommonInfoFrame>
                            <DateInfoLabel $UPDATE>Tam Metin Gönderim Tarih Aralığı</DateInfoLabel>
                            <CommonInputDate value={willBeUpdate.text_first_day_date ? formatDate(willBeUpdate.text_first_day_date) : undefined} name='text_first_day_date' onChange={handleChange} type="date" />
                            <CommonInputDate value={willBeUpdate.text_last_day_date ? formatDate(willBeUpdate.text_last_day_date) : undefined} name='text_last_day_date' onChange={handleChange} type="date" />
                            <ShowInfo title="Tam metin gönderim tarih aralığını sistemin tanıması için soldaki tarih girdisinden seçiniz." />
                        </CommonInfoFrame>

                        <CommonInfoFrame>
                            <CommonInputText name='title' onChange={tempDateHandleChange} $UPDATE style={{ width: "calc(100% - 260px)" }} value={tempDate.title} placeholder='Belirli Tarih Başlığı - Örnek: Özet Gönderimi İçin Son Tarih' />
                            <CommonInputDate name='start_date' onChange={tempDateHandleChange} type="date" />
                            <CommonInputDate name='end_date' onChange={tempDateHandleChange} type="date" />
                            <AcceptDateButton onClick={confirmDate}>TARİH EKLE</AcceptDateButton>
                            <ShowInfo title="Örnekte gösterildiği gibi başlığını giriniz(':' olmadan). Başlangıç tarihi ve bitiş tarihi seçin ekleye tıklayın. Tarih eklenince yukarıda belirecektir." />
                        </CommonInfoFrame>

                        <CommonInfoHead>Kurullar</CommonInfoHead>
                        <SubHead>Onursal Başkan <ShowInfo title="Örnekte gösterildiği gibi tarihi başlığı ile birlikte el ile giriniz. Tarih eklenince yukarıda belirecektir." /></SubHead>
                        {
                            willBeUpdate.committee_chairman !== 0 ?
                                <div>
                                    {
                                        <KurulCard data={committeeData.resData.find(member => member.id === willBeUpdate.committee_chairman)}>
                                            <RemovedButton onClick={() => removeCommitteeMember(null, "committee_chairman")}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </RemovedButton>
                                        </KurulCard>
                                    }
                                </div>
                                :
                                <SelectCommitteeMember
                                    update
                                    name='committee_chairman'
                                    handleChange={handleChange}
                                    data={committeeData?.resData}
                                    title={committeeIsLoading ? "Kurul Üyeleri Listeleniyor..." : (committeeIsError ? `${committeeError.data?.code} - ${committeeError.data?.message}` : 'Onursal Başkan Seçiniz')}
                                    disabled={committeeIsLoading || committeeIsError}
                                />
                        }
                        <SubHead>Bilim Kurulu</SubHead>
                        <CommitteeContainer>
                            {
                                willBeUpdate.science_committee?.map((k, i) => (
                                    <KurulCard key={i} data={committeeData.resData.find(member => member.id === k)}>
                                        <RemovedButton onClick={() => removeCommitteeMember(willBeUpdate.science_committee.indexOf(k), "science_committee")}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </RemovedButton>
                                    </KurulCard>
                                ))
                            }
                            <SelectCommitteeMember
                                update
                                name='science_committee'
                                handleChange={handleChange}
                                data={committeeData?.resData}
                                controlUnit={willBeUpdate.science_committee}
                                title={committeeIsLoading ? "Kurul Üyeleri Listeleniyor..." : (committeeIsError ? `${committeeError.data?.code} - ${committeeError.data?.message}` : 'Bilim Kurulu Üyesi Seçin')}
                                disabled={committeeIsLoading || committeeIsError}
                            />
                        </CommitteeContainer>

                        <SubHead>Düzenleme Kurulu</SubHead>
                        <CommitteeContainer>
                            {
                                willBeUpdate.regulatory_authority?.map((k, i) => (
                                    <KurulCard key={i} data={committeeData.resData.find(member => member.id === k)}>
                                        <RemovedButton onClick={() => removeCommitteeMember(willBeUpdate.regulatory_authority.indexOf(k), "regulatory_authority")}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </RemovedButton>
                                    </KurulCard>
                                ))
                            }
                            <SelectCommitteeMember
                                update
                                name='regulatory_authority'
                                handleChange={handleChange}
                                data={committeeData?.resData}
                                controlUnit={willBeUpdate.regulatory_authority}
                                title={committeeIsLoading ? "Kurul Üyeleri Listeleniyor..." : (committeeIsError ? `${committeeError.data?.code} - ${committeeError.data?.message}` : 'Düzenleme Kurulu Üyesi Seçiniz')}
                                disabled={committeeIsLoading || committeeIsError}
                            />
                        </CommitteeContainer>


                        <CommonInfoHead>Yazım Kuralları</CommonInfoHead>
                        <CommonInfoFrame>
                            <UpdateChooser disabled={thesisManualIsLoading || thesisManualIsError} onChange={handleChange} name="thesis_manual_id">
                                {
                                    (thesisManualIsLoading || thesisManualIsError) &&
                                    <option hidden>{thesisManualIsLoading ? "Yazım Kuralları Listeleniyor..." : (thesisManualIsError ? `${thesisManualError.data?.code} - ${thesisManualError.data?.message}` : "")}</option>
                                }
                                {
                                    thesisManualData?.resData.map((k, i) => (
                                        <UpdateChooserOption key={i} value={k.id}>{k.indicator}</UpdateChooserOption>
                                    ))
                                }
                            </UpdateChooser>
                            <ShowInfo title="Kayıtlı yazım kurallarından seçiniz. Varsayılan şu an seçili olan yazım kuralıdır." />
                        </CommonInfoFrame>

                        <CommonInfoHead>Oturum Takvimi<ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Etkinliğin oturum takvimini (günlük yapılacaklar) görsel formatında ekleyiniz." /></CommonInfoHead>
                        <AddOneImage schedule title='Oturum Takvimi yüklemek zorunludur. Görsel olarak yükleyiniz' image={willBeUpdate.schedule !== -1 && willBeUpdate.schedule} handleChange={handleChange} removeFunc={removeSchedule} />


                        <CommonInfoHead>Galeri <ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Etkinlik hakkında görseller yükleyebilirsiniz, en fazla 12 adet." /></CommonInfoHead>
                        {/* .filter(item => item.hasOwnProperty('url')) */}
                        <AddMultiImage images={willBeUpdate.gallery} handleChange={handleChange} removeFunc={removeGalleryImage} />


                        <CommonInfoHead>İçerik <ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Etkinlik hakkında dosyalar yükleyebilirsiniz, en fazla 8 adet." /></CommonInfoHead>
                        <AddFiles handleChange={handleChange} files={willBeUpdate.contents} removeFunc={removeFileFromFiles} />

                        <CommonInfoFrame>
                            <CheckBoxLabel>
                                <CheckBox onChange={handleChange} name="onAir" checked={willBeUpdate.onAir} />
                                Yayına Alısın Mı?
                            </CheckBoxLabel>
                            <ShowInfo title="Etkinlik yüklendikten sonra gösterime çıksın mı?" />
                        </CommonInfoFrame>

                        {updateEvent.isSuccess && !err && <ShowSuccess>{updateEvent.data.resData.message}</ShowSuccess>}
                        {err && <ShowError>{err}</ShowError>}
                        {(progress !== 0 && !updateEvent.isSuccess && !err) && <CommonProgressFrame><CommonProgressInfo>{progress !== 1000 ? `${progress}/1000` : "Bekleyiniz..."}</CommonProgressInfo><CommonProgressAnimBar $PROGRESS={progress} /></CommonProgressFrame>}
                        <AcceptButton
                            $PENDING={updateEvent.isPending}
                            disabled={updateEvent.isPending || updateEvent.isSuccess}
                            onClick={sendEvent}>ONAYLA</AcceptButton>
                    </ScrollArea>
            }


        </>
    )
}

export default Update