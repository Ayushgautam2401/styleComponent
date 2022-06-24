import { Styledbutton } from 'Components/Inputs/button';
import FormInput from 'Components/Inputs/formInputs';
import { FormContainer } from 'Container/login/LoginpageStyling';
import React from 'react'
import { Fragment } from 'react';
import { Field, reduxForm, Form} from 'redux-form';
import { required } from 'Util/validate';

const InventoryForm = (props) => {

    const {handleSubmit, handleFOrmSubmit} = props
  return (
    <Fragment>
        <FormContainer>
            <Form >
        <Field
            name="name"
            placeholder='Name'
            component={FormInput}
            validate={[required]}
            label="Name"
          />
          <Field 
          name='quantity'
          placeholder='quantity'
          component={FormInput}
          validate={[required]} />
     
        <Styledbutton>Submit</Styledbutton>
        </Form>
        </FormContainer>
    </Fragment>
  )
}

export default reduxForm({
    form: "inventoryForm",
    enableReinitialize: true
})(InventoryForm);