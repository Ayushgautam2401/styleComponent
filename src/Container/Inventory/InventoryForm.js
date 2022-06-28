import React,  { Fragment }  from 'react'
import { Styledbutton } from 'Components/Inputs/button';
import FormInput from 'Components/Inputs/formInputs';
import { Field, reduxForm, Form, FieldArray} from 'redux-form';
import { FormHeaderContainer ,FormContainer} from 'Container/invoice/invoicePDF/FormStyling';
import { required } from 'Util/validate';








const InventoryForm = (props) => {

  const { handleSubmit, handleFormSubmit} = props
    // console.log(handleFormSubmit)
  return (
    <Fragment>
        <FormContainer>
        <FormHeaderContainer>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>

        <Field
            name="name"
            placeholder='Name'
            component={FormInput}
            validate={[required]}
            label="Name"
          />
          
         
     
        <Styledbutton>Submit</Styledbutton>
        </Form>
        </FormHeaderContainer>
        </FormContainer>
    </Fragment>

  )
}

export default reduxForm({
    form: "InventoryForm",
    enableReinitialize: true
})(InventoryForm);