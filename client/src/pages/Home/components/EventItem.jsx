import React from 'react'
import { Content, DateStyle, Header, OpenButton, Wrapper } from './styles/EventItem.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { startEndDateFormatter } from '@/utils/helperFunctions'

const EventItem = ({ data }) => {
    const navigate = useNavigate();
    const dateFormat_TR = { year: 'numeric', month: 'long', day: 'numeric' };
    function open(e) {
        const url = `/detail/${data.id}`;
        if (e.ctrlKey) {
            window.open(url, '_blank');
        } else {
            navigate(url);
        }
    }
    return (
        <Wrapper>
            <Header>{data.title}</Header>
            <Content>{data.subtitle}</Content>
            <DateStyle>
                {
                    startEndDateFormatter(data.start_date, data.end_date)
                }
            </DateStyle>


            <OpenButton onClick={open}><FontAwesomeIcon icon={faCircleRight} /></OpenButton>
        </Wrapper>
    )
}

export default EventItem