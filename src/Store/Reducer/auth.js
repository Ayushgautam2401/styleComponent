import { LOGIN_FETCH,LOGIN_SUCCESS,LOGIN_FAILIURE, CURRENT_USER_FETCH,CURRENT_USER_SUCCESS,CURRENT_USER_FAILIURE} from "../Action/auth";
//   export const _userData = [
//      {
//          email:'Ashishchoudhary',
//          password:'Ashish@123'
//      }
//  ]
//  localStorage.setItem('userData',
//  JSON.stringify(_userData));
//  let _retriveUserData=
//  JSON.parse(localStorage.getItem('userData'));
//  console.log( _retriveUserData)

const INITIAL_STATE = {
  user: undefined,
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  fetching: false,
  error: undefined
}
const AuthReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_FETCH:
      return { ...INITIAL_STATE, fetching: true};
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, isAuthenticated: true, ...payload }
    case LOGIN_FAILIURE:
      return { ...state, fetching: false, isAuthenticated: false, ...payload }

    case CURRENT_USER_FETCH:
      return { ...state, fetching: true, error: undefined}
    case CURRENT_USER_SUCCESS:
      return { ...state, fetching: false, ...payload}
    case CURRENT_USER_FAILIURE: 
      return { ...state, fetching: false, token: undefined, isAuthenticated: false, ...payload}
    default: return state;
  }
}
export default AuthReducer;