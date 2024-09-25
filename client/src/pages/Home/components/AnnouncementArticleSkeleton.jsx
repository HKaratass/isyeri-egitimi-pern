import React from 'react'
import { InfoContainer, SkeletonAnnouncementImage, Wrapper } from './styles/AnnouncementArticle.styled'
import { SkeletonBase } from '@/style/Skeleton.styled'

const AnnouncementArticleSkeleton = ({err}) => {
    return (
        <Wrapper>
            <SkeletonAnnouncementImage $CLR={err && "#b96060"}/>
            <InfoContainer>
                <SkeletonBase style={{display: "inline-block"}} $CLR={err && "#b96060"} $WIDTH={"100%"} $HEIGHT={"1.2em"} $BR={"2px"} />
                <SkeletonBase style={{display: "inline-block"}} $CLR={err && "#b96060"} $WIDTH={"100%"} $HEIGHT={"3.86em"} $BR={"2px"} />
            </InfoContainer>
        </Wrapper>
    )
}

export default AnnouncementArticleSkeleton