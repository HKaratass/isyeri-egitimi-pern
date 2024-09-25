import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout';
import { lazy, useEffect, useState } from 'react';
import AnnouncementAbsoluteFrame from './components/AnnouncementAbsoluteFrame';
import useToken from '@/hooks/useToken'
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

//development
// const WAIT_TIME = 700;//1000;
// function wait(ms) {
// return new Promise(resolve => {
// setTimeout(resolve, ms)
// })
// }
// const Home = lazy(() => wait(WAIT_TIME).then(() => import('./pages/Home')));
// const About = lazy(() => wait(WAIT_TIME).then(() => import('./pages/About')));
// const Contact = lazy(() => wait(WAIT_TIME).then(() => import('./pages/Contact')));
// const Detail = lazy(() => wait(WAIT_TIME).then(() => import('./pages/Detail/[id]')));
// const AllEvents = lazy(() => wait(WAIT_TIME).then(() => import('./pages/Events')));
// const NotFound = lazy(() => wait(WAIT_TIME).then(() => import('./pages/NotFound')));
// const Login = lazy(() => wait(WAIT_TIME).then(() => import('./pages/Login')));
// const Dasboard = lazy(() => wait(WAIT_TIME).then(() => import('./pages/Dashboard')));

//deployment
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Detail = lazy(() => import('./pages/Detail/[id]'));
const AllEvents = lazy(() => import('./pages/Events'));
const Dasboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const [token] = useToken();

  useEffect(() => {
    console.log(
      "%cPERN STACK PROJE%cversion: " + 1.1,
      "color: blue; background-color: black; padding: 3px;",
      "color: green; background-color: black; padding: 3px;"
    );
    console.log(
      "%cAUTHOR: %cHasan KARATAŞ",
      "color: yellow; background-color: black; padding: 3px;",
      "color: red; background-color: black; padding: 3px;"
    );

  }, [])

  axios.defaults.withCredentials = true;

  // const queryClient = useQueryClient();
  // // const csrfToken = queryClient.getQueryData(['XEV']);
  // const csrfToken = localStorage.getItem('XEV');
  // useEffect(() => {
  //   console.log("NEW TOKEN: ", localStorage.getItem('XEV'));
  //   // axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
  //   axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
  //   return () => {
  //     delete axios.defaults.headers.common["X-CSRF-TOKEN"];
  //   };
  // }, [csrfToken]);

  const [readAnnouncement, setReadAnnouncement] = useState(null);

  return (
    <>
      {
        readAnnouncement &&
        <AnnouncementAbsoluteFrame setReadAnnouncement={setReadAnnouncement} readAnnouncement={readAnnouncement} />
      }
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home readAnnouncement={setReadAnnouncement} />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<AllEvents />} />
          <Route path='/admin/dashboard' element={token ? <Dasboard /> : <Navigate to={'/admin/dashboard/login'} replace={true} />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
        <Route path='/admin/dashboard/login' element={!token ? <Login /> : <Navigate to={'/admin/dashboard'} replace={true} />} />
      </Routes>
    </>
  )
}

export default App
