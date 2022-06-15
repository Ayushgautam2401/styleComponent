import { Styledinput } from 'Components/Inputs/input'
import { Styledtext } from 'Components/Inputs/text'
import { Field } from 'redux-form'
import { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { FormHeaderContainer } from 'Container/invoice/invoicePDF/FormStyling'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <Styledtext>{label}</Styledtext>
      <div>
        <Styledinput {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
export const renderInvoiceOrders = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
  
      <ul>
        {submitFailed && error && <span>{error}</span>}
      </ul>
      {fields.map((member, index) => (
        <ul key={index}>
          <Styledbutton
            type="button"
            title="Remove Member"
            onClick={() => fields.remove(index)}
          >Remove</Styledbutton>
          <Styledheader>Description and Amount {index + 1}</Styledheader>
          <FormHeaderContainer>
            
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
          </FormHeaderContainer>
          <Field
            name={`${member}.amount`}
            type="number"
            pattern='[0-9]*'
            inputMode='numeric'
            component={renderField}
            label="Amount"
          />
        </ul>
        
      ))}
      <ul>
      <Styledbutton type="button" onClick={() => fields.push({})}>
          Add Description
        </Styledbutton>
        {submitFailed && error && <span>{error}</span>}
      </ul>
    </ul>
  )