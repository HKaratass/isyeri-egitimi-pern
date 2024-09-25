import { useState } from 'react'
import { Continue, Image, Info, InfoContainer, InfoHeader, SkeletonAnnouncementImage, Wrapper } from './styles/AnnouncementArticle.styled'
import { useNavigate } from 'react-router-dom'

const AnnouncementArticle = ({ data, readAnnouncement, lazy }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const longAnnouncement = data.description.length > 175;
  return (
    <Wrapper $clickable={data.event_id} onClick={() => {
      data.event_id && navigate(`/detail/${data.event_id}`);
      longAnnouncement && readAnnouncement(data);
    }}
    >
      {
        loading &&
        <SkeletonAnnouncementImage />
      }
      <Image
        $LOADING={!lazy && loading}
        loading={lazy ? "lazy" : undefined}
        src={`${import.meta.env.VITE_API_URL}/Images/Announcement/${data.id}.jpg`}
        onLoad={() => setLoading(prev => !prev)}
      />
      <InfoContainer>
        <InfoHeader>{data.head}</InfoHeader>
        <Info>
          {data.description.substring(0, 175)}
          {
            longAnnouncement &&
            <Continue onClick={() => { readAnnouncement(data) }}>...devamı.</Continue>
          }
        </Info>
      </InfoContainer>
    </Wrapper>
  )
}

export default AnnouncementArticle