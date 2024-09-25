import { useEffect, useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { event_type as type } from '@/data/common';
import { CommitteeContainer } from '../../styles/AddEvent.styled';
import AddOneImage from '../../../components/AddOneImage';
import AddMultiImage from '../../../components/AddMultiImage';
import { CheckBox, CheckBoxLabel } from '../../styles/AddSlide.styled';
import KurulCard from '../../../../Detail/[id]/components/KurulCard';
import AddFiles from '../../../components/AddFiles';
import { AcceptButton, AddChooser, AddChooserOption, CommonInfoFrame, CommonInfoHead, CommonInputDate, CommonInputText, CommonProgressAnimBar, CommonProgressFrame, CommonProgressInfo, ScrollArea, ShowError, ShowInfo, ShowSuccess } from '../../styles/CommonStyle';
import { AcceptDateButton, DateInfoFrame, DateInfoFrameInner, DateInfoLabel, DateLine, DatesArea, SubHead, TextArea } from './styles/event.styled';
import { RemovedButton } from '../../../components/styles/AddOneImage.styled';
import SelectCommitteeMember from '../../../components/SelectCommitteeMember';
import { normalizeFileName, dateFormat_TR } from '@/utils/helperFunctions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { eventApi } from '@/api/event';
import { committeeApi } from '@/api/committee';
import { thesisManualApi } from '@/api/thesisManual';
import { startEndDateFormatter } from '@/utils/helperFunctions';

const handleError = (event) => {
    if (event.title.trim().replace(/ +/g, " ").length < 3)
        return "Başlık en 3 karakter olmalı.";
    if (event.subtitle.trim().replace(/ +/g, " ").length < 5)
        return "Alt başlık en 5 karakter olmalı.";
    return null;
}

const Add = ({ setHead, backFunc, setBackFunc }) => {
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
    const [event, setEvent] = useState({
        title: "",
        subtitle: "",
        // start_date: "",
        // end_date: "",
        // thesis_manual_id: '1', //default 1 geçildi
        //event type default 0 geçildi (sempozyum)
        // purpose: "",
        // text: "",
        dates: [],
        //schedule
        committee_chairman: 0,
        science_committee: [],
        regulatory_authority: [],
        onAir: true,
        images: [],
        files: []
    });
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

    useEffect(() => {
        setHead("ETKİNLİKLER - Ekle");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])


    function tempDateHandleChange(e) {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        if (e.target.name === 'start_date' || e.target.name === 'end_date')
            setTempDate({ ...tempDate, [e.target.name]: new Date(e.target.value) })
        else
            setTempDate({ ...tempDate, [e.target.name]: e.target.value });
    }

    function handleChange(e, key) {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        if (e.target.name === 'images') {
            for (let i = 0; i < e.target.files.length; i++) {
                if (event.images.length < 12) {
                    const lastDotIndex = e.target.files[i].name.lastIndexOf('.');
                    const fileNameWithoutExtension = e.target.files[i].name.slice(0, lastDotIndex);

                    const url = URL.createObjectURL(e.target.files[i])
                    event.images.push({ file: e.target.files[i], url, title: (lastDotIndex === -1 || lastDotIndex === 0) ? e.target.files[i].name : fileNameWithoutExtension })
                }
            }
            setEvent({ ...event });
        } else if (e.target.name === 'files') {
            for (let i = 0; i < e.target.files.length; i++) {
                if (event.files.length < 8) {
                    const lastDotIndex = e.target.files[i].name.lastIndexOf('.');
                    const fileNameWithoutExtension = e.target.files[i].name.slice(0, lastDotIndex);

                    const url = URL.createObjectURL(e.target.files[i])
                    event.files.push({ file: e.target.files[i], url, title: (lastDotIndex === -1 || lastDotIndex === 0) ? e.target.files[i].name : fileNameWithoutExtension })
                }
            }
            setEvent({ ...event });
        } else if (e.target.name === 'onAir') {
            setEvent({ ...event, [e.target.name]: !event.onAir })
        } else if (e.target.name === 'file_name') {
            event.files[key].title = e.target.value;
            setEvent({ ...event });
        } else if (e.target.name === 'image_name') {
            event.images[key].title = e.target.value;
            setEvent({ ...event });
        } else if (e.target.name === 'schedule') {
            const url = URL.createObjectURL(e.target.files[0]);
            setEvent({ ...event, [e.target.name]: { file: e.target.files[0], url } });
        } else if (
            e.target.name === 'start_date' ||
            e.target.name === 'end_date' ||
            e.target.name === 'sum_first_day_date' ||
            e.target.name === 'sum_last_day_date' ||
            e.target.name === 'text_first_day_date' ||
            e.target.name === 'text_last_day_date'
        ) {
            setEvent({ ...event, [e.target.name]: new Date(e.target.value) })
        } else if (e.target.name === 'committee_chairman') {
            setEvent({ ...event, [e.target.name]: parseInt(e.target.value) })
        } else if (e.target.name === 'science_committee') {
            event.science_committee.push(parseInt(e.target.value))
            setEvent({ ...event })
        } else if (e.target.name === 'regulatory_authority') {
            event.regulatory_authority.push(parseInt(e.target.value))
            setEvent({ ...event })
        } else {
            setEvent({ ...event, [e.target.name]: e.target.value })
        }

        setErr(null);
    }


    const confirmDate = () => {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        if (tempDate.start_date !== "" && tempDate.end_date !== "" && tempDate.title !== "") {
            tempDates.push(`${tempDate.title}: ${startEndDateFormatter(tempDate.start_date, tempDate.end_date)}`)
            setTempDates(tempDates);
            setTempDate({ ...tempDate, title: "" });
        }
    }

    const [progress, setProgress] = useState(0);
    const addEvent = useMutation({
        mutationFn: (data) => {
            return eventApi('post', '', data, {
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
        const error = handleError(event);
        if (error)
            return setErr(error);
        const dates = [];
        dates.push(`Özet Gönderimi İçin Son Tarih: ${startEndDateFormatter(event.sum_first_day_date, event.sum_last_day_date)}`);
        dates.push(`Tam Metin Gönderme Tarihi: ${startEndDateFormatter(event.text_first_day_date, event.text_last_day_date)}`);
        dates.push(`${type[event.event_type || 0]} Tarihi: ${startEndDateFormatter(event.start_date, event.end_date)}`);
        event.dates = dates;

        const { images, schedule, files, ...temp } = event;

        const file_titles = [];
        files.map((k, _) => {
            file_titles.push(k.title);
        })

        const image_titles = [];
        images.map((k, _) => {
            image_titles.push(k.title);
        })


        const formData = new FormData();
        formData.append("data", JSON.stringify({
            ...temp,
            dates: [...event.dates, ...tempDates],
            file_titles,
            image_titles
        }));

        //if is schedule => add schedule file
        event.schedule &&
            formData.append(
                "schedule",
                event.schedule.file,
                normalizeFileName(event.schedule.file.name)
            );
        //add images file
        for (let i = 0; i < event.images.length; i++) {
            formData.append(
                `images`,
                event.images[i].file,
                normalizeFileName(event.images[i].file.name)
            );
        }
        //add files(contents) file 
        for (let i = 0; i < event.files.length; i++) {
            formData.append(
                `files`,
                event.files[i].file,
                normalizeFileName(event.files[i].file.name)
            );
        }

        addEvent.mutate(formData);
    }

    function removeSchedule() {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        const { schedule, ...eventWithOutSchedule } = event;
        setEvent(eventWithOutSchedule);
    }
    function removeGalleryImage(url) {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        event.images.map((k, i) => {
            if (k.url === url) {
                event.images.splice(i, 1);
            }
        })
        setEvent({ ...event });
    }
    function removeFileFromFiles(url) {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        event.files.map((k, i) => {
            if (k.url === url) {
                event.files.splice(i, 1);
            }
        })
        setEvent({ ...event });
    }
    function removeDate(index) {
        if (addEvent.isPending || addEvent.isSuccess) return 0;
        setTempDates(tempDates.filter((_, i) => i !== index));
    }

    function removeCommitteeMember(index, groupName) {
        if (addEvent.isPending || addEvent.isSuccess) return 0;

        if (groupName === "committee_chairman") {
            setEvent({ ...event, committee_chairman: 0 })
        }
        if (groupName === "science_committee") {
            setEvent({ ...event, science_committee: event.science_committee.filter((_, i) => i !== index) })
        }
        if (groupName === "regulatory_authority") {
            setEvent({ ...event, regulatory_authority: event.regulatory_authority.filter((_, i) => i !== index) })
        }
    }

    return (
        <ScrollArea>
            <CommonInfoFrame>
                <AddChooser name="event_type" onChange={handleChange}>
                    <AddChooserOption hidden>Etkinlik Tipi: Sempozyum</AddChooserOption>
                    <AddChooserOption value={0}>Sempozyum</AddChooserOption>
                    <AddChooserOption value={1}>Panel</AddChooserOption>
                    <AddChooserOption value={2}>Çalıştay</AddChooserOption>
                </AddChooser>
                <ShowInfo title="Etkinliğin tipi şeçiniz. Varsayılan sempozyum." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <CommonInputText $ADD maxLength={100} onChange={handleChange} name='title' placeholder={`Etkinlik (${type[event.event_type || 0]}) Başlığı`} />
                <ShowInfo title="Etkinliğin başlık alanıdır. Minumum 3, maksimum 100 karakter girilebilir." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <CommonInputText $ADD maxLength={200} onChange={handleChange} name='subtitle' placeholder={`Etkinlik (${type[event.event_type || 0]}) Alt Başlığı`} />
                <ShowInfo title="Etkinliğin alt başlık alanıdır. Minumum 5, maksimum 200 karakter girilebilir. Sadece tabloda görünür." />
            </CommonInfoFrame>

            <DateInfoFrame>
                <DateInfoFrameInner>
                    <label style={{ color: "black", fontSize: "1rem", margin: "2px" }}>Etkinlik ({type[event.event_type || 0]}) Başlangıç Tarihi: </label>
                    <CommonInputDate name='start_date' onChange={handleChange} />
                    <ShowInfo title={`Etkinlik(${type[event.event_type || 0]}) bitiş tarihi.`} />
                </DateInfoFrameInner>

                <DateInfoFrameInner $SCD>
                    <label style={{ color: "black", fontSize: "1rem", margin: "2px" }}>Etkinlik ({type[event.event_type || 0]}) Bitiş Tarihi: </label>
                    <CommonInputDate name='end_date' onChange={handleChange} />
                    <ShowInfo title={`Etkinlik(${type[event.event_type || 0]}) bitiş tarihi.`} />
                </DateInfoFrameInner>
            </DateInfoFrame>



            <CommonInfoHead>Hakkında</CommonInfoHead>
            <CommonInfoFrame style={{ height: "calc(100% - 380px - 20px - 1.6em)" }}>
                <TextArea $ADD maxLength={1000} placeholder={`${type[event.event_type || 0]} Amacı`} onChange={handleChange} name="purpose" />
                <ShowInfo title={`Etkinlik(${type[event.event_type || 0]}) hakkında kısmındaki amaç alanı.`} />
            </CommonInfoFrame>

            <CommonInfoFrame style={{ height: "calc(100% - 380px - 20px - 1.6em)" }}>
                <TextArea $ADD maxLength={5000} placeholder={`${type[event.event_type || 0]} Metni`} onChange={handleChange} name="text" />
                <ShowInfo title={`Etkinlik(${type[event.event_type || 0]}) hakkında kısmındaki metin alanı.`} />
            </CommonInfoFrame>

            <CommonInfoHead>Tarihler</CommonInfoHead>
            <CommonInfoFrame>
                <DatesArea>
                    <DateLine>Özet Gönderimi İçin Son Tarih: {startEndDateFormatter(event.sum_first_day_date, event.sum_last_day_date)}</DateLine>
                    <DateLine>Tam Metin Gönderme Tarihi: {startEndDateFormatter(event.text_first_day_date, event.text_last_day_date)}</DateLine>
                    <DateLine>{type[event.event_type || 0]} Tarihi: {startEndDateFormatter(event.start_date, event.end_date)}</DateLine>
                    {
                        // event.dates.map((k, i) => (
                        tempDates.map((k, i) => (
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
                <DateInfoLabel $ADD>Özet Gönderim Tarih Aralığı</DateInfoLabel>
                <CommonInputDate name='sum_first_day_date' onChange={handleChange} />
                <CommonInputDate name='sum_last_day_date' onChange={handleChange} />
                <ShowInfo title="Özet gönderim tarih aralığını sistemin tanıması için soldaki tarih girdisinden seçiniz." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <DateInfoLabel $ADD>Tam Metin Gönderim Tarih Aralığı</DateInfoLabel>
                <CommonInputDate name='text_first_day_date' onChange={handleChange} type="date" />
                <CommonInputDate name='text_last_day_date' onChange={handleChange} type="date" />
                <ShowInfo title="Tam metin gönderim tarih aralığını sistemin tanıması için soldaki tarih girdisinden seçiniz." />
            </CommonInfoFrame>

            <CommonInfoFrame>
                <CommonInputText name='title' $ADD style={{ width: "calc(100% - 260px)" }} value={tempDate.title} placeholder='Belirli Tarih Başlığı - Örnek: Özet Gönderimi İçin Son Tarih' onChange={tempDateHandleChange} />
                <CommonInputDate name='start_date' onChange={tempDateHandleChange} type="date" />
                <CommonInputDate name='end_date' onChange={tempDateHandleChange} type="date" />
                <AcceptDateButton onClick={confirmDate}>TARİH EKLE</AcceptDateButton>
                <ShowInfo title="Örnekte gösterildiği gibi başlığını giriniz(':' olmadan). Başlangıç tarihi ve bitiş tarihi seçin ekleye tıklayın. Tarih eklenince yukarıda belirecektir." />
            </CommonInfoFrame>

            <CommonInfoHead>Kurullar <ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Kurul üyelerini seçerek etkinliğe ekleyiniz. Eklemek istediğniz kurul üyesi mevcut değilse komite üyeleri menüsünden ekleyeniz." /></CommonInfoHead>
            <SubHead>Onursal Başkan</SubHead>
            {
                event.committee_chairman !== 0 ?
                    <div>
                        {
                            <KurulCard data={committeeData.resData.find(member => member.id === event.committee_chairman)}>
                                <RemovedButton onClick={() => removeCommitteeMember(null, "committee_chairman")}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </RemovedButton>
                            </KurulCard>
                        }
                    </div>
                    :
                    <SelectCommitteeMember
                        add
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
                    event.science_committee?.map((k, i) => (
                        <KurulCard key={i} data={committeeData.resData.find(member => member.id === k)}>
                            <RemovedButton onClick={() => removeCommitteeMember(event.science_committee.indexOf(k), "science_committee")}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </RemovedButton>
                        </KurulCard>
                    ))
                }
                <SelectCommitteeMember
                    add
                    name='science_committee'
                    handleChange={handleChange}
                    data={committeeData?.resData}
                    controlUnit={event.science_committee}
                    title={committeeIsLoading ? "Kurul Üyeleri Listeleniyor..." : (committeeIsError ? `${committeeError.data?.code} - ${committeeError.data?.message}` : 'Bilim Kurulu Üyesi Seçin')}
                    disabled={committeeIsLoading || committeeIsError}
                />
            </CommitteeContainer>

            <SubHead>Düzenleme Kurulu</SubHead>
            <CommitteeContainer>
                {
                    event.regulatory_authority?.map((k, i) => (
                        <KurulCard key={i} data={committeeData.resData.find(member => member.id === k)}>
                            <RemovedButton onClick={() => removeCommitteeMember(event.regulatory_authority.indexOf(k), "regulatory_authority")}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </RemovedButton>
                        </KurulCard>
                    ))
                }
                <SelectCommitteeMember
                    add
                    name='regulatory_authority'
                    handleChange={handleChange}
                    data={committeeData?.resData}
                    controlUnit={event.regulatory_authority}
                    title={committeeIsLoading ? "Kurul Üyeleri Listeleniyor..." : (committeeIsError ? `${committeeError.data?.code} - ${committeeError.data?.message}` : 'Düzenleme Kurulu Üyesi Seçiniz')}
                    disabled={committeeIsLoading || committeeIsError}
                />
            </CommitteeContainer>


            <CommonInfoHead>Yazım Kuralları</CommonInfoHead>
            <CommonInfoFrame>
                <AddChooser disabled={thesisManualIsLoading || thesisManualIsError} onChange={handleChange} name="thesis_manual_id">
                    {
                        (thesisManualIsLoading || thesisManualIsError) &&
                        <option hidden>{thesisManualIsLoading ? "Yazım Kuralları Listeleniyor..." : (thesisManualIsError ? `${thesisManualError.data?.code} - ${thesisManualError.data?.message}` : "")}</option>
                    }
                    {
                        thesisManualData?.resData.map((k, i) => (
                            <AddChooserOption key={i} value={k.id}>{k.indicator}</AddChooserOption>
                        ))
                    }
                </AddChooser>
                <ShowInfo title="Kayıtlı yazım kurallarından seçiniz. Varsayılan şu an seçili olan yazım kuralıdır." />
            </CommonInfoFrame>

            <CommonInfoHead>Oturum Takvimi<ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Etkinliğin oturum takvimini (günlük yapılacaklar) görsel formatında ekleyiniz." /></CommonInfoHead>
            <AddOneImage schedule title='Oturum Takvimi yüklemek zorunludur. Görsel olarak yükleyiniz' image={event.schedule} handleChange={handleChange} removeFunc={removeSchedule} />


            <CommonInfoHead>Galeri <ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Etkinlik hakkında görseller yükleyebilirsiniz, en fazla 12 adet." /></CommonInfoHead>
            <AddMultiImage images={event.images} handleChange={handleChange} removeFunc={removeGalleryImage} />


            <CommonInfoHead>İçerik <ShowInfo style={{ fontSize: "1em", marginLeft: "2px" }} title="Etkinlik hakkında dosyalar yükleyebilirsiniz, en fazla 8 adet." /></CommonInfoHead>
            <AddFiles handleChange={handleChange} files={event.files} removeFunc={removeFileFromFiles} />

            <CommonInfoFrame style={{ justifyContent: "center" }}>
                <CheckBoxLabel>
                    <CheckBox onChange={handleChange} name="onAir" checked={event.onAir} />
                    Yayına Alısın Mı?
                </CheckBoxLabel>
                <ShowInfo title="Etkinlik yüklendikten sonra gösterime çıksın mı?" />
            </CommonInfoFrame>

            {addEvent.isSuccess && !err && <ShowSuccess>{addEvent.data.resData.message}</ShowSuccess>}
            {err && <ShowError>{err}</ShowError>}
            {(progress !== 0 && !addEvent.isSuccess && !err) && <CommonProgressFrame><CommonProgressInfo>{progress !== 1000 ? `${progress}/1000` : "Bekleyiniz..."}</CommonProgressInfo><CommonProgressAnimBar $PROGRESS={progress} /></CommonProgressFrame>}

            <AcceptButton
                $PENDING={addEvent.isPending}
                disabled={addEvent.isPending || addEvent.isSuccess}
                onClick={sendEvent}>ONAYLA</AcceptButton>
        </ScrollArea>
    )
}

export default Add