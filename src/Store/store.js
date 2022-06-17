import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxformReducer } from 'redux-form';
import createSagaMiddleware from '@redux-saga/core';
import AccountReducer from './Reducer/accountReducer';
import {titleReducer}  from "./Reducer/reducer";
import InvoiceReducer from './Reducer/invoiceReducer'
import saga from './saga/saga'
import AuthReducer from "./Reducer/auth";
import userReducer from "./Reducer/user";
const SagaMiddleware = createSagaMiddleware();
const Reducer = combineReducers({
    form:reduxformReducer,
    authReducer: AuthReducer,
    AccountReducer: AccountReducer,
    invoiceReducer: InvoiceReducer,
    TitleReducer: titleReducer,
    UserReducer: userReducer

})
const Store = createStore(Reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(saga);
export default Store