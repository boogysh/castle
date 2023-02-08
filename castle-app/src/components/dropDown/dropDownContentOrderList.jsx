import React from 'react'

function DropDownContent({ content, classContent, display}) {
  return (
    <div className={`body_content ${display}`}>
      {/* {Array.isArray(content) ? (
        <ul className="list_content">
          {content.map((equipment, index) => (
            <li key={index} className={classContent}>
              {equipment}
            </li>
          ))}
        </ul>
      ) : (
        <p className={classContent}>{content}</p>
      )} */}


      <div className={classContent}>{content}</div>

      

    </div>

  )
}
export default DropDownContent