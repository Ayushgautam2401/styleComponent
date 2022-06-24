export const CATEGORY_LIST_REQUEST = "CATEGORY_LIST_REQUEST";
export const CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS";
export const CATEGORY_LIST_FAILIURE = "CATEGORY_LIST_FAILIURE";

export const CATEGORY_ADD_REQUEST = "CATEGORY_ADD_REQUEST";
export const CATEGORY_ADD_SUCCESS = "CATEGORY_ADD_SUCCESS";
export const CATEGORY_ADD_FAILIURE = "CATEGORY_ADD_FAILIURE";

const genericFunc = (type) => (payload) => ({
    type,
    payload
  })


  export const CategoryListActions = {
    request: genericFunc(CATEGORY_LIST_REQUEST),
    success: genericFunc(CATEGORY_LIST_SUCCESS),
    failure: genericFunc(CATEGORY_LIST_FAILIURE),
  }
  
  export const CategoryActions = {
    request: genericFunc(CATEGORY_ADD_REQUEST),
    success: genericFunc(CATEGORY_ADD_SUCCESS),
    failure: genericFunc(CATEGORY_ADD_FAILIURE),
  }