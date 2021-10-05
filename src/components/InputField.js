import React from 'react'

const InputField = ({...rest}) => {
    return (
        <div>
            <input {...rest} required/>
        </div>
    )
}

export default InputField
