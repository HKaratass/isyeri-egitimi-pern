import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { LoadImage, RemovedButton, ShowImage, ShowImageFrame } from './styles/AddOneImage.styled'

/**
 * handleChange control to 'image' name
 * if schedule => control to 'schedule' name
 */
const AddOneImage = ({ crop, slide, schedule, title, image, handleChange, removeFunc }) => {
    return (
        <>
            {
                image ?
                    <ShowImageFrame $SLIDE={slide} $CROP={crop}>
                        <ShowImage src={image.url} alt="Loaded Photo" />
                        <RemovedButton onClick={removeFunc}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </RemovedButton>
                    </ShowImageFrame>
                    :
                    <LoadImage $SLIDE={slide} title={title} $CROP={crop}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <input
                            name={schedule ? "schedule" : "image"}
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/webp" //belki gif eklenebilir
                            onChange={handleChange}
                            value={''}
                            style={{
                                display: "none"
                            }} />
                    </LoadImage>

            }
        </>
    )
}

export default AddOneImage