export const CLIENT_LIST_REQUEST = "CLIENT_LIST_REQUEST";
export const CLIENT_LIST_FAILURE = "CLIENT_LIST_FAILURE";
export const CLIENT_LIST_SUCCESS = "CLIENT_LIST_SUCCESS";

export const CLIENT_REQUEST = "CLIENT_REQUEST";
export const CLIENT_FAILURE = "CLIENT_FAILURE";
export const CLIENT_SUCCESS = "CLIENT_SUCCESS";

export const CLIENT_UPDATE_REQUEST = "CLIENT_UPDATE_REQUEST";
export const CLIENT_UPDATE_FAILURE = "CLIENT_UPDATE_FAILURE";
export const CLIENT_UPDATE_SUCCESS = "CLIENT_UPDATE_SUCCESS";

const genericFunc = (type) => (payload) => ({
  type,
  payload
})


export const clientListActions = {
  request: genericFunc(CLIENT_LIST_REQUEST),
  success: genericFunc(CLIENT_LIST_SUCCESS),
  failure: genericFunc(CLIENT_LIST_FAILURE),
}

export const clientActions = {
  request: genericFunc(CLIENT_REQUEST),
  success: genericFunc(CLIENT_SUCCESS),
  failure: genericFunc(CLIENT_FAILURE),
}

export const clientUpdateActions = {
  request: genericFunc(CLIENT_UPDATE_REQUEST),
  success: genericFunc(CLIENT_UPDATE_SUCCESS),
  failure: genericFunc(CLIENT_UPDATE_FAILURE),
}