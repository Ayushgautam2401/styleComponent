import React from 'react'
import { Styledinput } from './input'
import { RenderField } from 'Util/validate'

const FormInput = ({props} ) => {
    console.log(props)
  return (
    <div>
        <Styledinput/>
        <RenderField />
    </div>
  )
}

export default FormInput 