export const required = value => value ? undefined : 'Required'
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
  
 export const normalizePhone = value => {
    if (!value){
        return value
    }
 const onlyNums = value.replace(/[^\d]/g, '')
 if (onlyNums.length <= 3){
     return onlyNums
 }   
 if (onlyNums.length <= 7 ){
     return `${onlyNums.slice(0,3)}-${onlyNums.slice(3)}` 
     }
     return `${onlyNums.slice(0,3)}-${onlyNums.slice(3,6)}-${onlyNums.slice(6,10)}`
}




// export const validate = values => {
//   const errors = {}
  // if (!values.username) {
  //   errors.username = 'Required'
  // } else if (values.username.length > 15) {
  //   errors.username = 'Must be 15 characters or less'
  // }
  // if (!values.email || values.email.length === 0) {
  //   errors.email = 'Required'
  // }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }

  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }
 // return errors
// }



export const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning
  }
}) => (
  <div>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)