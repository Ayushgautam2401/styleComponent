import React from 'react'
import { Styledinput } from './input'
import { RenderField } from 'Util/validate'
import { Styledtext } from './text'
// import StyledTextarea from 'Components/Inputs/textarea'

const FormInput = ({label, input, meta, placeholder} ) => {
  return (
    <div>
        <Styledtext>{label}</Styledtext>
         <Styledinput {...input} placeholder={placeholder} value={input.value || ""} />
        <RenderField {...meta}/>
    </div>
  )
}

export default FormInput 