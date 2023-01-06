import React from 'react'
import './CommonSection.scss'

const CommonSection = ({title ,img}) => {
  return (
    <div className='common__section' style={{backgroundImage:`url(${img})` }}>
      
        <div className="textheader">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default CommonSection