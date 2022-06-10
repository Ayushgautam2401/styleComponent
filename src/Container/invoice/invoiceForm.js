import { Styledbutton } from 'Components/Inputs/button'
import FormInput from 'Components/Inputs/formInputs'
import { Styledheader } from 'Components/Inputs/header'
import { Styledinput } from 'Components/Inputs/input'
import { Styledtext } from 'Components/Inputs/text'
import { RenderSelectInput } from 'Components/selectComponent/selectComponent'
import React from 'react'
import { Field, Form, reduxForm, FieldArray } from 'redux-form'
import { required } from 'Util/validate'



const current = new Date();
const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Styledtext>{label}</Styledtext>
    <div>
      <Styledinput {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
const renderInvoiceOrders = ({ fields, meta: { error, submitFailed } }) => (

  <ul>
        
    {fields.map((member, index) => (
      <li key={index}>
        <Styledbutton
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >Remove</Styledbutton>
        <Styledheader>Description and Amount{index + 1}</Styledheader>
        <Field
          name={`${member}.detail`}
          type="text"
          component={renderField}
          label="Description"
        />
        <Field
          name={`${member}.type`}
          type="text"
          component={renderField}
          label="Type"
        />
        <Field
          name={`${member}.amount`}
          type="number"
          pattern='[0-9]*'
          inputMode='numeric'
          component={renderField}
          label="Amount"
        />
      </li>
    ))}
  </ul>
)


const InvoiceForm = (props) => {
  const { handleSubmit } = props
  return (
    <>
      <Styledbutton>Back</Styledbutton>
      <Styledheader>Invoice Form</Styledheader>
      <Form onSubmit={handleSubmit((formValues)=>{
      console.log(formValues)
      })} >
        <Styledtext>Date</Styledtext>
        <Field
          name="invoiceDate"
          component={FormInput}
          type="text"
          placeholder="invoiceDate"
          label="Date"
         
        />
        <Styledtext>Purpose of Invoice</Styledtext>
        <Field
          name="purposeofInvoice"
          type="text"
          placeholder='Purpose of Invoice'
          component={FormInput}
          validate={[ required]}
        />


        <Styledtext>Invoice Number</Styledtext>
        <Field
          name="invoiceNumber"
          type="text"
          placeholder='Invoice Number'
          component={FormInput}
          validate={[ required]}
        />

        <Styledtext>Currency type</Styledtext>
        <Field
          name="currencyType"
          type="text"
          placeholder='Currency type'
          component={FormInput}
          validate={[ required]}
        />
        <Field
          name="selectComponent"
          type="text"
          component={RenderSelectInput}
        />


        <FieldArray name="descriptions" component={renderInvoiceOrders} />

        <Styledbutton>Submit</Styledbutton>


      </Form>
    </>
  )
}

export default reduxForm({
  form: "InvoiceForm",

})(InvoiceForm);
