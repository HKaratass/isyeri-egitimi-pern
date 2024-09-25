import { faAddressCard, faLock, faPalette, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import InnerNavButton from '../../components/InnerNavButton';
import CreateUser from './SubTabs/CreateUser';
import ManageUsers from './SubTabs/ManageUsers';

const allFalseInit = {
    nav: false,
    create_user: false,
    manage_users: false,
}

const index = ({ setHead, setBackFunc }) => {
    const [navTab, setNavTab] = useState({ ...allFalseInit, nav: true });
    useEffect(() => {
        setHead("KULLANICILARI YÖNET");
    }, [])

    const backFunc = () => {
        setNavTab({ ...allFalseInit, nav: true })
    }


    return (
        <>
            {
                navTab.nav &&
                <>
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, create_user: true })} icon={faUserTie} color={"#22ff00"} text={"YENİ KULLANICI"} />
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, manage_users: true })} icon={faAddressCard} color={"#2c37cb"} text={"KULLANICILARI YÖNET"} />
                </>
            }

            {
                navTab.create_user &&
                <CreateUser backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

{
                navTab.manage_users &&
                <ManageUsers backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

        </>
    )
}

export default index