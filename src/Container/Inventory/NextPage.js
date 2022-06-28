import { Styledbutton } from 'Components/Inputs/button'
import { FormContainer } from 'Container/login/LoginpageStyling'
import React,  { Fragment } from 'react'
import { Field,reduxForm, Form } from 'redux-form';
import { required } from 'Util/validate';
import FormInput from 'Components/Inputs/formInputs';

const NextPage = () => 
{
   
  return (
    <Fragment>
    
    <FormContainer>
     
     <Form>
     <Field
            name="name"
            placeholder='Name'
            component={FormInput}
            validate={[required]}
            label="Name"
          />

        <Field
            name="name"
            placeholder='Quantity'
            component={FormInput}
            validate={[required]}
            label="Quantity"
          />
        <Styledbutton>Submit</Styledbutton>
          
     </Form>
    
    </FormContainer>

    </Fragment>
  )
}

export default reduxForm ({
  form:"NextPage",
  enableReinitialize:true
})(NextPage)