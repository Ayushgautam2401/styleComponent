import { all, fork } from 'redux-saga/effects';
import { watchClientActions } from "./clientSaga";
import { watchInvoiceActions } from './invoiceSaga';
function* mysaga(){
  yield all([
    fork(watchClientActions),
    fork(watchInvoiceActions)
  ])
}
export  default mysaga;