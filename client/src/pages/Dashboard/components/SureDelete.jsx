import React from 'react'
import { Button, ModalFrame, Wrapper } from './styles/SureDelete.styled'

const SureDelete = ({YES, NO}) => {
    return (
        <ModalFrame>
            <Wrapper>
                <div style={{color: "#f2f2f2", fontSize: "1.2em", userSelect: "none"}}>Silmek istediğinize emin misiniz?</div>
                <div>
                    <Button onClick={YES} $DEL>Evet</Button>
                    <Button onClick={NO}>Hayır</Button>
                </div>
            </Wrapper>
        </ModalFrame>
    )
}

export default SureDelete