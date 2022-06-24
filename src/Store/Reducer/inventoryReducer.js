import { forEach, map } from "lodash";
import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "Store/action/inventoryActions";
import { CATEGORY_LIST_FAILIURE } from "Store/action/inventoryActions";
import { CATEGORY_ADD_REQUEST } from "Store/action/inventoryActions";
import { CATEGORY_ADD_SUCCESS } from "Store/action/inventoryActions";
import { CATEGORY_ADD_FAILIURE } from "Store/action/inventoryActions";

const INITIAL_STATE = {
    list : ["Category_1"],
    raw:{
        Category_1 : {
    id:"A",
    name: "LAPTOP",
    }
},
    category: undefined,
    loading: false,
    error: undefined,

};

const InventoryReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    const {data, message} = payload || {};
    
    switch (type) {
        case CATEGORY_LIST_REQUEST:
            return{...state, loading: true};
        case CATEGORY_LIST_SUCCESS:
            const raw = {};
            forEach(data, (item) => {
                raw[data.id] = item;
            });
            return{...state, loading:false, list: map(data, "id"), raw };
        case CATEGORY_LIST_FAILIURE:
            return {...state, error: message, loading: false }; 
        
        case CATEGORY_ADD_REQUEST:
            return {...state, Category: undefined, loading: true, error:undefined};
        case CATEGORY_ADD_SUCCESS:
            return {...state, Category: data, error:undefined };
        case CATEGORY_ADD_FAILIURE:
            return {...state, error: message, loading:false};
         default:
            return state;           

    }
}

export default InventoryReducer;