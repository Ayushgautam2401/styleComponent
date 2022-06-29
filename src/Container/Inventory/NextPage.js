import { Styledbutton } from 'Components/Inputs/button'
import { FormContainer } from 'Container/login/LoginpageStyling'
import React, { Fragment } from 'react'
import { Field, reduxForm, Form } from 'redux-form';
import { required } from 'Util/validate';
import FormInput from 'Components/Inputs/formInputs';
import { useHistory } from 'react-router-dom';
import { InventoryUpdateActions } from 'Store/Action/inventoryActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getInventoryState } from 'Store/Selector';
const NextPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {handleSubmit,handleFormSubmit} = props

 
  return (
    <Fragment>

      <FormContainer>

        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Field
          name="category"
          placeholder='category'
          component={FormInput}
          label="Device"
          />
            
         
          <Field
            name="name"
            placeholder='Name'
            component={FormInput}
            validate={[required]}
            label="Name"
          />

          <Field
            name="quantity"
            placeholder='Quantity'
            component={FormInput}
            validate={[required]}
            label="Quantity"
          />
          <Styledbutton >Submit</Styledbutton>

        </Form>

      </FormContainer>

    </Fragment>
  )
}

export default reduxForm({
  form: "NextPage",
  enableReinitialize: true
})(NextPage)