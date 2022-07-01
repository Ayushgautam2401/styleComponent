import { Styledbutton } from "Components/Inputs/button";
import { FormContainer } from "Container/invoice/invoicePDF/FormStyling";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Form, Field, reduxForm} from "redux-form";
import { getInventoryState } from "Store/Selector";
import  FormInput from "Components/Inputs/formInputs";

let DetailForm = (props) => {
 const   history = useHistory();
 const {id} = useParams()
const { list,raw } = useSelector(getInventoryState)
const {handleSubmit} = props;
const handleFormSubmit =() => {history.push("/inventory")};

const renderInventoryCategory = (InventoryID, index) => {
    const {id, category} = raw[InventoryID] || {};

    return(
       <h2 key={id}>{category}</h2>


    
    )
}
    return(
  <Fragment>
    
      <FormContainer>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
              {/* <Field
              name="category"
              placeholder="category"
              label="category"
              key={id}
              value={category}
              ></Field> */}

              <Field
              name="Name"
              placeholder="name"
              label="Name"
              component={FormInput}></Field>
              
              <Field
              name="Quantity"
              placeholder="quantity"
              label="Quantity"
              component={FormInput}></Field>
              <Styledbutton onSubmit={handleSubmit(handleFormSubmit)}>Submit</Styledbutton>
          </Form>
      </FormContainer>
  </Fragment>
    );
};

DetailForm = reduxForm({
    form:"DetailForm",
    })(DetailForm);

export default DetailForm;