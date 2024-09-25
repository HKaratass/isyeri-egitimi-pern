import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import { DetailHeader, DetailNav, FlexWrap, HeaderName, NavList } from '../../../../Detail/[id]/style/index.styled';
import { AcceptButton, ScrollArea, ShowError, ShowSuccess } from '../../styles/CommonStyle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { themeApi } from '@/api/theme';
import { ThemeFrame } from './styles/Theme.styled';

const NavListForTheme = ({ children, colors, selected, hover }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const divStyle = {
        backgroundColor: selected ? colors.detail_nav_button_bc_selected :
            (hover ? colors.detail_nav_button_bc_hover :
                (isHovered ? colors.detail_nav_button_bc_hover : "transparent"))

    };

    return (
        <NavList
            style={divStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </NavList>
    );
};
const index = ({ setHead, backFunc, setBackFunc }) => {
    const [err, setErr] = useState(null);
    const back = () => {
        setHead("AYARLAR");
        backFunc();
        setBackFunc(null);
    }

    const [colors, setColors] = useState({
        detail_nav_bc: "#a33333",
        detail_nav_button_bc_hover: "#971a1a",
        detail_nav_button_bc_selected: "#8c0101",
    });
    const queryClient = useQueryClient();
    const getTheme = queryClient.getQueryData(['theme']);

    useEffect(() => {
        setHead("AYARLAR - Tema");
        setBackFunc(() => {
            return () => {
                back()
            }
        });
        setColors(getTheme.theme);
    }, [getTheme])

    function handleChange(e) {
        setColors({ ...colors, [e.target.name]: e.target.value });
    }

    const changeColor = useMutation({
        mutationFn: (data) => {
            return themeApi('put', '', data, {
                withCredentials: true,
            });
        },
        onError: (err) => {
            setErr(`${err.data?.code} - ${err.data?.message}`);
            setTimeout(() => {
                back();
            }, 1500);
        },
        onSuccess: () => {
            setTimeout(() => {
                location.reload();
            }, 400);
        }
    })

    function submitColor() {
        changeColor.mutate(colors);
    }

    return (
        <ScrollArea>
            <ThemeFrame>
                <label htmlFor="selected">
                    <DetailHeader style={{ backgroundColor: colors.detail_nav_button_bc_selected }}><HeaderName>SEMPOZYUM (def: #8C0101)</HeaderName></DetailHeader>
                </label>
                <FlexWrap style={{height: "100%"}}>
                    <label htmlFor="background">
                        <DetailNav style={{ backgroundColor: colors.detail_nav_bc }}>
                            <NavListForTheme colors={colors}>Hakkında(#A33333)</NavListForTheme>
                            <NavListForTheme colors={colors}>Tarihler</NavListForTheme>
                            <label htmlFor="selected">
                                <NavListForTheme colors={colors} selected>Kurullar (Seçili)</NavListForTheme>
                            </label>
                            <NavListForTheme colors={colors}>Yazım Kuralları</NavListForTheme>
                            <NavListForTheme colors={colors}>Bildiri Gönder</NavListForTheme>
                            <NavListForTheme colors={colors}>Oturum Takvimi</NavListForTheme>
                            <label htmlFor="hover">
                                <NavListForTheme colors={colors} hover>Galeri&nbsp; <FontAwesomeIcon icon={faArrowPointer} /> (Üstünde#971A1A)</NavListForTheme>
                            </label>
                            <NavListForTheme colors={colors}>İçerik</NavListForTheme>
                        </DetailNav>
                    </label>
                    <div style={{ width: "100%" }}>
                        <input style={{ display: "none" }} id='background' value={colors?.detail_nav_bc} type="color" onChange={handleChange} name='detail_nav_bc' />
                        <input style={{ display: "none" }} id='selected' value={colors?.detail_nav_button_bc_selected} type="color" onChange={handleChange} name='detail_nav_button_bc_selected' />
                        <input style={{ display: "none" }} id='hover' value={colors?.detail_nav_button_bc_hover} type="color" onChange={handleChange} name='detail_nav_button_bc_hover' />
                        {err && <ShowError>{err}</ShowError>}
                        {changeColor.isSuccess && !err && <ShowSuccess>{changeColor.data.message}</ShowSuccess>}
                        <AcceptButton
                            $PENDING={changeColor.isPending}
                            disabled={changeColor.isPending || changeColor.isSuccess || changeColor.isError}
                            onClick={submitColor}>ONAYLA</AcceptButton>
                    </div>
                </FlexWrap>
            </ThemeFrame>
        </ScrollArea>
    )
}

export default index