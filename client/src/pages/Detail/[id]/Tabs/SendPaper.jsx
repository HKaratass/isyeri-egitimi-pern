import React, { useState } from 'react'
import { ContentHead, DateContent, FullContentArea } from '../style/index.styled';
import { AttachFile, CaptchaImage, CaptchaInput, CaptchaSkeleton, IconContainer, InputIcon, InputText, InputWrapper, RemoveFile, ReportFrame, SendButton, ShowError, ShowErrorAbs, ShowSuccess, TextArea } from './styles/SendPaper.styled';
import { normalizeFileName, TimeZonePlus3 } from '@/utils/helperFunctions';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { sendPaperApi } from '@/api/sendPaper';
import { faEnvelope, faEnvelopeCircleCheck, faPhone, faSignature, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonProgressAnimBar, CommonProgressFrame, CommonProgressInfo } from '../../../Dashboard/Tabs/styles/CommonStyle';
import { SkeletonBase } from '@/style/Skeleton.styled'
import { captchaApi } from '@/api/captcha';

const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const isPhoneNumberRegex = (phone_number) => {
    return String(phone_number)
        .match(
            /^(\+?\d{10,15})$/
        );
}

const mailInit = {
    name: "",
    surname: "",
    email: "",
    emailAgain: "",
    phoneNumber: "",
    text: ""
}

const SendPaper = ({ data, isError, pending }) => {
    const [err, setErr] = useState();
    const [success, setSuccess] = useState();
    const [mail, setMail] = useState({
        ...mailInit,
        captchaT4p: ""
    });

    const [progress, setProgress] = useState(0);
    const mutation = useMutation({
        mutationFn: (data) => {
            return sendPaperApi(data, {
                onUploadProgress: progressEvent => setProgress(Math.round(
                    (progressEvent.loaded * 1000) / progressEvent.total
                )),
            });
        },
        onError: (err) => {
            setErr(`${err.data.code} - ${err.data.message}`);
            setProgress(0);
            setMail(prev => ({ ...prev, captchaT4p: "" }));
            changeCaptcha.mutate();
        },
        onSuccess: (data) => {
            setMail({
                ...mailInit,
                captchaT4p: ""
            });
            changeCaptcha.mutate();
            setProgress(0);
            setSuccess(data.message)
        }
    })
    const { isLoading, isError: captcha_err, data: captcha_token, error } = useQuery({
        queryKey: ['captcha_paper'],
        queryFn: () => {
            return captchaApi({
                withCredentials: true,
            }, true);
        },
        refetchOnWindowFocus: false,
    })

    const queryClient = useQueryClient();
    const changeCaptcha = useMutation({
        mutationKey: ['captcha_paper'],
        mutationFn: () => {
            return captchaApi({
                withCredentials: true,
            }, true);
        },
        onError: () => {
            setErr(true);
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['captcha_paper'], data);
        },
    })

    const isPhoneNumberInputRegex = (phone_number) => {
        return String(phone_number)
            .match(
                /^(\+?\d{0,15})$/
            );
    }

    function handleChange(e) {
        if (mutation.isPending) return 0;
        if (e.target.name === "file") {
            if (e.target.files[0].size > 5242880)
                return setErr("Dosya boyutu fazla.");
            setMail({ ...mail, [e.target.name]: e.target.files[0] });
        } else if (e.target.name === "phoneNumber") {
            if (isPhoneNumberInputRegex(e.target.value))
                setMail({ ...mail, [e.target.name]: e.target.value });
        } else {
            setMail({ ...mail, [e.target.name]: e.target.value });
        }
        setErr(null);
        setSuccess(null);
    }
    const getOutput = (char) => {
        switch (char) {
            case "1": return "I";
            case "0": return "O";
            case "ı": return "I";
            case "i": return "I";
            default: return /[üşçöğ*&-.,\"\?\_<>@]/i.test(char) ? "" : char;
        }
    };

    function captcha_handleChange(e) {
        if (mutation.isPending) return 0;
        const { value } = e.target;
        const processedValue = value
            .split('')
            .map((char) => getOutput(char))
            .join('');
        setMail(prev => ({ ...prev, [e.target.name]: processedValue.toUpperCase() }));
        setErr(false);
        setSuccess(null);
    }

    function sendMail() {
        if (
            mail.name === "" ||
            mail.surname === "" ||
            mail.email === "" ||
            mail.emailAgain === "" ||
            mail.phoneNumber === "" ||
            mail.text === ""
        ) return setErr("Lütfen formu boş bırakmayınız.");
        if (!isEmail(mail.email)) return setErr("Lütfen geçerli bir e-posta adresi giriniz.");
        if (mail.email !== mail.emailAgain) return setErr("Girdiğiniz e-posta adresleri uyuşmamaktadır.");
        if (!isPhoneNumberRegex(mail.phoneNumber)) return setErr("Lütfen geçerli bir telefon numarası giriniz.");
        if (mail.captchaT4p.length !== 5)
            return setErr('Doğrulama kodu 5 haneli olmalıdır.')

        const formData = new FormData();
        formData.append("name", mail.name);
        formData.append("surname", mail.surname);
        formData.append("email", mail.email);
        formData.append("phoneNumber", mail.phoneNumber);
        formData.append("text", mail.text);
        formData.append("captchaT4p", mail.captchaT4p);
        formData.append("captcha_token", captcha_token);
        formData.append("event_id", data.resData.id);
        mail.file && formData.append("file", mail.file, normalizeFileName(mail.file?.name));

        mutation.mutate(formData);
    }
    function bindEnter(e) {
        if (mutation.isPending || success) return 0;
        if (e.key === 'Enter')
            sendMail();
    }

    const today = new Date();
    // Debug
    // console.log("t", today);
    // console.log("timezone3", TimeZonePlus3(data.resData.sum_last_day_date));
    // console.log("nontime", new Date(data.resData.sum_last_day_date));
    const sum_state = !pending && data.resData.sum_first_day_date && data.resData.sum_last_day_date &&
        (TimeZonePlus3(data.resData.sum_first_day_date) <= today && TimeZonePlus3(data.resData.sum_last_day_date) >= today);
    const text_state = !pending && data.resData.text_first_day_date && data.resData.text_last_day_date &&
        (TimeZonePlus3(data.resData.text_first_day_date) <= today && TimeZonePlus3(data.resData.text_last_day_date) >= today);

    function removeFile() {
        if (mutation.isPending) return 0;
        const { file, ...mailWithOutFile } = mail;
        setMail(mailWithOutFile);
    }


    return (
        <>
            <ContentHead>Bildiri Gönder - {sum_state ? "Özet Gönder" : (text_state ? "Tam Metin Gönder" : "Tarihleri Takip Ediniz")} </ContentHead>
            {
                pending ?
                    <FullContentArea style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "15px 10px", maxWidth: "500px" }} $WIDTH={"100%"} $HEIGHT={"90%"} $BR={"10px"} />
                    </FullContentArea>
                    :
                    (sum_state || text_state) ?
                        <FullContentArea style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <ReportFrame>
                                <InputWrapper>
                                    <IconContainer $VALID={mail.name.length}>
                                        <InputIcon icon={faUser} title='Adı' />
                                    </IconContainer>
                                    <InputText value={mail.name} onChange={handleChange} name='name' placeholder='Adı' />
                                </InputWrapper>
                                <InputWrapper>
                                    <IconContainer $VALID={mail.surname.length}>
                                        <InputIcon icon={faSignature} title='Soyadı' />
                                    </IconContainer>
                                    <InputText value={mail.surname} onChange={handleChange} name='surname' placeholder='Soyadı' />
                                </InputWrapper>
                                <InputWrapper>
                                    <IconContainer $VALID={mail.email.length}>
                                        <InputIcon $REGEX={isEmail(mail.email)} icon={faEnvelope} title='E-Posta' />
                                    </IconContainer>
                                    <InputText value={mail.email} onChange={handleChange} name='email' placeholder='E-Posta' />
                                </InputWrapper>
                                <InputWrapper>
                                    <IconContainer $VALID={mail.emailAgain.length}>
                                        <InputIcon $C={"darkred"} $REGEX={isEmail(mail.email) && (mail.email === mail.emailAgain)} icon={faEnvelopeCircleCheck} title='E-Posta Tekrar' />
                                    </IconContainer>
                                    <InputText value={mail.emailAgain} onChange={handleChange} name='emailAgain' placeholder='E-Posta Tekrar' />
                                </InputWrapper>
                                <InputWrapper>
                                    <IconContainer $VALID={mail.phoneNumber.length}>
                                        <InputIcon $C={"darkred"} $REGEX={isPhoneNumberRegex(mail.phoneNumber)} icon={faPhone} title='Telefon Numarası' />
                                    </IconContainer>
                                    <InputText value={mail.phoneNumber} onChange={handleChange} name='phoneNumber' placeholder='Telefon Numarası' />
                                </InputWrapper>

                                <TextArea value={mail.text} onChange={handleChange} name="text"
                                    placeholder={
                                        `${sum_state ?
                                            `Şu an özet gönderme tarihlerindesiniz. Sadece özet gönderebilirsiniz.\nÖzetinizi yazınız ya da yapıştırınız.`
                                            :
                                            (
                                                text_state ?
                                                    `Şu an tam metin gönderme tarihlerindesiniz. Sadece tam metin gönderebilirsiniz.\nMetininizi yazınız ya da yapıştırınız.`
                                                    : ""
                                            )
                                        }`
                                    }
                                />

                                <InputWrapper>
                                    <AttachFile $PENDING={mutation.isPending} $LOADED={mail.file}>
                                        {mail.file ? mail.file.name : " Dosya Yükle (Max: 5MB)"}
                                        <input disabled={mutation.isPending} value={''} onChange={handleChange} type="file" name="file" style={{ display: "none" }} />
                                    </AttachFile>
                                    <RemoveFile $PENDING={mutation.isPending} $VALID={mail.file} onClick={removeFile}>KALDIR</RemoveFile>
                                </InputWrapper>
                                {err &&
                                    <ShowErrorAbs>
                                        {err}
                                    </ShowErrorAbs>
                                }
                                {success && !err &&
                                    <ShowSuccess>
                                        {success}
                                    </ShowSuccess>
                                }
                                <CaptchaSkeleton $ERR={isError || err} />
                                <CaptchaImage $WAIT={isLoading || captcha_err} $TOKEN={captcha_token} />
                                <CaptchaInput onKeyDown={bindEnter} name='captchaT4p' onChange={captcha_handleChange} value={mail.captchaT4p} placeholder='Doğrulama Kodu' />
                                {(progress !== 0 && !success && !err) && <CommonProgressFrame style={{ position: "absolute", width: "calc(100% - 40px)", right: "11px", bottom: "77px" }}><CommonProgressInfo>{progress !== 1000 ? `${progress}/1000` : "Bekleyiniz..."}</CommonProgressInfo><CommonProgressAnimBar $PROGRESS={progress} /></CommonProgressFrame>}
                                <SendButton $PENDING={mutation.isPending} disabled={mutation.isPending} onClick={sendMail}>Gönder</SendButton>
                            </ReportFrame>
                        </FullContentArea>
                        :
                        <>
                            <div style={{ height: "calc(100% - 1.35em - 2px - 3px - 3px - 18px - 1.2em)", overflowY: "auto" }}>

                                {
                                    data.resData.dates?.map((k, i) => (
                                        <DateContent key={i}>{k}</DateContent>
                                    ))
                                }
                            </div>
                            <ShowError>Tarihleri takip ediniz.</ShowError>
                        </>
            }


        </>
    )
}

export default SendPaper