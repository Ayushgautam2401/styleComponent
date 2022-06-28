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
    list : ["Inventory_1"],
    raw:{
        Inventory_1 : {
    id:"Inventory_1",
    Category: "LAPTOP",
    Name:"T470",
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

            case INVENTORY_UPDATE_FAILURE:
                return { ...state, error: message, loading: false };
          
              case INVENTORY_UPDATE_REQUEST:
                return { ...state, loading: true, error: undefined };
              case INVENTORY_UPDATE_SUCCESS:
                if (!data.id) {
                  const id = makeid(3);
                  if (!state.list) {
                    state.list = [];
                  }
                  state.list.push(id);
                  state.raw[id] = { ...data, id };
                } else {
                  state.raw[data.id] = data;
                }
                return { ...state, loading: false, error: undefined };

         default:
            return state;           
    }
}
export default InventoryReducer;
