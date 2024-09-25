import React from 'react'
import { Icon, Wrapper } from './styles/SelectCommitteeMember.styled'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { Chooser, ChooserOption } from '../Tabs/styles/CommonStyle'

const SelectCommitteeMember = ({ add, update, name, handleChange, title, data, controlUnit, disabled }) => {
    const controlUnitSet = new Set(controlUnit); //optimizasyon
    return (
        // ${data?.every(v => controlUnitSet.has(v.id) && none}
        <Wrapper style={{ display: `${data?.every(v => controlUnitSet.has(v.id)) ? "none" : "flex"}` }}>
            <Icon icon={faUserPen} />
            <Chooser disabled={disabled} $ADD={add} $UPDATE={update} name={name} onChange={handleChange}>
                <option hidden>{title}</option>
                {
                    data?.map((k, i) => {
                        if (!controlUnit?.includes(k.id))
                            return (
                                <ChooserOption $ADD={add} $UPDATE={update} key={i} value={k.id}>{k.name}</ChooserOption>
                            )
                    })
                }
            </Chooser>

        </Wrapper>
    )
}

export default SelectCommitteeMember