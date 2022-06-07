import { Field, reduxForm,Form} from 'redux-form'
import { InputLabel, Loginbutton, Styledinput } from './LoginpageStyling'
//import { Button } from './HomeStyling'
import { PasswordInput } from './LoginpageStyling'
import { Styledbutton } from 'Components/Inputs/button'


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
    
   
    <Loginbutton>Log In</Loginbutton>
    
    </Form>
    )
}
export default reduxForm({
    form: 'LoginForm',
  })(LoginFormComponent)