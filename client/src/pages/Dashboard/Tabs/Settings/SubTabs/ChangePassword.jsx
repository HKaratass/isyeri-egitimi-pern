import React, { useEffect, useState } from 'react'
import { AcceptButton, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { Form } from '../../../../Login/style/index.styled';
import TextBox from '../../../../Login/components/TextBox';
import { useMutation } from '@tanstack/react-query';
import { userApi } from '@/api/user';

const index = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const [scs, setScs] = useState(null);
    const back = () => {
        setHead("AYARLAR");
        backFunc();
        setBackFunc(null);
    }
    const [post, setPost] = useState({
        old_password: "",
        new_password: "",
        new_password_again: "",
    })
    useEffect(() => {
        setHead("AYARLAR - Şifre Değiştir");
        setBackFunc(() => {
            return () => {
                back()
            }
        })
    }, [])

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
        setErr(null);
        setScs(null);
    }

    const changePassMut = useMutation({
        mutationFn: (data) => {
            return userApi('patch', 'change-pwd', data, {
                withCredentials: true,
            });
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
        },
        onSuccess: (data) => {
            setScs(data.message);
            setPost({
                old_password: "",
                new_password: "",
                new_password_again: "",
            });
        }
    })

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
    function changePassword() {
        if (changePassMut.isPending) return 0;
        if (post.old_password < 1 || post.new_password < 1)
            return setErr("Lütfen hiç bir alanı boş bırakmayınız.");
        const passwordControlState = passwordControl(post.new_password);
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
        if (post.new_password !== post.new_password_again)
            return setErr("Şifreler eşleşmiyor. (Yeni Şifre - Yeni Şifre Tekrar)");

        const { new_password_again, ...willBePosted } = post
        changePassMut.mutate(willBePosted);
    }

    return (
        <>
            <div style={{
                backgroundColor: "#f2f2f2",
                margin: "2px",
                width: "calc(100% - 4px)",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                overflow: "hidden"
            }}>
                <Form>
                    <TextBox maxLength={250} value={post.old_password} onChange={handleChange} name="old_password" placeholder="Eski Şifre" type="password" />
                    <TextBox maxLength={250} value={post.new_password} onChange={handleChange} name="new_password" placeholder="Yeni Şifre" type="password" />
                    <TextBox maxLength={250} value={post.new_password_again} onChange={handleChange} name="new_password_again" placeholder="Yeni Şifre Tekrar" type="password" />
                </Form>
                <div style={{ width: "60%" }}>
                    {scs && !err && <ShowSuccess>{scs}</ShowSuccess>}
                    {err && <ShowError>{err}</ShowError>}
                    <AcceptButton
                        $PENDING={changePassMut.isPending}
                        disabled={changePassMut.isPending}
                        onClick={changePassword}>ONAYLA</AcceptButton>
                </div>
            </div>
        </>
    )
}

export default index
