import React, { Fragment } from 'react'
import { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { normalizePhone, required } from 'Util/validate'
import { Field, Form, reduxForm } from 'redux-form'
import FormInput from 'Components/Inputs/formInputs'
import { FormContainer, FormHeaderContainer } from 'Container/invoice/invoicePDF/FormStyling'
import { textArea } from 'Components/Inputs/input'
import Textarea from 'Components/Inputs/textarea'

const ClientForm = (props) => {
  const { handleSubmit, handleFormSubmit } = props
  return (
    <Fragment>
      <FormContainer>
      <Styledheader>Client Form</Styledheader>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
<FormHeaderContainer>
        <Field
          name="name"
          placeholder='Name'
          component={FormInput}
          validate={[required]}
          label="Name"
        />

        <Field
          name="phoneNumber"
          placeholder='Phone Number'
          component={FormInput}
          validate={[required]}
          normalize={normalizePhone}
          label="Phone Number"
        />
        </FormHeaderContainer>
        <Field
          name="address"
          placeholder='Address'
          component={FormInput}
          validate={[required]}
          label="Address"
        />
        <Styledbutton>Submit</Styledbutton>
      </Form>
      </FormContainer>
    </Fragment>
  )
}

export default reduxForm({
  form: "ClientForm",
})(ClientForm);
