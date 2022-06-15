import { Field, reduxForm, Form } from 'redux-form'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


import FormInput from 'Components/Inputs/formInputs'
import { Loginbutton } from './LoginpageStyling';
import { loginActions } from 'Store/Action/auth';
import { required } from 'Util/validate';
import { getAuthState } from 'Store/Selector';


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
        label="Email"
      />
      <Field
        name="password"
        component={FormInput}
        type="password"
        label="Password"
        placeholder='Password'
      validate={[ required]}
      />
      <Loginbutton>Log In</Loginbutton>
    </Form>
  )
}
export default reduxForm({
  form: 'LoginForm',
})(LoginFormComponent)