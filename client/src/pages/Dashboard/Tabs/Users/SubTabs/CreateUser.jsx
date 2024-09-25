import { useEffect, useState } from 'react'
import { AcceptButton, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { Form } from '../../../../Login/style/index.styled';
import TextBox from '../../../../Login/components/TextBox';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/api/user';

const index = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [scs, setScs] = useState(null);
    const registerData_INIT = {
        user_name: "",
        password: "",
        password_again: "",
        email: "",
        email_again: "",
        phone_number: "",
        first_name: "",
        last_name: "",
    }
    const [registerData, setRegisterData] = useState(registerData_INIT)

    useEffect(() => {
        setHead("KULLANICILARI YÖNET - Yeni Kullanıcı");
        setBackFunc(() => {
            return () => {
                setHead("KULLANICILARI YÖNET");
                backFunc();
                setBackFunc(null);
            }
        })
    }, [])

    const newUser = useMutation({
        mutationFn: (data) => {
            return userApi('post', 'add', data, {
                withCredentials: true,
            })
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: (data) => {
            setScs(data.message);
            setRegisterData(registerData_INIT);
        }
    })

    const isPhoneNumberRegex = (phone_number) => {
        return String(phone_number)
            .match(
                /^(\+?\d{0,12})$/
            );
    }
    function handleChange(e) {
        if (e.target.name === "phone_number") {
            if (isPhoneNumberRegex(e.target.value))
                setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        }
        else
            setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErr(null);
        setScs(null);
    }

    const passwordControl = (pwd) => {
        const full = String(pwd)
            .match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\"\-_\/+=@$'!%,.:<£#>;\s*?|&^~\[\]{}\(\)])[A-Za-z\dğĞüÜşŞiİöÖçÇ@0$-_\/+=.:;<#£>,"!'%\s*?|(){\[\]}&^~]{10,250}$/
            );
        if (full)
            return { OK: true }
        const numeric = String(pwd)
            .match(
                /\d+/
            );
        const cap = String(pwd)
            .match(
                /[A-Z]+/
            );
        const alph = String(pwd)
            .match(
                /[a-z]+/
            );
        const spec = String(pwd)
            .match(
                /[\"\-_\/+=@$'!%,.:<£#>;\s*?|(){}&^~]+/
            );
        const requirements = [pwd.length >= 10, cap, alph, numeric, spec]
        return { OK: false, requirements };
    }

    function sendData() {
        if (
            registerData.user_name.trim().length < 1 ||
            registerData.password.length < 1 ||
            registerData.password_again.length < 1 ||
            registerData.email.length < 1 ||
            registerData.email_again.length < 1 ||
            registerData.phone_number.length < 1 ||
            registerData.first_name.trim().length < 1 ||
            registerData.last_name.trim().length < 1
        )
            return setErr("Alanları boş bırakmayınız.")
        if (registerData.email !== registerData.email_again)
            return setErr("E-Posta adresleri uyuşmuyor.")
        const passwordControlState = passwordControl(registerData.password);
        if (!passwordControlState.OK) {
            const passwordErr =
                (passwordControlState.requirements[0] &&
                    passwordControlState.requirements[1] &&
                    passwordControlState.requirements[2] &&
                    passwordControlState.requirements[3] &&
                    passwordControlState.requirements[4]
                )
                    ?
                    (
                        <div style={{ color: "red" }}>
                            Yeni şifrenizde desteklenmeyen karakter kullandınız.
                        </div>
                    )
                    :
                    (
                        <>
                            <div style={{ color: passwordControlState.requirements[0] ? "green" : "red" }}>Şifre en az 10 karater olmalı</div>
                            <div style={{ color: "#f2f2f2" }}>
                                <span style={{ color: passwordControlState.requirements[1] ? "green" : "red" }}>En az bir büyük harf</span>
                                , <span style={{ color: passwordControlState.requirements[2] ? "green" : "red" }}>bir küçük harf</span>
                                , <span style={{ color: passwordControlState.requirements[3] ? "green" : "red" }}>bir rakam
                                </span> ve <div style={{ color: passwordControlState.requirements[4] ? "green" : "red" }}>bir özel karakter {`[?@$£#&%! */+="-_':;.,({[<|>]})^~]`}
                                </div> içermelidir.
                            </div>
                        </>
                    )

            return setErr(
                passwordErr
            )
        }
        if (registerData.password !== registerData.password_again)
            return setErr("Şifreler uyuşmuyor.")
        const { password_again, email_again, ...willBePostedData } = registerData;
        newUser.mutate(willBePostedData);
    }

    return (
        <>
            <div style={{
                backgroundColor: "#f2f2f2dd",
                margin: "2px",
                width: "calc(100% - 4px)",
                height: "calc(100% - 3px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px"
            }}>

                <Form>
                    <TextBox maxLength={15} value={registerData.user_name} onChange={handleChange} name="user_name" placeholder="Kullanıcı Adı" type="text" />
                    <TextBox maxLength={250} value={registerData.password} onChange={handleChange} name="password" placeholder="Şifre" type="password" />
                    <TextBox maxLength={250} value={registerData.password_again} onChange={handleChange} name="password_again" placeholder="Şifre Tekrar" type="password" />
                    <TextBox maxLength={250} value={registerData.email} onChange={handleChange} name="email" placeholder="E-Posta" type="text" />
                    <TextBox maxLength={250} value={registerData.email_again} onChange={handleChange} name="email_again" placeholder="E-Posta Tekrar" type="text" />
                    <TextBox maxLength={18} value={registerData.phone_number} onChange={handleChange} name="phone_number" placeholder="Telefon Numarası" type="tel" />
                    <TextBox maxLength={50} value={registerData.first_name} onChange={handleChange} name="first_name" placeholder="Ad" type="text" />
                    <TextBox maxLength={50} value={registerData.last_name} onChange={handleChange} name="last_name" placeholder="Soyad" type="text" />
                </Form>
                <div style={{ width: "60%" }}>
                    {err && <ShowError>{err}</ShowError>}
                    {scs && !err && <ShowSuccess>{scs}</ShowSuccess>}
                    <AcceptButton
                        $PENDING={newUser.isPending}
                        disabled={newUser.isPending}
                        onClick={sendData}>ONAYLA</AcceptButton>
                </div>
            </div>
        </>
    )
}

export default index