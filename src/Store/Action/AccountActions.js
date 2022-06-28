export const ACCOUNT_LIST_REQUEST = "ACCOUNT_LIST_REQUEST";
export const ACCOUNT_LIST_FAILURE = "ACCOUNT_LIST_FAILURE";
export const ACCOUNT_LIST_SUCCESS = "ACCOUNT_LIST_SUCCESS";

export const ACCOUNT_REQUEST = "ACCOUNT_REQUEST";
export const ACCOUNT_FAILURE = "ACCOUNT_FAILURE";
export const ACCOUNT_SUCCESS = "ACCOUNT_SUCCESS";

export const ACCOUNT_UPDATE_REQUEST = "ACCOUNT_UPDATE_REQUEST";
export const ACCOUNT_UPDATE_FAILURE = "ACCOUNT_UPDATE_FAILURE";
export const ACCOUNT_UPDATE_SUCCESS = "ACCOUNT_UPDATE_SUCCESS";

const genericFunc = (type) => (payload) => ({
  type,
  payload
})


export const AccountListActions = {
  request: genericFunc(ACCOUNT_LIST_REQUEST),
  success: genericFunc(ACCOUNT_LIST_SUCCESS),
  failure: genericFunc(ACCOUNT_LIST_FAILURE),
}

export const AccountActions = {
  request: genericFunc(ACCOUNT_REQUEST),
  success: genericFunc(ACCOUNT_SUCCESS),
  failure: genericFunc(ACCOUNT_FAILURE),
}

export const AccountUpdateActions = {
  request: genericFunc(ACCOUNT_UPDATE_REQUEST),
  success: genericFunc(ACCOUNT_UPDATE_SUCCESS),
  failure: genericFunc(ACCOUNT_UPDATE_FAILURE),
}