import React, { useEffect, useRef, useState } from 'react'
import { CaptchaImage, Frame, Input, Mixer, Mixer2, Mixer3, Mixer4, MixerArea, SelectCover, TimerAnimBar, TimerFrame } from './styles/_Captcha.styled'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { captchaApi } from '@/api/captcha';
import { SkeletonBase } from '@/style/Skeleton.styled'

const INIT_SECOND = 40;
// const r1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const _Captcha = ({ onError, setCaptchaToken, inputValue, setValue, bindEnter, setOutErr }) => {
    const [err, setErr] = useState(false);

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['captcha'],
        queryFn: () => {
            return captchaApi({
                withCredentials: true,
            });
        },
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (isError) {
            setErr(true);
        }
    }, [isError])
    
    useEffect(() => {
        changeCaptcha.mutate();
        setSeconds(INIT_SECOND);
    }, [onError])

    const queryClient = useQueryClient();
    const changeCaptcha = useMutation({
        mutationKey: ['captcha'],
        mutationFn: () => {
            return captchaApi({
                withCredentials: true,
            });
        },
        onError: () => {
            setErr(true);
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['captcha'], data);
            setCaptchaToken(data);
        },
    })

    const [seconds, setSeconds] = useState(INIT_SECOND);
    const [intervalId, setIntervalId] = useState(null);
    useEffect(() => {
        setCaptchaToken(data);
        if (intervalId) {
            clearInterval(intervalId);
        }
        if (seconds == 0) {
            setValue(prev => ({ ...prev, CAPTCHA: "" }));
        }
        // console.log(`${(seconds * 100) / INIT_SECOND}% - ${data}`); //debug
        if (seconds >= 0) {
            const newIntervalId = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        clearInterval(newIntervalId);
                        changeCaptcha.mutate();
                        setSeconds(INIT_SECOND);
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
            setIntervalId(newIntervalId);
            return () => clearInterval(newIntervalId);
        } else {
            setSeconds(INIT_SECOND);
        }
    }, [seconds, data]);

    const getOutput = (char) => {
        switch (char) {
            case "1": return "I";
            case "0": return "O";
            case "ı": return "I";
            case "i": return "I";
            default: return /[üşçöğ*&-.,\"\?\_<>@]/i.test(char) ? "" : char;
        }
    };

    function handleChange(e) {
        const { value } = e.target;
        const processedValue = value
            .split('')
            .map((char) => getOutput(char))
            .join('');
        setValue(prev => ({ ...prev, [e.target.name]: processedValue.toUpperCase() }));
        setOutErr(null);
        setErr(false);
    }
    return (
        <Frame>
            <TimerFrame />
            <TimerAnimBar $SECOND={(seconds * 100) / INIT_SECOND} />
            <SelectCover />
            {
                !(isLoading || isError || changeCaptcha.isPending || err) &&
                <MixerArea>
                    <Mixer />
                    <Mixer2 />
                    <Mixer3 />
                    <Mixer4 />
                </MixerArea>
            }
            {
                (isLoading || isError || changeCaptcha.isPending || err) ?
                    <SkeletonBase $CLR={(isError || err) && "#b96060"} $WIDTH={"100%"} $HEIGHT={"100%"} />
                    :
                    <CaptchaImage $WAIT={isLoading || isError} $TOKEN={data} />
            }
            <Input onKeyDown={bindEnter} name='CAPTCHA' onChange={handleChange} value={inputValue} placeholder='Doğrulama Kodu' />
        </Frame>
    )
}

export default _Captcha