import { forEach, map } from "lodash";
import {
    INVOICE_LIST_REQUEST, INVOICE_LIST_SUCCESS, INVOICE_LIST_FAILURE,
    INVOICE_REQUEST, INVOICE_FAILURE, INVOICE_SUCCESS,

    INVOICE_UPDATE_REQUEST, INVOICE_UPDATE_FAILURE, INVOICE_UPDATE_SUCCESS, INVOICE_CLONE_REQUEST, INVOICE_CLONE_SUCCESS
} from 'Store/Action/invoiceActions'
import { makeid } from "Util/idGenrator";

const INITIAL_STATE = {
    list: undefined,
    raw: {},        
    invoice: undefined,
    clone:undefined,
    loading: false,
    error: undefined
}
const invoiceReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    const { data, message } = payload || {};
    switch (type) {
        case INVOICE_LIST_REQUEST:
            return { ...state, loading: true };
        case INVOICE_LIST_SUCCESS:
            const raw = {};
            forEach(data, (item) => {
                raw[data.id] = item
            })
            return { ...state, loading: false, list: map(data, "id"), raw };
        case INVOICE_LIST_FAILURE:
            return { ...state, error: message, loading: false };
        case INVOICE_REQUEST:
            return { ...state, invoice: undefined, loading: true, error: undefined };
        case INVOICE_SUCCESS:
            return { ...state, invoice: data, loading: false };
        case INVOICE_FAILURE:
        case INVOICE_UPDATE_FAILURE:
            return { ...state, error: message, loading: false };
        case INVOICE_UPDATE_REQUEST:
            return { ...state, loading: true, error: undefined }
        case INVOICE_UPDATE_SUCCESS:
            if (!data.id) {
                const id = makeid(2);
                if (!state.list) {
                    state.list = [];
                }
                state.list.push(id);
                state.raw[id] = { ...data, id };
            } else {
                state.raw[data.id] = data;
            }
            return { ...state, loading: false, error: undefined }
        default: return state;  
    }
}
export default invoiceReducer;