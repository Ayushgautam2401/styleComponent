import React, { Fragment } from 'react'
import { Styledbutton } from 'Components/Inputs/button'
import { required } from 'Util/validate'
import { Field, Form, reduxForm,FieldArray } from 'redux-form'
import FormInput from 'Components/Inputs/formInputs'
import { FormContainer, FormHeaderContainer } from 'Container/invoice/invoicePDF/FormStyling'
import { Styledheader } from 'Components/Inputs/header'


const renderAddressOrders = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    {fields.map((member, index) => (
      <ul key={index}>
        <Styledbutton
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >Remove</Styledbutton>
        <Styledheader>Address {index + 1}</Styledheader>
        <Field
          name={`${member}.address`}
          component={FormInput}
          validate={[required]}
        />
      </ul>
    )
    )
    }
    <ul>
      <Styledbutton type="button" onClick={() => fields.push({})}>
        Add Description
      </Styledbutton>
      {submitFailed && error && <span>{error}</span>}
    </ul>
  </ul>
)
const ClientForm = (props) => {
  const { handleSubmit, handleFormSubmit } = props
  console.log('fieldarray', handleFormSubmit)
  return (
    <Fragment>
      <FormContainer>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
         
          <Field
            name="name"
            placeholder='Name'
            component={FormInput}
            validate={[required]}
            label="Name"
          />
          <FieldArray name="descriptions" component={renderAddressOrders} />
          <Styledbutton>Submit</Styledbutton>
        </Form>
      </FormContainer>
    </Fragment>
  )
}

export default reduxForm({
  form: "ClientForm",
})(ClientForm);
