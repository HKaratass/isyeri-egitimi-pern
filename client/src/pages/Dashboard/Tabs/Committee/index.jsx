import React, { useEffect, useState } from 'react'
import { ContentArea } from '../../../Detail/[id]/style/index.styled';
import { faSquareMinus, faSquarePen, faSquarePlus, faUserMinus, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import InnerNavButton from '../../components/InnerNavButton';
import Add from './SubTabs/Add';
import Update from './SubTabs/Update';
import Delete from './SubTabs/Delete';
import { InnerNavButtonContainer } from '../../components/styles/InnerNavButton.styled';

const allFalseInit = {
    nav: false,
    add: false,
    update: false,
    delete: false
}

const index = ({ setHead, setBackFunc }) => {
    const [navTab, setNavTab] = useState({ ...allFalseInit, nav: true });
    useEffect(() => {
        setHead("KOMİTE ÜYELERİ");
    }, [])

    const backFunc = () => {
        setNavTab({ ...allFalseInit, nav: true })
    }

    return (
        <>
            {
                navTab.nav &&
                <InnerNavButtonContainer>
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, add: true })} icon={faUserPlus} color={"#22ff00"} text={"EKLE"} />
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, update: true })} icon={faUserPen} color={"#2c37cb"} text={"GÜNCELLE"} />
                    <InnerNavButton onClick={() => setNavTab({ ...allFalseInit, delete: true })} icon={faUserMinus} color={"#CB2C31"} text={"SİL"} />
                </InnerNavButtonContainer>
            }

            {
                navTab.add &&
                <Add backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

            {
                navTab.update &&
                <Update backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

            {
                navTab.delete &&
                <Delete backFunc={backFunc} setBackFunc={setBackFunc} setHead={setHead} />
            }

        </>
    )
}

export default index