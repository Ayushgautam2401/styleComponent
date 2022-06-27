import { put,select,takeLatest } from "@redux-saga/core/effects";
import { InventoryListActions, InventoryActions, INVENTORY_LIST_REQUEST, INVENTORY_ADD_REQUEST,INVENTORY_UPDATE_REQUEST, InventoryUpdateActions } from "Store/Action/inventoryActions";
import { getInventoryState } from "Store/Selector";

function* fetchInventoryListOperation() {
    try {
     
      const InventoryState = yield select(getInventoryState);
      yield put(InventoryListActions.success({
        data: InventoryState.list
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
  function* updateInventoryOperation(action) {
    const { type, payload } = action;
    yield put(InventoryUpdateActions.success({data: payload}));
  }


  export function* watchInventoryActions() {
    yield takeLatest(INVENTORY_LIST_REQUEST, fetchInventoryListOperation);
    yield takeLatest(INVENTORY_ADD_REQUEST, fetchInventoryOperation);
    yield takeLatest(INVENTORY_UPDATE_REQUEST, updateInventoryOperation);
  }
  