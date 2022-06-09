import  { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { Styledinput } from 'Components/Inputs/input'
import { Styledtext } from 'Components/Inputs/text'
import { RenderSelectInput } from 'Components/selectComponent/selectComponent'
import React from 'react'
import { Field ,Form,reduxForm,FieldArray} from 'redux-form'



const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


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
      <li>
        <Styledbutton type="button" onClick={() => fields.push({})}>
          Add Description
        </Styledbutton>
        {submitFailed && error && <span>{error}</span>}
      </li>
      {fields.map((member, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)}
          >Remove</button>
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
            type="text"
            component={renderField}
            label="Amount"
          />
        </li>
      ))}
    </ul>
)


const InvoiceForm = () => {
  return (      
   <>
   <Styledbutton>Back</Styledbutton>
   <Styledheader>Invoice Form</Styledheader>
  <Form>
  <Field
    name="invoiceDate"
    component={Date}
    type="text"
    placeholder="invoiceDate"
    label="Date"
/>
          <Styledtext>Purpose of Invoice</Styledtext>
  <Field
    name="purposeofInvoice"
    type="text"
    placeholder='Purpose of Invoice'
    component={Styledinput}
    />

<Styledtext>Invoice Number</Styledtext>
  <Field
    name="Invoice Number    "
    type="text"
    placeholder='Invoice Number'
    component={Styledinput}
    />

<Styledtext>Currency type</Styledtext>
  <Field
    name="currencyType"
    type="text"
    placeholder='Currency type'
    component={Styledinput}
    />
     <Field
    name="selectComponent"
    type="text"
    // placeholder=''
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
  