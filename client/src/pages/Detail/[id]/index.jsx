import React, { useEffect, useState } from 'react'
import {
    ContentArea, ContentCouncil, ContentCouncilChairman,
    ContentFull, ContentHead, ContentHeadII, ContentPurpose,
    ContentText, DateContent, DetailHeader, DetailNav,
    FlexWrap, GridContent, ShowImageRemoveButton,
    HeaderDate, HeaderName, Image, ImageContainer,
    ImageTitle, MobilDetailNav, NavList, ShowImage,
    ShowImageContainer, ShowImageContainerInnerRelative, ContentPurposeForSkeleton, ContentTextForSkeleton, GridContentFile,
} from './style/index.styled'
import KurulCard from './components/KurulCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo, faImages, faPaperPlane, faPenNib, faUsers } from '@fortawesome/free-solid-svg-icons'
import MobileNavButton from './components/MobileNavButton'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useParams } from 'react-router-dom'
import SendPaper from './Tabs/SendPaper'
import { LoadedFile } from '../../Dashboard/components/styles/AddFiles.styled'
import Schedule from './Tabs/Schedule'
import _FileIcon from '@/components/_FileIcon';
import { startEndDateFormatter } from '@/utils/helperFunctions'
import { useQuery } from '@tanstack/react-query'
import { eventApi } from '@/api/event';
import { SkeletonBase } from '@/style/Skeleton.styled'

const allFalseInit = {
    about: false,
    dates: false,
    committee: false,
    thesis_manual: false,
    send_paper: false,
    schedule: false,
    gallery: false,
    contents: false,
}

const index = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [navTab, setNavTab] = useState({ ...allFalseInit, about: true });
    const size = useWindowSize();
    const { id } = useParams();
    const type = [
        { purpose_head: "Sempozyumun", text_head: "Sempozyum" },
        { purpose_head: "Panelin", text_head: "Panel" },
        { purpose_head: "Çalıştayın", text_head: "Çalıştay" },
    ]
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['e', id],
        queryFn: () => {
            return eventApi('get', id);
        }
    })

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const target = searchParams.get('target');
        target && setNavTab({ ...allFalseInit, [target]: true })
    }, [])

    const changeTab = (e, name) => {
        setNavTab({ ...allFalseInit, [e?.target.getAttribute('name') || name]: true })
    }
    return (
        <>
            {
                selectedImage &&
                <ShowImageContainer>
                    <ShowImageContainerInnerRelative>
                        <ShowImage src={selectedImage} />
                        <ShowImageRemoveButton onClick={() => setSelectedImage(null)}>X</ShowImageRemoveButton>

                    </ShowImageContainerInnerRelative>
                </ShowImageContainer>
            }
            <DetailHeader>
                {
                    (!isLoading && !isError) ?
                        <HeaderName>{data?.resData.title}</HeaderName>
                        :
                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px", padding: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1.917em"} $BR={"2px"} />
                }
                <HeaderDate>
                    {
                        (!isLoading && !isError) ?
                            startEndDateFormatter(data?.resData.start_date && new Date(data?.resData.start_date), data?.resData.end_date && new Date(data?.resData.end_date))
                            :
                            "? - ?"
                    }
                </HeaderDate>
            </DetailHeader>
            <FlexWrap>
                {
                    size.w > 500 &&
                    <DetailNav>
                        <NavList $Selected={navTab.about} onClick={changeTab} name='about'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faCircleInfo} />
                            Hakkında
                        </NavList>
                        <NavList $Selected={navTab.dates} onClick={changeTab} name='dates'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faCalendar} />
                            Tarihler
                        </NavList>
                        <NavList $Selected={navTab.committee} onClick={changeTab} name='committee'> {/**from 1.6em to 1.1em */}
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faUsers} />
                            Kurullar
                        </NavList>
                        <NavList $Selected={navTab.thesis_manual} onClick={changeTab} name='thesis_manual'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faPenNib} />
                            Yazım Kuralları
                        </NavList>
                        <NavList $Selected={navTab.send_paper} onClick={changeTab} name='send_paper'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faPaperPlane} />
                            Bildiri Gönder
                        </NavList>
                        <NavList $Selected={navTab.schedule} onClick={changeTab} name='schedule'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faClock} />
                            Oturum Takvimi
                        </NavList>
                        <NavList $Selected={navTab.gallery} onClick={changeTab} name='gallery'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faImages} />
                            Galeri
                        </NavList>
                        <NavList $Selected={navTab.contents} onClick={changeTab} name='contents'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faFolderOpen} />
                            İçerik
                        </NavList>
                    </DetailNav>
                }
                {
                    navTab.about &&
                    <ContentArea>
                        <ContentHead>{type[parseInt(data?.resData?.event_type) || 0].purpose_head} Amacı</ContentHead>
                        {
                            (isLoading || isError) ?
                                <ContentPurposeForSkeleton>
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                </ContentPurposeForSkeleton>
                                :
                                <ContentPurpose>
                                    {
                                        data?.resData.purpose?.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))
                                    }
                                </ContentPurpose>
                        }
                        <ContentHeadII>{type[parseInt(data?.resData?.event_type) || 0].text_head} Metni</ContentHeadII>
                        {
                            (isLoading || isError) ?
                                <ContentTextForSkeleton>
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                    <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "2px" }} $WIDTH={"calc(100% - 8px)"} $HEIGHT={"1em"} $BR={"2px"} />
                                </ContentTextForSkeleton>
                                :
                                <ContentText>
                                    {
                                        data?.resData.text?.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))
                                    }
                                </ContentText>
                        }
                    </ContentArea>
                }
                {
                    navTab.dates &&
                    <ContentArea>
                        <ContentHead style={{
                            borderRadius: "4px"

                        }}>Önemli Tarihler</ContentHead>

                        <div style={{ height: "calc(100% - 1.35em - 2px - 3px - 3px)", overflowY: "auto" }}>
                            {
                                (isLoading || isError) ?
                                    <>
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "3px", padding: "1ch 1ch 1ch 6ch" }} $WIDTH={"calc(100% - 7ch - 6px)"} $HEIGHT={"2em"} $BR={"4px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "3px", padding: "1ch 1ch 1ch 6ch" }} $WIDTH={"calc(100% - 7ch - 6px)"} $HEIGHT={"2em"} $BR={"4px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "3px", padding: "1ch 1ch 1ch 6ch" }} $WIDTH={"calc(100% - 7ch - 6px)"} $HEIGHT={"2em"} $BR={"4px"} />
                                    </>
                                    :
                                    data?.resData.dates?.map((k, i) => (
                                        <DateContent key={i}>{k}</DateContent>
                                    ))
                            }
                        </div>
                    </ContentArea>
                }
                {
                    navTab.committee &&
                    <ContentArea>
                        <ContentHead>Onursal Başkan</ContentHead>
                        <ContentCouncilChairman>
                            {

                                (isError || isLoading) ?
                                    <>
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                    </>
                                    :
                                    (data?.resData.committee_chairman !== 0) &&
                                    data?.resData.committee_chairman &&
                                    <KurulCard data={data?.resData.committee_chairman} />

                            }
                        </ContentCouncilChairman>
                        <ContentHead style={{
                            marginTop: "15px"
                        }}>Bilim Kurulu</ContentHead>
                        <ContentCouncil>
                            {
                                (isLoading || isError) ?
                                    <>
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />

                                    </>
                                    :
                                    data?.resData.science_committee?.map((k, i) => (
                                        <KurulCard key={i} data={k} />
                                    ))
                            }
                        </ContentCouncil>
                        <ContentHead style={{
                            marginTop: "15px"
                        }}>Düzenleme Kurulu</ContentHead>
                        <ContentCouncil>
                            {
                                (isLoading || isError) ?
                                    <>
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"60px"} $BR={"5px"} />
                                    </>
                                    :
                                    data?.resData.regulatory_authority?.map((k, i) => (
                                        <KurulCard key={i} data={k} />
                                    ))
                            }
                        </ContentCouncil>

                    </ContentArea>
                }
                {
                    navTab.thesis_manual &&
                    <ContentArea>
                        <ContentHead>Yazım Kuralları</ContentHead>
                        <ContentFull>
                            {
                                (isLoading || isError) ?
                                    (isError ? "Yazım Kuralları Yüklenemedi." : "Yükleniyor...")
                                    :
                                    data?.resData.thesis_manual?.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {/** <b> baslik yeni eklendi 21/09/24 */}
                                            {line.includes("<b>") ?
                                                (<React.Fragment>
                                                    <b>
                                                        {line.replace("<b>","")}
                                                    </b>
                                                </React.Fragment>) :
                                                (<React.Fragment>
                                                    {line}
                                                </React.Fragment>)
                                            }
                                            <br />
                                        </React.Fragment>
                                    ))
                            }
                        </ContentFull>
                    </ContentArea>
                }
                {
                    navTab.send_paper &&
                    <ContentArea>
                        <SendPaper isError={isError} pending={isError || isLoading} data={data} />
                    </ContentArea>
                }
                {
                    navTab.schedule &&
                    <ContentArea>
                        <Schedule isError={isError} ScheduleState={(!isError && !isLoading) && data?.resData.schedule} EventId={(!isError && !isLoading) && data?.resData.id} />
                    </ContentArea>
                }
                {
                    navTab.gallery &&
                    <ContentArea>
                        <ContentHead>Galeri</ContentHead>
                        <GridContent>
                            {
                                (isLoading || isError) ?
                                    <>
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"calc(250px + 1.2em)"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"calc(250px + 1.2em)"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"calc(250px + 1.2em)"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"calc(250px + 1.2em)"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"calc(250px + 1.2em)"} $BR={"5px"} />
                                    </>
                                    :
                                    (
                                        data?.resData.gallery?.length > 0 ?
                                            data?.resData.gallery?.map((k, i) => {
                                                const imageData = JSON.parse(k);
                                                const image = `${import.meta.env.VITE_API_URL}/Images/Events/${data?.resData.id}/${imageData.image_id}.jpg`
                                                return (
                                                    <ImageContainer onClick={() => setSelectedImage(image)} key={i}>
                                                        <Image src={image} />
                                                        <ImageTitle>{imageData.title}</ImageTitle>
                                                    </ImageContainer>
                                                )
                                            })
                                            :
                                            <center>Henüz bir görsel yüklenmedi</center>
                                    )
                            }
                        </GridContent>
                    </ContentArea>
                }
                {
                    navTab.contents &&
                    <ContentArea>
                        <ContentHead>İçerik</ContentHead>
                        <GridContentFile>
                            {
                                (isLoading || isError) ?
                                    <>
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px 10px", padding: "10px" }} $WIDTH={"200px"} $HEIGHT={"200px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px 10px", padding: "10px" }} $WIDTH={"200px"} $HEIGHT={"200px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px 10px", padding: "10px" }} $WIDTH={"200px"} $HEIGHT={"200px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px 10px", padding: "10px" }} $WIDTH={"200px"} $HEIGHT={"200px"} $BR={"5px"} />
                                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px 10px", padding: "10px" }} $WIDTH={"200px"} $HEIGHT={"200px"} $BR={"5px"} />
                                    </>
                                    :
                                    (
                                        data?.resData.contents?.length > 0
                                            ?
                                            data?.resData.contents?.map((k, i) => {
                                                const fileData = JSON.parse(k);
                                                return (
                                                    <LoadedFile onClick={() => { window.open(`${import.meta.env.VITE_API_URL}/Contents/Events/${data?.resData.id}/${fileData.file_name}`, "_blank") }} key={i}>
                                                        <_FileIcon fileName={fileData.file_name} />
                                                        <label>{fileData.title}</label>
                                                    </LoadedFile>
                                                )
                                            })
                                            :
                                            <center>
                                                Henüz bir içerik yüklenmemiş.
                                            </center>
                                    )
                            }
                        </GridContentFile>
                    </ContentArea>
                }

            </FlexWrap>

            {
                size.w <= 500 &&
                <MobilDetailNav>
                    <MobileNavButton name='about' changeTab={changeTab} selected={navTab.about} title={"Hakkında"} icon={faCircleInfo} />
                    <MobileNavButton name='dates' changeTab={changeTab} selected={navTab.dates} title={"Tarihler"} icon={faCalendar} />
                    <MobileNavButton name='committee' changeTab={changeTab} selected={navTab.committee} title={"Kurullar"} icon={faUsers} />
                    <MobileNavButton name='thesis_manual' changeTab={changeTab} selected={navTab.thesis_manual} title={"Yazım Kuralları"} icon={faPenNib} />
                    <MobileNavButton name='send_paper' changeTab={changeTab} selected={navTab.send_paper} title={"Bildiri Gönder"} icon={faPaperPlane} />
                    <MobileNavButton name='schedule' changeTab={changeTab} selected={navTab.schedule} title={"Oturum Takvimi"} icon={faClock} />
                    <MobileNavButton name='gallery' changeTab={changeTab} selected={navTab.gallery} title={"Galeri"} icon={faImages} />
                    <MobileNavButton name='contents' changeTab={changeTab} selected={navTab.contents} title={"İçerik"} icon={faFolderOpen} />
                </MobilDetailNav>
            }





        </>
    )
}

export default index