import React from 'react'
import { Input, PlaceHolder, UnderLine, Wrapper } from './style/TextBox.styled'

const TextBox = ({ placeholder, onKeyDown, onChange, name, type, value, maxLength }) => {
    return (
        <Wrapper>
            <Input maxLength={maxLength || undefined} value={value} $t={type} onKeyDown={onKeyDown} onChange={onChange} name={name} required/>
            <UnderLine/>
            <PlaceHolder>{placeholder}</PlaceHolder>
        </Wrapper>
    )
}

//&:valid için required şart DİKKAT
export default TextBox