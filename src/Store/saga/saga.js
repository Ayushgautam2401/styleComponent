import { all, fork } from 'redux-saga/effects';
import { watchAccountActions } from "./accountSaga";
import { watchInvoiceActions } from './invoiceSaga';
import { watchLoginActions } from './loginSaga';
function* mysaga(){
  yield all([
    fork(watchLoginActions),
    fork(watchAccountActions),
    fork(watchInvoiceActions)
  ])
}
export  default mysaga;