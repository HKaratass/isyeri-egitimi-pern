import { faLock, faPalette } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import InnerNavButton from '../../components/InnerNavButton';
import Theme from './SubTabs/Theme';
import ChangePassword from './SubTabs/ChangePassword';
import { InnerNavButtonContainer } from '../../components/styles/InnerNavButton.styled';

const allFalseInit = {
    nav: false,
    theme: false,
    changePassword: false,
}

const index = ({ setHead, setBackFunc }) => {
    const [navTab, setNavTab] = useState({ ...allFalseInit, nav: true });
    useEffect(() => {
        setHead("AYARLAR");
    }, [])

    const backFunc = () => {
        setNavTab({ ...allFalseInit, nav: true })
    }


    return (
        <>
            {
                navTab.nav &&
                <InnerNavButtonContainer>
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, theme: true })} icon={faPalette} color={"#22ff00"} text={"TEMA"} />
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, changePassword: true })} icon={faLock} color={"#2c37cb"} text={"PAROLA DEĞİŞTİR"} />
                </InnerNavButtonContainer>
            }

            {
                navTab.theme &&
                <Theme backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

            {
                navTab.changePassword &&
                <ChangePassword backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

        </>
    )
}

export default index