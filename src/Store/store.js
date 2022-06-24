import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxformReducer } from 'redux-form';
import createSagaMiddleware from '@redux-saga/core';
import AccountReducer from './reducer/accountReducer';
import InvoiceReducer from './reducer/invoiceReducer'
import saga from './saga/saga'
import AuthReducer from "./reducer/auth";
import userReducer from "./reducer/user";




const SagaMiddleware = createSagaMiddleware();
const Reducer = combineReducers({
    form:reduxformReducer,
    authReducer: AuthReducer,
    AccountReducer: AccountReducer,
    invoiceReducer: InvoiceReducer,
    UserReducer: userReducer

})
const Store = createStore(Reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(saga);
export default Store