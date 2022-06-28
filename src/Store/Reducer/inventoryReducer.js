import { forEach, map } from "lodash";
<<<<<<< HEAD
import {
  INVENTORY_LIST_REQUEST,
  INVENTORY_LIST_SUCCESS,
} from "Store/Action/inventoryActions";
import { INVENTORY_LIST_FAILIURE } from "Store/Action/inventoryActions";
import { INVENTORY_ADD_REQUEST } from "Store/Action/inventoryActions";
import { INVENTORY_ADD_SUCCESS } from "Store/Action/inventoryActions";
import { INVENTORY_ADD_FAILIURE } from "Store/Action/inventoryActions";
=======
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
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408

const INITIAL_STATE = {
    list : ["Inventory_1"],
    raw:{
        Inventory_1 : {
<<<<<<< HEAD
    id:"A",
=======
    id:"Inventory_1",
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
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
<<<<<<< HEAD
         default:
            return state;           

    }
}

export default InventoryReducer;
=======

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
>>>>>>> 7ad891b5d226f740deff353f6d312f8cf4988408
