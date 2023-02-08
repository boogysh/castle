import React, { useState, useEffect } from 'react'
import DropDownTitle from './dropDownTitle'
import DropDownContentOrderList from './dropDownContentOrderList'
import './dropDown.css'
import './dropDownTitle.css'
import './dropDownContent.css'

function DropDown({ title, content }) {
  // TOGGLE
  const [isOpen, setIsOpen] = useState('hidden')
  const [topArrow, setTopArrow] = useState('arrow_content')
  const toggleContent = () => {
    setIsOpen(isOpen === 'hidden' ? '' : 'hidden')
    setTopArrow(
      topArrow === 'arrow_content' ? 'arrow_content rotate' : 'arrow_content'
    )
  }
  // SET CLASSES
  const [currentClassContent, setClassContent] = useState('p_content')
  const [currentClassTitle, setClassTitle] = useState('h3_DD')
  const href = window.location.href.includes('/apropos')
  useEffect(() => {
    if (href) setClassContent('p_content_about') || setClassTitle('h3_DD_about')
    else setClassContent(currentClassContent) || setClassTitle('h3_DD')
  }, [currentClassContent, currentClassTitle, href])
  //  DROPDOWN
  return (
    <div className="dropDown_content">
      <DropDownTitle
        title={title}
        classTitle={`${currentClassTitle}`}
        toggle={toggleContent}
        arrow={topArrow}
      />
      <DropDownContentOrderList
        display={`${isOpen}`}
        content={content}
        classContent={`${currentClassContent}`}
      />
    </div>
  )
}
DropDown.defaultProps = {
  content: 'Content is not available',
}
export default DropDown