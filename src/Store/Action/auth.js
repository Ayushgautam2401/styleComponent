export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILIURE = "LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";

export const CURRENT_USER_FETCH = "CURRENT_USER_FETCH";
export const CURRENT_USER_SUCCESS = "CURRENT_USER_SUCCESS";
export const CURRENT_USER_FAILIURE = "CURRENT_USER_FAILURE";



export const loginActions = {
    request: (payload) => ({
        type: LOGIN_FETCH,
        payload
    }),
    success: (payload) => ({
        type: LOGIN_SUCCESS,
        payload
    }),
    failure: (error) => ({
        type: LOGIN_FAILIURE,
        payload: {error}
    }),
    logout: ()=> {
        localStorage.removeItem("token")
        return{
      type:USER_LOGOUT,
        }
    }
}


export const currentUserActions = {
    request: () => ({
        type: CURRENT_USER_FETCH
    }),
    success: (user) => ({
        type: CURRENT_USER_SUCCESS,
        payload: {user}
    }),
    failure: (error) => ({
        type: CURRENT_USER_FAILIURE,
        payload: {error}
    }),
}