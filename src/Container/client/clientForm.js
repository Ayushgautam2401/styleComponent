import React from 'react'
import { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { email, normalizePhone, required } from 'Util/validate'
import { Styledtext } from 'Components/Inputs/text'
import { Field, Form, reduxForm } from 'redux-form'
import FormInput from 'Components/Inputs/formInputs'

const ClientForm = (props) => {
  const { handleSubmit } = props
  return (
    <div>
      <Styledbutton>Back</Styledbutton>
         <Styledheader>Client Form</Styledheader>
      <Form onSubmit={handleSubmit((formValues)=>{
        console.log(formValues)
        })} >
        <Styledtext>Name</Styledtext>
        <Field
          name="username"
          type="text"
          placeholder='Name'
          component={FormInput}
          validate={[ required]}
        />

        <Styledtext>Email</Styledtext>
        <Field
          name="email"
          type="text"
          placeholder='Email'
          component={FormInput}
          validate={[ required,email]}
        />

        <Styledtext>Phone Number</Styledtext>
        <Field
          name="name"
          type="text"
          placeholder='Phone Number'
          component={FormInput}
          validate={[ required]}
          normalize={normalizePhone}
        />

        <Styledtext>Address</Styledtext>
        <Field
          name="address"
          type="text"
          placeholder='Address'
          component={FormInput}
          validate={[ required]}
        />

        <Styledbutton>Submit</Styledbutton>


      </Form> 
      </div> 
  )
}

export default reduxForm({
  form: "ClientForm",
})(ClientForm);
