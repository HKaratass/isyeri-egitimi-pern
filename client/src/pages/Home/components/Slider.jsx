import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    DotCont, Dots, Imaj,
    MoveButtonLeft,
    MoveButtonRight,
    OpacityDiv,
    SlideCont, SliderArea, Wrapper
} from "./styles/Slider.styled";
import { useRef, useState, useCallback, useEffect } from 'react';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { sliderApi } from "@/api/slider";
import { useQuery } from "@tanstack/react-query";
import { SkeletonBase } from '@/style/Skeleton.styled'


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stop, setStop] = useState(false);
    const timerRef = useRef(null);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['slides'],
        queryFn: () => {
            return sliderApi('get', '');
        }
    })
    //SLIDE API RETURN ONLY DATA !!!!
    const totalSlide = data?.length;


    const nextImage = useCallback(() => {
        const isLast = currentIndex === totalSlide - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, data?.resData]);



    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            if (!stop)
                nextImage();
        }, 2750)

        return () => clearTimeout(timerRef.current);
    }, [nextImage, stop]);

    const prevImage = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? totalSlide - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToFoto = (i) => {
        setCurrentIndex(i);
    };

    const nowFotoPx = (a, b) => {
        return (-100 / a) * b;
    };
    const navigate = useNavigate();
    return (
        <Wrapper>
            <SliderArea>
                <MoveButtonLeft><FontAwesomeIcon onClick={prevImage} icon={faAngleLeft} /></MoveButtonLeft>
                <SlideCont>
                    {
                        (isLoading || isError) ?
                            <SkeletonBase $CLR={isError && "#b96060"} $WIDTH={"100%"} $HEIGHT={"100%"} />
                            :
                            data?.map((k, i) => {
                                const urlWithTarget = `/detail/${k.event_id}?target=${k.target}`;
                                const urlWithOutTarget = `/detail/${k.event_id}`;
                                const url = (k.target && k.target !== '0') ? urlWithTarget : urlWithOutTarget;
                                function open(e) {
                                    if (k.event_id && k.event_id !== '0')
                                        if (e.ctrlKey) {
                                            window.open(url, '_blank');
                                        } else {
                                            navigate(url);
                                        }
                                }
                                return (
                                    <OpacityDiv
                                        key={i}
                                        $OPEN={i === currentIndex}
                                    >
                                        <Imaj
                                            onClick={open}
                                            onMouseOver={() => { setStop(true); }}
                                            onMouseOut={() => { setStop(false); }}
                                            src={`${import.meta.env.VITE_API_URL}/Images/Slider/${k.id}.jpg`}
                                            loading={(i > 1) ? "lazy" : undefined}
                                        />
                                    </OpacityDiv>)
                            })}
                </SlideCont>
                <MoveButtonRight><FontAwesomeIcon onClick={nextImage} icon={faAngleRight} /></MoveButtonRight>
            </SliderArea>
            <DotCont>
                {
                    !isLoading &&
                    data?.map((_, i) => (
                        <Dots key={i}
                            onClick={() => goToFoto(i)}
                            $active={i === currentIndex}
                        >
                            •
                        </Dots>
                    ))}
            </DotCont>
        </Wrapper>


    )
}

export default Slider