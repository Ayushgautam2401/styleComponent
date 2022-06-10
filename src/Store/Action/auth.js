export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const CURRENT_USER_FETCH = "CURRENT_USER_FETCH";
export const CURRENT_USER_SUCCESS = "CURRENT_USER_SUCCESS";
export const CURRENT_USER_FAILURE = "CURRENT_USER_FAILURE";



export const loginActions = {
    request: (payload) => ({
        type: LOGIN_FETCH,
        payload
    }),
    success: (token) => ({
        type: LOGIN_SUCCESS,
        // payload: {token}
    }),
    failure: (error) => ({
        type: LOGIN_FAILURE,
        payload: {error}
    }),
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
        type: CURRENT_USER_FAILURE,
        payload: {error}
    }),
}