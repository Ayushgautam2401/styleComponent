import { call, put, select, takeLatest } from 'redux-saga/effects';
import { invoiceActions, invoiceListActions, invoiceUpdateActions, invoiceCloneActions, INVOICE_LIST_REQUEST, INVOICE_REQUEST, INVOICE_UPDATE_REQUEST, INVOICE_CLONE_REQUEST } from 'Store/Action/invoiceActions';
import { getInvoiceState } from "Store/Selector";



function* fetchInvoiceListOperation(){
try{
    const invoiceState = yield select(getInvoiceState);
    yield put(invoiceListActions.success({
        data: invoiceState.list
      }))
}catch(error){
    yield put(invoiceListActions.failure({message: error.message}))
}
}


function* fetchInvoiceOperation(action){
    console.log(action);
    const { type, payload: {id} } = action;
    const {raw} = yield select(getInvoiceState);
    console.log("saga",id);
    if(raw[id]) {
        yield put(invoiceActions.success({data: raw[id]}));
      } else {
        yield put(invoiceActions.failure({message: "No Invoice Found", data: undefined}));
      }

}

function* updateInvoiceOperation (action){
    const { type, payload } = action;
    yield put(invoiceUpdateActions.success({data: payload}));

}
// function* cloneInvoiceOperation (action){
//     const { type, payload } = action;
//     yield put(invoiceCloneActions.success({data: payload}));
// }
export function* watchInvoiceActions(){
    yield takeLatest(INVOICE_LIST_REQUEST,fetchInvoiceListOperation );
    yield takeLatest(INVOICE_REQUEST, fetchInvoiceOperation);
    yield takeLatest(INVOICE_UPDATE_REQUEST,updateInvoiceOperation );
   // yield takeLatest(INVOICE_CLONE_REQUEST,cloneInvoiceOperation );
}