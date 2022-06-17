export const INVOICE_LIST_REQUEST = "INVOICE_LIST_REQUEST";
export const INVOICE_LIST_FAILURE = "INVOICE_LIST_FAILURE";
export const INVOICE_LIST_SUCCESS = "INVOICE_LIST_SUCCESS";

export const INVOICE_REQUEST = "INVOICE_REQUEST";
export const INVOICE_FAILURE = "INVOICE_FAILURE";
export const INVOICE_SUCCESS = "INVOICE_SUCCESS";

export const INVOICE_UPDATE_REQUEST = "INVOICE_UPDATE_REQUEST";
export const INVOICE_UPDATE_FAILURE = "INVOICE_UPDATE_FAILURE";
export const INVOICE_UPDATE_SUCCESS = "INVOICE_UPDATE_SUCCESS";

// export const INVOICE_CLONE_REQUEST = "INVOICE_CLONE_REQUEST";
// export const INVOICE_CLONE_SUCCESS = "INVOICE_CLONE_SUCCESS";

const genericFunc = (type) => (payload) => ({
  type,
  payload
})


export const invoiceListActions = {
  request: genericFunc(INVOICE_LIST_REQUEST),
  success: genericFunc(INVOICE_LIST_SUCCESS),
  failure: genericFunc(INVOICE_LIST_FAILURE),
}

export const invoiceActions = {
  request: genericFunc(INVOICE_REQUEST),
  success: genericFunc(INVOICE_SUCCESS),
  failure: genericFunc(INVOICE_FAILURE),
}

export const invoiceUpdateActions = {
  request: genericFunc(INVOICE_UPDATE_REQUEST),
  success: genericFunc(INVOICE_UPDATE_SUCCESS),
  failure: genericFunc(INVOICE_UPDATE_FAILURE),
}
