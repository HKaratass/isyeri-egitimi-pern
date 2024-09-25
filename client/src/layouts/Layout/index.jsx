import { Outlet } from 'react-router-dom'
import { Main } from '../Main/style/Main.styled'
import { Suspense, useEffect, useRef, useState } from 'react'
import LoadingScreen from '../LoadingScreen';
import Navbar from '../Navbar';
import { useWindowSize } from '../../hooks/useWindowSize';
// import { Footer } from '../../pages/Home/style/index.styled';


const index = () => {
    const a = useRef(""); //scroll için kullanılabilir
    return (
        <>
            <Navbar />
            <Main ref={a}>
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
            </Main>

        </>

    )
}

export default index