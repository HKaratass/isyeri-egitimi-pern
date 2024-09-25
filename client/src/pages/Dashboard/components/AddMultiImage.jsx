import React from 'react'
import { Frame } from './styles/AddMultiImage.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { LoadImage, RemovedButton, ShowImage, ShowImageFrame } from './styles/AddOneImage.styled'

const AddMultiImage = ({ images, handleChange, removeFunc }) => {


  return (
    <Frame>
      {
        images?.map((k, i) => (
          <ShowImageFrame key={i}>
            <ShowImage src={k.url} alt="Loaded Photo" />
            <RemovedButton onClick={() => { removeFunc(k.url) }}>
              <FontAwesomeIcon icon={faTrashCan} />
            </RemovedButton>
            <input
              type="text"
              value={k.title}
              name="image_name"
              maxLength={20}
              onChange={(e) => handleChange(e, i)}
              style={{
                position: "absolute",
                bottom: "20px",
                left: "10px",
                width: "calc(200px - 18.4px)",
                padding: "5px 8px",
                margin: "none",
                outline: "none",
                border: "1.35px solid silver",
                // border: "none",
                textAlign: "center",
                // height: "20px",
                backgroundColor: "#fff8",
                // fontSize: "1.2rem"
              }}


            />
          </ShowImageFrame>
        ))
      }
      {
        images.length < 12 &&
        <LoadImage>
          <FontAwesomeIcon icon={faCirclePlus} />
          <input
            name='images'
            type="file"
            multiple
            accept="image/png, image/jpg, image/jpeg, image/webp" //belki gif eklenebilir
            onChange={handleChange}
            value={''}
            style={{
              display: "none"
            }} />
        </LoadImage>
      }
    </Frame>

  )
}

export default AddMultiImage