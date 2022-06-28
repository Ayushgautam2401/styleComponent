import { put,select,takeLatest } from "@redux-saga/core/effects";
<<<<<<< HEAD
import { InventoryListActions, InventoryActions, INVENTORY_LIST_REQUEST, INVENTORY_ADD_REQUEST } from "Store/Action/inventoryActions";
=======
import { InventoryListActions, InventoryActions, INVENTORY_LIST_REQUEST, INVENTORY_ADD_REQUEST,INVENTORY_UPDATE_REQUEST, InventoryUpdateActions } from "Store/Action/inventoryActions";
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
import { getInventoryState } from "Store/Selector";

function* fetchInventoryListOperation() {
    try {
     
      const InventoryState = yield select(getInventoryState);
      yield put(InventoryListActions.success({
<<<<<<< HEAD
        data: InventoryState.list // todo: pass list
=======
        data: InventoryState.list
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
      }))
    } catch (error) {
      yield put(InventoryListActions.failure({message: error.message}))
    }
  }

  function* fetchInventoryOperation(action) {
    const { type, payload: {id} } = action;
    const {raw} = yield select(getInventoryState);
    if(raw[id]) {
      yield put(InventoryActions.success({data: raw[id]}));
    } else {
      yield put(InventoryActions.failure({message: "No Category Found", data: undefined}));
    }
  }
<<<<<<< HEAD
=======
  function* updateInventoryOperation(action) {
    const { type, payload } = action;
    yield put(InventoryUpdateActions.success({data: payload}));
  }

>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408

  export function* watchInventoryActions() {
    yield takeLatest(INVENTORY_LIST_REQUEST, fetchInventoryListOperation);
    yield takeLatest(INVENTORY_ADD_REQUEST, fetchInventoryOperation);
<<<<<<< HEAD
=======
    yield takeLatest(INVENTORY_UPDATE_REQUEST, updateInventoryOperation);
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
  }
  