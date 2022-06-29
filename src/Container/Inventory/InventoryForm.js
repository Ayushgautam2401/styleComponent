import React,  { Fragment }  from 'react'
import { Styledbutton } from 'Components/Inputs/button';
import FormInput from 'Components/Inputs/formInputs';
import { Field, reduxForm, Form} from 'redux-form';
import { FormHeaderContainer ,FormContainer} from 'Container/invoice/invoicePDF/FormStyling';
import { required } from 'Util/validate';
import { useDispatch } from 'react-redux';
import { InventoryUpdateActions } from 'Store/Action/inventoryActions';
import { useHistory } from 'react-router-dom';

const InventoryForm = (props) => {
  const dispatch = useDispatch();
  const history  = useHistory();
  const { handleSubmit} = props;

    
  const handleFormSubmit = (data, inventory = {}) => {
    console.log(data);
    const {id} = inventory;
    // dispatch(InventoryUpdateActions.request(data))
    history.push(`/inventory/Inventoryform/NextPage/${id || ""}`)
  }
    
  return (
    <Fragment>
        <FormContainer>
        <FormHeaderContainer>
            <Form  onSubmit={handleSubmit(handleFormSubmit)}>

        <Field
            name="category"
            placeholder='category'
            component={FormInput}
            validate={[required]}
            label="Category"
          />
          
        <Styledbutton >Submit</Styledbutton>
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