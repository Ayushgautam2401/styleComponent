import { Styledbutton } from 'Components/Inputs/button'
import FormInput from 'Components/Inputs/formInputs'
import { Styledheader } from 'Components/Inputs/header'
import { renderInvoiceOrders } from 'Components/Inputs/fieldarray'
import { RenderSelectInput } from 'Components/selectComponent/selectComponent'
import React from 'react';
import { Field, Form, reduxForm, FieldArray } from 'redux-form'
import { FormContainer, FormHeaderContainer } from './invoicePDF/FormStyling'
import { required } from 'Util/validate';
import { Fragment } from 'react'
const current = new Date();
const invoiceForm = (props) => {
  console.log("aajaa",props)
  const { handleSubmit, handleFormSubmit, clientOptions } = props
  return (

    <Fragment>
      <FormContainer>
       
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormHeaderContainer>
          <Field
            name="invoiceDate"
            component={FormInput}
            type="text"
            placeholder="invoiceDate"
            label="Date"
          />
          <Field
            name="purposeofInvoice"
            type="text"
            placeholder='Purpose of Invoice'
            component={FormInput}
            validate={[required]}
            label="Purpose of Invoice"
          />
          </FormHeaderContainer>
          <FormHeaderContainer>
          <Field
            name="invoiceNumber"
            type="text"
            placeholder='Invoice Number'
            label="Invoice Number"
            component={FormInput} 
            validate={[required]}
            />

            <Field
            name="currencyType"
            type="text"
            placeholder='Currency type'
            component={FormInput}
            validate={[required]}
            label="Currency Type"
          /> </FormHeaderContainer>
          <Field
            name="clientFirm"
            component={RenderSelectInput}
            options= {clientOptions}
          />
          <FieldArray name="descriptions" component={renderInvoiceOrders} />
        <Styledbutton>submit</Styledbutton>
        </Form>
      </FormContainer>
      </Fragment>
  );
}

export default reduxForm({
  form: "invoiceForm",
  enableReinitialize: true,
})(invoiceForm);
