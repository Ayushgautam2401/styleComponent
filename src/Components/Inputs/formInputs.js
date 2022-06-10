import React from 'react'
import { Styledinput } from './input'
import { RenderField } from 'Util/validate'
import { PasswordInput } from 'Container/login/LoginpageStyling'
import { Styledtext } from './text'

const FormInput = ({label, input, meta, placeholder} ) => {
  return (
    <div>
        <Styledtext>{label}</Styledtext>
         <Styledinput {...input} placeholder={placeholder} value={input.value || ""} />
         {/* <PasswordInput {...props.input} value={props.input.value || ""} /> */}
        <RenderField {...meta}/>
    </div>
  )
}

export default FormInput 