import { Field, reduxForm, Form } from 'redux-form'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {RenderField, validate} from 'Util/validate'

import FormInput from 'Components/Inputs/formInputs'
import { InputLabel, Loginbutton } from './LoginpageStyling';
import { loginActions } from 'Store/action/auth';
import { required } from 'Util/validate';
import { getAuthState } from 'Store/selector';


const LoginFormComponent = (props) => {
  const { handleSubmit } = props
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(getAuthState);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);


  const handleFormSubmit = (formdata) => {
    dispatch(loginActions.request(formdata))
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Field
        name="email"
        component={FormInput}
        validate={[required]}
        placeholder="Email"
        label={<InputLabel>Email</InputLabel>}
      />
      <Field
        name="password"
        component={FormInput}
        type="password"
        label={<InputLabel>Password</InputLabel>}
        placeholder='Password'
        validate={[required]}
      />
      <Loginbutton>Log In</Loginbutton>
    </Form>
  )
}
export default reduxForm({
  form: 'LoginForm',
  
})(LoginFormComponent)