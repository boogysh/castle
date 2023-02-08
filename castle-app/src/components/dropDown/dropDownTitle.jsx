import React from 'react'
import arrowBottom from '../../assets/dropDown/arrowBottomBlack.png'
import { v4 as uuidv4 } from "uuid";

import './dropDownTitle.css'
function DropDownTitle({ toggle, title, classTitle, arrow }) {
  return (
    <div className="title_content">
      <h3 key={uuidv4()} className={classTitle}>{title}</h3>
      <button className='DD_btn' onClick={toggle}>
        <img className={arrow} src={arrowBottom} alt="arrow dropdown" />
      </button>
    </div>
  )
}
export default DropDownTitle