import React, { useEffect, useState } from 'react'
import { faSquareMinus, faSquarePen, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import InnerNavButton from '../../components/InnerNavButton';
import Add from './SubTabs/Add';
import UpdateDelete from './SubTabs/UpdateDelete';
import { InnerNavButtonContainer } from '../../components/styles/InnerNavButton.styled';

const allFalseInit = {
    nav: false,
    add: false,
    update_delete: false
}

const index = ({ setHead, setBackFunc, allEvents_IdAndTitle }) => {
    const [navTab, setNavTab] = useState({ ...allFalseInit, nav: true });
    useEffect(() => {
        setHead("SLAYTLAR");
    }, [])

    const backFunc = () => {
        setNavTab({ ...allFalseInit, nav: true })
    }

    return (
        <>
            {
                navTab.nav &&
                <InnerNavButtonContainer>
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, add: true })} icon={faSquarePlus} color={"#22ff00"} text={"EKLE"} />
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, update_delete: true })} icon={faSquarePen} color={"#2c37cb"} text={"GÜNCELLE"} />
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, update_delete: true })} icon={faSquareMinus} color={"#CB2C31"} text={"SİL"} />
                </InnerNavButtonContainer>
            }

            {
                navTab.add &&
                <Add allEvents_IdAndTitle={allEvents_IdAndTitle} backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

            {
                navTab.update_delete &&
                <UpdateDelete allEvents_IdAndTitle={allEvents_IdAndTitle} backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

        </>
    )
}

export default index