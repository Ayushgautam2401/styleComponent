import React, { Fragment } from 'react'
import { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { normalizePhone, required } from 'Util/validate'
import { Styledtext } from 'Components/Inputs/text'
import { Field, Form, reduxForm } from 'redux-form'
import FormInput from 'Components/Inputs/formInputs'

const ClientForm = (props) => {
  const { handleSubmit, handleFormSubmit } = props
  return (
    <Fragment>
      <Styledheader>Client Form</Styledheader>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field
          name="username"
          type="text"
          placeholder='Name'
          component={FormInput}
          validate={[required]}
          label="Name"
        />

        <Field
          name="PhoneNo"
          type="text"
          placeholder='Phone Number'
          component={FormInput}
          validate={[required]}
          normalize={normalizePhone}
          label="Phone Number"

        />

        <Field
          name="address"
          type="text"
          placeholder='Address'
          component={FormInput}
          validate={[required]}
          label="Address"
        />
        <Styledbutton>Submit</Styledbutton>
      </Form>
    </Fragment>
  )
}

export default reduxForm({
  form: "ClientForm",
})(ClientForm);
