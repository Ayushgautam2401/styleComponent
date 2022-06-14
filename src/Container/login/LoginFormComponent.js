import { Field, reduxForm, Form } from 'redux-form'
import { useEffect } from 'react'
import { InputLabel, Loginbutton, Styledinput } from './LoginpageStyling'
import { PasswordInput } from './LoginpageStyling'
import { useDispatch,useSelector } from 'react-redux'
import { loginActions } from 'Store/Action/auth'
import { Styledbutton } from 'Components/Inputs/button'
import FormInput from 'Components/Inputs/formInputs'
import { required } from 'Util/validate'
import { getAuthState } from 'Store/Selector'
import { useHistory } from 'react-router-dom'
const LoginFormComponent = (props) => {
  // const { handleSubmit } = props
  const history = useHistory();
  const dispatch = useDispatch();
  const {token } = useSelector(getAuthState);
  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);
  const handleFormSubmit = ()=>{
    dispatch(loginActions.request())
  }

  return (
    <Form onSubmit={props.handleSubmit(handleFormSubmit)}>
      {/* <Form onSubmit={handleSubmit((formValues)=>{ 
       console.log(formValues)
       })} > */}
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
        // validate={[ required]}
        type="password"
      />


      <Loginbutton>Log In</Loginbutton>

    </Form>
  )
}
export default reduxForm({
  form: 'LoginForm',
})(LoginFormComponent)