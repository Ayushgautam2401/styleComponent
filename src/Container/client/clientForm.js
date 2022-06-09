import React from 'react'
import { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { Styledinput } from 'Components/Inputs/input'
import { Styledtext } from 'Components/Inputs/text'
import { Field, Form, reduxForm } from 'redux-form'
import { RenderField, validate } from 'Util/validate'
import FormInput from 'Components/Inputs/formInputs'

const ClientForm = (props) => {
  const { handleSubmit,submitting } = props
  //  console.log(props)
  return (
    <div>
      {/* <Styledbutton>Back</Styledbutton> */}
      {/* <Styledheader>Client Form</Styledheader> */}
      <Form onSubmit={handleSubmit((formValues)=>{
        console.log(formValues)
        })} >
          <RenderField>
        <Styledtext>Name</Styledtext>
        <Field
          name="username"
          type="text"
          placeholder='Name'
          component={Styledinput}
          // component='input'
        />

        <Styledtext>Email</Styledtext>
        <Field
          name="email"
          type="text"
          placeholder='Email'
          component={Styledinput}
          // component='input'
        />

        <Styledtext>Phone Number</Styledtext>
        <Field
          name="name"
          type="text"
          placeholder='Phone Number'
          component={Styledinput}
          // component='input'
        />

        <Styledtext>Address</Styledtext>
        <Field
          name="address"
          type="text"
          placeholder='Address'
          component={Styledinput}
          // component='input'
        />

        <Styledbutton>Submit</Styledbutton>

        </RenderField>
      </Form> 
      </div> 
  )
}

export default reduxForm({
  form: "ClientForm",
  // validate,

})(ClientForm);
