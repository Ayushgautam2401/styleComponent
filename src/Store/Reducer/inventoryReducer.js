import { forEach, map } from "lodash";
import {
  INVENTORY_LIST_REQUEST,
  INVENTORY_LIST_SUCCESS,
} from "Store/Action/inventoryActions";
import { INVENTORY_LIST_FAILIURE } from "Store/Action/inventoryActions";
import { INVENTORY_ADD_REQUEST } from "Store/Action/inventoryActions";
import { INVENTORY_ADD_SUCCESS } from "Store/Action/inventoryActions";
import { INVENTORY_ADD_FAILIURE } from "Store/Action/inventoryActions";

const INITIAL_STATE = {
    list : ["Inventory_1"],
    raw:{
        Inventory_1 : {
    id:"A",
    name: "LAPTOP",
    quantity: "16"
    }
},
    inventory: undefined,
    loading: false,
    error: undefined,

};

const InventoryReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    const {data, message} = payload || {};
    
    switch (type) {
        case INVENTORY_LIST_REQUEST:
            return{...state, loading: true};
        case INVENTORY_LIST_SUCCESS:
            const raw = {};
            forEach(data, (item) => {
                raw[data.id] = item;
            });
            return{...state, loading:false, list: map(data, "id"), raw };
        case INVENTORY_LIST_FAILIURE:
            return {...state, error: message, loading: false }; 
        
        case INVENTORY_ADD_REQUEST:
     return {...state, inventory: undefined, loading: true, error:undefined};
        case INVENTORY_ADD_SUCCESS:
            return {...state, inventory: data, error:undefined };
        case INVENTORY_ADD_FAILIURE:
            return {...state, error: message, loading:false};
         default:
            return state;           

    }
}

export default InventoryReducer;