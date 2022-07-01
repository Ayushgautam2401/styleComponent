import { forEach, map } from "lodash";
import { makeid } from "Util/idGenrator";
import {
  INVENTORY_LIST_REQUEST,
  INVENTORY_LIST_SUCCESS,
  INVENTORY_LIST_FAILIURE,
  INVENTORY_ADD_REQUEST,
  INVENTORY_ADD_SUCCESS,
  INVENTORY_ADD_FAILIURE,
  INVENTORY_UPDATE_REQUEST,
  INVENTORY_UPDATE_SUCCESS,
  INVENTORY_UPDATE_FAILURE
} from "Store/Action/inventoryActions";

const INITIAL_STATE = {
    list : ["LAPTOP"],
    category: "LAPTOP",
    inventory: undefined,
    loading: false,
    error: undefined,

};

const InventoryReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    const {category, message} = payload || {};
    
    switch (type) {
        case INVENTORY_LIST_REQUEST:
            return{...state, loading: true};
        case INVENTORY_LIST_SUCCESS:
            const raw = {};
            forEach(data, (item) => {
                [category] = item;
            });
            return{...state, loading:false, list: map(category), raw };
        case INVENTORY_LIST_FAILIURE:
            return {...state, error: message, loading: false }; 
        
        case INVENTORY_ADD_REQUEST:
     return {...state, inventory: undefined, loading: true, error:undefined};
        case INVENTORY_ADD_SUCCESS:
            return {...state, inventory: data, error:undefined };
        case INVENTORY_ADD_FAILIURE:
            return {...state, error: message, loading:false};

            case INVENTORY_UPDATE_FAILURE:
                return { ...state, error: message, loading: false };
          
              case INVENTORY_UPDATE_REQUEST:
                return { ...state, loading: true, error: undefined };
              case INVENTORY_UPDATE_SUCCESS:
                if (!category) {
                  const category = state.category;
                  if (!state.list) {
                    state.list = [];
                  }
                  state.list.push(category);
                  state.category = { ...category };
                } else {
                  state.category = category;
                }
                return { ...state, loading: false, error: undefined };

         default:
            return state;           
    }
}
export default InventoryReducer;
