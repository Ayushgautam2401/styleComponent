import { Field, reduxForm,Form} from 'redux-form'
import { Input } from './HomeStyling'
import { Button } from './HomeStyling'
import { loginActions } from 'Store/Action/auth'
import { useDispatch } from 'react-redux'

const LoginFormComponent = (props) => {
 const dispatch = useDispatch();
  const handleFormSubmit = (data)=>{
    dispatch(loginActions.request(data))
  }
    return(
        <Form onSubmit={props.handleSubmit(handleFormSubmit)}>
        <Field
        name="email"
        component={Input}
        type="text"
        placeholder="Full Name"
      />
      <Field
      name="password"
      component={Input}
      type="text"
      placeholder="email"
    />
    <Button onClick={props.submit}>
      Login
    </Button>
    </Form>
    )
}
export default reduxForm({
    form: 'LoginForm',
  })(LoginFormComponent)