import React from 'react'
import { CenterInfo, Frame, Map, MapFrame, Tag, TagContainer } from './style/index.styled'

const index = () => {
  return (
    <Frame>
      <TagContainer>
        <Tag>
          <label style={{ fontSize: "1.2em", fontWeight: "700" }}>Etkinlik Projesi</label>
          <label>Telefon	0 (312) 312 00 00 - 09</label>
          <label>E-Posta​	<a href="mailto:event@isyeriegitimi.com">event@isyeriegitimi.com</a></label>
        </Tag>
        <Tag>
          <label style={{ fontSize: "1.2em", fontWeight: "700" }}>Program Yönetim Başkanlığı</label>
          <label>Telefon	0 (312) 312 00 10</label>
          <label>E-Posta	<a href="mailto:program@isyeriegitimi.com">program@isyeriegitimi.com</a></label>
        </Tag>
      </TagContainer>
      <CenterInfo>
        Sempozyum, Panel ve Çalıştay konuları için <a href="mailto:bilgi.etkinlik@isyeriegitimi.com">bilgi.etkinlik@isyeriegitimi.com</a>
      </CenterInfo>
      <MapFrame>
        <Map />
      </MapFrame>

    </Frame>
  )
}

export default index