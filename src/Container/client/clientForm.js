import  { Styledbutton } from 'Components/Inputs/button'
import { Styledheader } from 'Components/Inputs/header'
import { Styledinput } from 'Components/Inputs/input'
import { Styledtext } from 'Components/Inputs/text'
import React from 'react'
import { Field ,Form,reduxForm} from 'redux-form'

const ClientForm = () => {
  return (      
   <>
   <Styledbutton>Back</Styledbutton>
   <Styledheader>Client Form</Styledheader>
  <Form>
          <Styledtext>Name</Styledtext>
  <Field
    name="name"
    type="text"
    placeholder='Name'
    component={Styledinput}
    />

<Styledtext>Email</Styledtext>
  <Field
    name="email"
    type="text"
    placeholder='Email'
    component={Styledinput}
    />

<Styledtext>Phone Number</Styledtext>
  <Field
    name="name"
    type="text"
    placeholder='Phone Number'
    component={Styledinput}
    />

<Styledtext>Address</Styledtext>
  <Field
    name="address"
    type="text"
    placeholder='Address'
    component={Styledinput}
    />

    <Styledbutton>Submit</Styledbutton>


  </Form>
  </>
  )
}

export default reduxForm({
    form: "ClientForm",
  
  })(ClientForm);
  