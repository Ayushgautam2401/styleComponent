import { Field, reduxForm,Form} from 'redux-form'
import { Input } from './HomeStyling'
import { Button } from './HomeStyling'

const LoginFormComponent = (props) => {
    return(
        <Form >
        <Field
        name="name"
        component={Input}
        type="text"
        placeholder="Full Name"
      />
      <Field
      name="email"
      component={Input}
      type="text"
      placeholder="email"
    />
    <Button>
      Login
    </Button>
    </Form>
    )
}
export default reduxForm({
    form: 'LoginForm',
  })(LoginFormComponent)