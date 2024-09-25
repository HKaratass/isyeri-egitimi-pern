import React from 'react'
import { Wrapper } from './styles/MobileNavButton.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNavButton = ({ name, changeTab, icon, title, selected }) => {
  // console.log(name)
  return (
    <Wrapper
      onClick={() => {
        changeTab(null, name);
      }}
      $Selected={selected}
    >
      <FontAwesomeIcon style={{fontSize: ".8em"}} icon={icon} />
      {
        selected &&
        <label style={{ textAlign: "center", fontSize: ".5em", marginLeft: ".2em", width: "calc(100% - 25px)" }}>{title}</label>
      }
    </Wrapper>
  )
}

export default MobileNavButton