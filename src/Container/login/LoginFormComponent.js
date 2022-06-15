import { Field, reduxForm, Form } from 'redux-form'
import { InputLabel, Loginbutton, Styledinput } from './LoginpageStyling'
import { PasswordInput } from './LoginpageStyling'
import { Styledbutton } from 'Components/Inputs/button'
import FormInput from 'Components/Inputs/formInputs'
import { required } from 'Util/validate'


const LoginFormComponent = (props) => {
  const { handleSubmit } = props
  return (

    <Form onSubmit={handleSubmit((formValues)=>{
      console.log(formValues)
      })} >
      <InputLabel>Name</InputLabel>
      <Field
        name="name"
        component={FormInput}
        validate={[ required]}
        placeholder="User ID"
      />


      <InputLabel>Password</InputLabel>
      <Field
        name="password"
        component={PasswordInput}
        type="password"
      />
      <Loginbutton>Log In</Loginbutton>
    </Form>
  )
}
export default reduxForm({
  form: 'LoginForm',
})(LoginFormComponent)