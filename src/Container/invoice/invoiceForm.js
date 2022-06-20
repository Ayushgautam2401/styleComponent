import { Styledbutton } from 'Components/Inputs/button'
import FormInput from 'Components/Inputs/formInputs'
import { renderInvoiceOrders } from 'Components/Inputs/fieldarray'
import { RenderSelectInput } from 'Components/selectComponent/selectComponent'
import React,{ Fragment } from 'react';
import { Field, Form, reduxForm, FieldArray } from 'redux-form'
import { FormContainer, FormHeaderContainer } from './invoicePDF/FormStyling'
import { required } from 'Util/validate';
const invoiceForm = (props) => {

  const { handleSubmit, handleFormSubmit, clientOptions,accountAddress } = props
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
            name="AccountFirm"
            component={RenderSelectInput}
            options= {AccountOptions}
          />
          <Field
          name= "address"
          component={RenderSelectInput}
          options= {accountAddress}
          />
          <FieldArray name="descriptions" component={renderInvoiceOrders} />
          <Styledbutton>Submit</Styledbutton>
        </Form>
      </FormContainer>
      </Fragment>
  );
}

export default reduxForm({
  form: "invoiceForm",
  enableReinitialize: true,
})(invoiceForm);