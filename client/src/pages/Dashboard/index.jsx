import axios from 'axios';
import { useEffect, useState } from 'react'
import { ContentArea, DetailHeader, DetailNav, FlexWrap, HeaderName, MobilDetailNav, NavList } from '../Detail/[id]/style/index.styled';
import Announcement from './Tabs/Announcement';
import Committee from './Tabs/Committee';
import Event from './Tabs/Event';
import Slide from './Tabs/Slide';
import Settings from './Tabs/Settings';
import Users from './Tabs/Users';
import ThesisManual from './Tabs/ThesisManual';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faDisplay, faGear, faPenNib, faRightFromBracket, faSquareCaretLeft, faUserShield, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { BackButton } from './style/index.styled';
import { useWindowSize } from '../../hooks/useWindowSize';
import MobileNavButton from '../Detail/[id]/components/MobileNavButton';
import { useMutation, useQuery } from '@tanstack/react-query';
import { eventApi } from '@/api/event';
import { authApi } from '@/api/auth';

const allFalseInit = {
    add_event: false,
    add_announcement: false,
    add_slide: false,
    add_thesis_manual: false,
    add_committee_member: false,
    define_admin: false,
    settings: false,
    exit: false,
}

const index = () => {
    const [head, setHead] = useState("");
    const [navTab, setNavTab] = useState({ ...allFalseInit, add_thesis_manual: true });
    const size = useWindowSize();
    const logoutMut = useMutation({
        mutationFn: () => {
            return authApi('get', 'logout', null, {
                withCredentials: true,
            });
        },
        onError: () => {
            window.location = '/admin/dashboard';
        },
        onSuccess: () => {
            window.location.href = "/";
        }
    })

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['e_info'],
        queryFn: () => {
            return eventApi('get', 'info');
        }
    })

    const [backFunc, setBackFunc] = useState(null)

    const changeTab = (e, name) => {
        if (logoutMut.isPending || logoutMut.isError || logoutMut.isSuccess) return 0;
        setNavTab({ ...allFalseInit, [e?.target.getAttribute('name') || name]: true })
        backFunc && backFunc();
        setBackFunc(null);
    }


    const logout = (e) => {
        changeTab(e);
        logoutMut.mutate();
    }


    return (
        <>
            <DetailHeader>
                <HeaderName>
                    {head}
                </HeaderName>
                {
                    backFunc &&
                    <BackButton onClick={backFunc}>
                        <FontAwesomeIcon icon={faSquareCaretLeft} />
                    </BackButton>
                }
            </DetailHeader>
            <FlexWrap>
                {
                    size.w > 500 &&
                    <DetailNav>
                        <NavList $Selected={navTab.add_thesis_manual} onClick={changeTab} name='add_thesis_manual'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faPenNib} />
                            Yazım Kuralları
                        </NavList>
                        <NavList $Selected={navTab.add_committee_member} onClick={changeTab} name='add_committee_member'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faUsers} />
                            Komite Üyeleri
                        </NavList>
                        <NavList $Selected={navTab.add_event} onClick={changeTab} name='add_event'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faCalendarCheck} />
                            Etkinlikler
                        </NavList>
                        <NavList $Selected={navTab.add_slide} onClick={changeTab} name='add_slide'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faDisplay} />
                            Slaytlar
                        </NavList>
                        <NavList $Selected={navTab.add_announcement} onClick={changeTab} name='add_announcement'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faBullhorn} />
                            Duyurular
                        </NavList>
                        <NavList $Selected={navTab.define_admin} onClick={changeTab} name='define_admin'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faUserShield} />
                            Kullanıcıları Yönet
                        </NavList>
                        <NavList $Selected={navTab.settings} onClick={changeTab} name='settings'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faGear} spin={navTab.settings} />
                            Ayarlar
                        </NavList>
                        <NavList $Selected={navTab.exit} onClick={logout} name='exit'>
                            <FontAwesomeIcon style={{ position: "absolute", left: "10px", fontSize: "1.1em" }} icon={faRightFromBracket} flip='horizontal' />
                            Çıkış Yap
                        </NavList>
                    </DetailNav>
                }
                <ContentArea style={{ display: !backFunc && "flex" }}>
                    {
                        navTab.add_thesis_manual &&
                        <ThesisManual setBackFunc={setBackFunc} setHead={setHead} />
                    }
                    {
                        navTab.add_committee_member &&
                        <Committee setBackFunc={setBackFunc} setHead={setHead} />
                    }
                    {
                        navTab.add_event &&
                        <Event setBackFunc={setBackFunc} setHead={setHead} />
                    }
                    {
                        navTab.add_slide &&
                        <Slide setBackFunc={setBackFunc} setHead={setHead} allEvents_IdAndTitle={data?.resData || []} />
                    }
                    {
                        navTab.add_announcement &&
                        <Announcement setBackFunc={setBackFunc} allEvents_IdAndTitle={data?.resData || []} setHead={setHead} />
                    }
                    {
                        navTab.settings &&
                        <Settings setBackFunc={setBackFunc} setHead={setHead} />
                    }
                    {
                        navTab.define_admin &&
                        <Users setBackFunc={setBackFunc} setHead={setHead} />
                    }
                    {
                        navTab.exit &&
                        <div>Çıkış Yapılıyor...<div>- Bekleyiniz -</div></div>
                    }
                </ContentArea>
            </FlexWrap>
            {
                size.w <= 500 &&
                <MobilDetailNav>
                    <MobileNavButton name='add_thesis_manual' changeTab={changeTab} selected={navTab.add_thesis_manual} title={"Yazım Kuralları"} icon={faPenNib} />
                    <MobileNavButton name='add_committee_member' changeTab={changeTab} selected={navTab.add_committee_member} title={"Komite Üyeleri"} icon={faUsers} />
                    <MobileNavButton name='add_event' changeTab={changeTab} selected={navTab.add_event} title={"Etkinlikler"} icon={faCalendarCheck} />
                    <MobileNavButton name='add_slide' changeTab={changeTab} selected={navTab.add_slide} title={"Slaytlar"} icon={faDisplay} />
                    <MobileNavButton name='add_announcement' changeTab={changeTab} selected={navTab.add_announcement} title={"Duyurular"} icon={faBullhorn} />
                    <MobileNavButton name='define_admin' changeTab={changeTab} selected={navTab.define_admin} title={"Kullanıcıları Yönet"} icon={faUserShield} />
                    <MobileNavButton name='settings' changeTab={changeTab} selected={navTab.settings} title={"Ayarlar"} icon={faGear} />
                    <MobileNavButton name='exit' changeTab={logout} selected={navTab.exit} title={"Çıkış Yap"} icon={faRightFromBracket} />
                </MobilDetailNav>
            }
        </>
    )
}

export default index