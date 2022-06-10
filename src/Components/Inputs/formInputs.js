import React from 'react'
import { Styledinput } from './input'
import { RenderField } from 'Util/validate'
import { PasswordInput } from 'Container/login/LoginpageStyling'

const FormInput = (props ) => {
    // console.log(props)
  return (
    <div>
         <Styledinput {...props.input} value={props.input.value || ""} />
         {/* <PasswordInput {...props.input} value={props.input.value || ""} /> */}
        <RenderField {...props}/>
    </div>
  )
}

export default FormInput 