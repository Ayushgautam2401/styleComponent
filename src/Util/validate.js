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



export const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning}
}) => (
  <div>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)