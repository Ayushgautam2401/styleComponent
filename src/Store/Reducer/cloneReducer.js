import { INVOICE_CLONE_SUCCESS,INVOICE_CLONE_REQUEST,INVOICE_CLONE_FAILURE } from "Store/Action/invoiceActions";
import { makeid } from "Util/idGenrator";

 const INITIAL_STATE ={
    list: undefined,
    raw: {},        
    clone: undefined,
    loading: false,
    error: undefined
}
const cloneReducer = (state = INITIAL_STATE , action) => {
    const { type, payload } = action;
    const { data, message } = payload || {};
    switch (type) {
case INVOICE_CLONE_REQUEST:
    return{...state,loading: true, error:undefined};
    case INVOICE_CLONE_SUCCESS:  
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
        return {...state ,loading: false , error: undefined}
         default: return state; 
    }
} 
export default cloneReducer