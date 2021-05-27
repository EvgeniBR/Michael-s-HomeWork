import React from 'react'

import './FormInput.styles.scss'

const FormInput = ({handleChange , label , ...otherProps}) =>{

return (
    <div className="email-input">
        <input className="form-input" onChange={handleChange} placeholder={label} {...otherProps}/>                 
    </div>
)


}

export default FormInput