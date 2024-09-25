import React from 'react'
import { Frame } from './styles/InnerNavButton.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InnerNavButton = ({ icon, text, color, onClick }) => {
    return (
        <Frame onClick={onClick} $COLOR={color}>
            <FontAwesomeIcon style={{
                fontSize: "5em",
            }} icon={icon} />
            <label style={{
                fontSize: "1.2em",
                fontWeight: "700",
                textAlign: "center",
                cursor: "pointer"
            }}>
            {text}
            </label>


        </Frame>
    )
}

export default InnerNavButton