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
<<<<<<< HEAD
    fork(watchInventoryActions),
=======
    fork(watchInventoryActions)

>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
  ])
}
export  default mysaga;