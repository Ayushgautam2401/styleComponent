import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxformReducer } from 'redux-form';
import createSagaMiddleware from '@redux-saga/core';
import ClientReducer from './Reducer/clientReducer';
import {titleReducer}  from "./Reducer/reducer";
import InvoiceReducer from './Reducer/invoiceReducer'
import saga from './saga/saga'
import AuthReducer from "./Reducer/auth";
const SagaMiddleware = createSagaMiddleware();
const Reducer = combineReducers({
    form:reduxformReducer,
    authReducer: AuthReducer,
    clientReducer: ClientReducer,
    invoiceReducer: InvoiceReducer,
    TitleReducer: titleReducer,
})
const Store = createStore(Reducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(saga);
export default Store