import { all, fork } from 'redux-saga/effects';
import { watchAccountActions } from "./accountSaga";
import { watchInventoryActions } from './inventorySaga';
import { watchInvoiceActions } from './invoiceSaga';
import { watchLoginActions } from './loginSaga';
function* mysaga(){
  yield all([
    fork(watchLoginActions),
    fork(watchAccountActions),
    fork(watchInvoiceActions),
    fork(watchInventoryActions),
  ])
}
export  default mysaga;