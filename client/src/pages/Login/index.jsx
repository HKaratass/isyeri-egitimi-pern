import { useState } from 'react'
import LogoHD from "@/assets/LogoHd.svg";
import TextBox from './components/TextBox';
import {
    Container, ForgotPass,
    Form, Logo, NoMatch, SubmitBut,
} from './style/index.styled';
import Captcha from '@/components/_Captcha'
import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/api/auth';

const Login = () => {
    const [err, setErr] = useState(null);
    const [changeCaptcha, setChangeCaptcha] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [authData, setAuthData] = useState(
        {
            access_id: "",
            password: "",
            CAPTCHA: "",
        }
    )

    const handleChange = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
        setErr(null);
    };

    const login = useMutation({
        mutationFn: (data) => {
            return authApi('post', 'login', data, {
                withCredentials: true,
            });
        },
        onError: (err) => {
            setAuthData(prev => ({ ...prev, CAPTCHA: "" }));
            setChangeCaptcha(prev => !prev);
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: () => {
            window.location = '/admin/dashboard';
        }
    })

    function authFunc() {
        if (authData.access_id.length < 1 || authData.password.length < 1)
            return setErr('Alanları boş bırakmayınız.')
        if (authData.CAPTCHA.length !== 6)
            return setErr('Doğrulama kodu 6 haneli olmalıdır.')
        login.mutate({
            ...authData,
            os: navigator.platform,
            agent: navigator.userAgent,
            captchaToken
        })
    }

    function bindEnter(e) {
        if (login.isPending || login.isSuccess) return 0;
        if (e.key === 'Enter')
            authFunc();
    }


    return (
        <main style={{ height: "100dvh" }}>
            <Container>
                <Logo src={LogoHD} alt='Logo' />
                <Form>
                    <TextBox onChange={handleChange} name="access_id" placeholder="Kullanıcı Adı, E-Posta ya da Telefon Numarası" type="text" />
                    <TextBox onChange={handleChange} name="password" placeholder="Şifre" type="password" onKeyDown={bindEnter} />
                    <ForgotPass onClick={(e) => { e.preventDefault(); }}><a>Şifrenizi mi unuttunuz?</a></ForgotPass>
                </Form>
                {err && <NoMatch>{err}</NoMatch>}
                <Captcha
                    bindEnter={bindEnter}
                    setOutErr={setErr}
                    setCaptchaToken={setCaptchaToken}
                    inputValue={authData.CAPTCHA}
                    setValue={setAuthData}
                    onError={changeCaptcha}
                />
                <SubmitBut
                    disabled={login.isPending || login.isSuccess}
                    $v="Giriş Yap"
                    onClick={authFunc} />
            </Container>
        </main>
    )
}

export default Login