export const INVENTORY_LIST_REQUEST = "INVENTORY_LIST_REQUEST";
export const INVENTORY_LIST_SUCCESS = "INVENTORY_LIST_SUCCESS";
export const INVENTORY_LIST_FAILIURE = "INVENTORY_LIST_FAILIURE";

export const INVENTORY_ADD_REQUEST = "INVENTORY_ADD_REQUEST";
export const INVENTORY_ADD_SUCCESS = "INVENTORY_ADD_SUCCESS";
export const INVENTORY_ADD_FAILIURE = "INVENTORY_ADD_FAILIURE";

<<<<<<< HEAD
=======
export const INVENTORY_UPDATE_REQUEST = "INVENTORY_UPDATE_REQUEST";
export const INVENTORY_UPDATE_SUCCESS =  "INVENTORY_UPDATE_SUCCESS";
export const INVENTORY_UPDATE_FAILURE = "INVENTORY_UPDATE_FAILURE";

>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
const genericFunc = (type) => (payload) => ({
    type,
    payload
  })


  export const InventoryListActions = {
    request: genericFunc(INVENTORY_LIST_REQUEST),
    success: genericFunc(INVENTORY_LIST_SUCCESS),
    failure: genericFunc(INVENTORY_LIST_FAILIURE),
  }
  
  export const InventoryActions = {
    request: genericFunc(INVENTORY_ADD_REQUEST),
    success: genericFunc(INVENTORY_ADD_SUCCESS),
    failure: genericFunc(INVENTORY_ADD_FAILIURE),
<<<<<<< HEAD
=======
  }
  export const InventoryUpdateActions = {
    request: genericFunc(INVENTORY_UPDATE_REQUEST),
    success: genericFunc(INVENTORY_UPDATE_SUCCESS),
    failure: genericFunc(INVENTORY_UPDATE_FAILURE),
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
  }