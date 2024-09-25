import React, { useState } from 'react'
import { Icon, Image, Name, TextContainer, Title, Wrapper } from './styles/KurulCard.styled'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const KurulCard = ({ data, children }) => {
  // const [loadError, setLoadError] = useState(false);


  return (
    <Wrapper>
      {
        data?.image ?
          <Image src={`${import.meta.env.VITE_API_URL}/Images/Committee/${data?.id}.jpg`} />
          :
          <Icon icon={faUserGraduate} />
        // <Image onError={() => setLoadError(true)} src={`${import.meta.env.VITE_API_URL}/Images/Committee/${data.id}.jpg`}/>
      }
      <TextContainer>
        <Name>{data?.name}</Name>
        <Title>{data?.title}</Title>
      </TextContainer>
      {children}
    </Wrapper>
  )
}

export default KurulCard