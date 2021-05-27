import React from 'react'

import './TextAreaInput.styles.scss'

const TextAreaInput = ({handleChange , label , ...otherProps}) =>{

return (
    <div className="text-area">
        <textarea  className="text-input" onChange={handleChange} placeholder={label} {...otherProps}/>                     
    </div>
)


}

export default TextAreaInput;