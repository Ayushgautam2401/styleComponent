import { Field, reduxForm,Form} from 'redux-form'
import { InputLabel, Styledinput } from './HomeStyling'
//import { Button } from './HomeStyling'
import { PasswordInput } from './HomeStyling'



const LoginFormComponent = (props) => {
    return(
      
        <Form >
         
         
          <InputLabel>Username</InputLabel>
        <Field
        name="name"
        component={Styledinput}
        type="text"
        placeholder="User ID"
      />
     
     
      <InputLabel>Password</InputLabel>
      <Field
      name="password"
      component={PasswordInput}
      type="password"
      placeholder="Password"
    />
    
   
    <button>Log In</button>
    
    </Form>
    )
}
export default reduxForm({
    form: 'LoginForm',
  })(LoginFormComponent)