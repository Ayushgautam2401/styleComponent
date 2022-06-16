import { LOGIN_SUCCESS, LOGIN_FAILIURE, CURRENT_USER_FETCH,CURRENT_USER_SUCCESS,CURRENT_USER_FAILIURE } from "../Action/auth"
const INITIAL_STATE = {
    isAuthenticated: !!localStorage.getItem("token"),
    fetching: false,
    token: localStorage.getItem("token"),
}

const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case CURRENT_USER_FETCH:
      return { ...state, fetching: true, error: undefined}
    case CURRENT_USER_SUCCESS:
      return { ...state, fetching: false, ...payload}
    case CURRENT_USER_FAILIURE: 
      return { ...state, fetching: false, token: undefined, isAuthenticated: false, ...payload}
        default: return state;
    }
}
export default userReducer;