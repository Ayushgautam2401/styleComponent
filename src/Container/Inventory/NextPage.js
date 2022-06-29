import { Styledbutton } from 'Components/Inputs/button'
import { FormContainer } from 'Container/login/LoginpageStyling'
import React,  { Fragment, useState } from 'react'
import { Field,reduxForm, Form } from 'redux-form';
import { required } from 'Util/validate';
import FormInput from 'Components/Inputs/formInputs';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getInventoryState } from 'Store/Selector';

const NextPage = () => 
{
 // const history= useHistory;
  const {list, raw} = useSelector(getInventoryState);
  const [category, setCategory] = useState()
  return (
    <Fragment>
    
    <FormContainer>
     
     <Form>
     <Field
            name="category"
            placeholder='Category'
            component={FormInput}
           // validate={[required]}
            value={category}
            label="Category"
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

export default reduxForm ({
  form:"NextPage",
  

})(NextPage)