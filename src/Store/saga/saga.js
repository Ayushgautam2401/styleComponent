import { all, fork } from 'redux-saga/effects';
import { watchClientActions } from "./clientSaga";
import { watchInvoiceActions } from './invoiceSaga';
import { watchLoginActions } from './loginSaga';
function* mysaga(){
  yield all([
    fork(watchLoginActions),
    fork(watchClientActions),
    fork(watchInvoiceActions),
  ])
}
export  default mysaga;