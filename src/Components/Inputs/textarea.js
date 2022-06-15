import React from 'react'
import { RenderField } from 'Util/validate'
import { Styledinput } from './input'
import { Styledtext } from './text'

const RenderTextArea = (input) => (
    <div>
        {/* <label>Content</label> */}
        <div>
            <textarea {...input} placeholder="Content" rows="4" cols="78"/>
            {/* {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} */}
        </div>
    </div>
);

const Textarea = ({label, input, meta, placeholder,textarea} ) => {
  return (
    <div>
      
      <Styledtext>{label}</Styledtext>
         <Styledinput {...input} placeholder={placeholder} value={input.value || ""} />
        <RenderField {...meta}/> 
      <RenderTextArea/>


    </div>
  )
}

export default Textarea 
  