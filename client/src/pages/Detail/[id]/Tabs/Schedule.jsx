import React from 'react'
import { ContentHead, FullContentArea } from '../style/index.styled'
import { Image } from './styles/Schedule.styled'
import { SkeletonBase } from '@/style/Skeleton.styled'

const Schedule = ({ EventId, ScheduleState, isError }) => {
    function zoom() {
        window.open(`${import.meta.env.VITE_API_URL}/Images/Events/${EventId}/schedule.jpg`, "_blank")
    }
    return (
        <>
            <ContentHead>Oturum Takvimi</ContentHead>
            <FullContentArea>
                {
                    !EventId ?
                        <SkeletonBase $CLR={isError && "#b96060"} style={{ margin: "5px", padding: "5px" }} $WIDTH={"calc(100% - 20px)"} $HEIGHT={"50%"} $BR={"5px"} />
                        :
                        (
                            ScheduleState ?
                                <Image onClick={zoom} src={`${import.meta.env.VITE_API_URL}/Images/Events/${EventId}/schedule.jpg`} />
                                :
                                <center>Oturum takvimi henüz yüklenmedi.</center>
                        )
                }
            </FullContentArea>
        </>
    )
}

export default Schedule