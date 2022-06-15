import { forEach, map } from "lodash";
import {
  CLIENT_FAILURE, CLIENT_LIST_FAILURE,
  CLIENT_LIST_REQUEST, CLIENT_LIST_SUCCESS,
  CLIENT_REQUEST, CLIENT_SUCCESS, CLIENT_UPDATE_FAILURE,
  CLIENT_UPDATE_REQUEST, CLIENT_UPDATE_SUCCESS
} from "Store/Action/clientActions";
import { makeid } from "Util/idGenrator";

const INITIAL_STATE = {
  list: ["BIZ_CLIENT_1", "BIZ_CLIENT_2"],
  raw: {
    "BIZ_CLIENT_1" : {
      "id": "BIZ_CLIENT_1",
      "name": "BIZTECNO",

      "address": "PLOT J7 FCS BUILDINGg",
      "phoneNumber": "9888824240"
    },
    "BIZ_CLIENT_2" : {
      "id": "BIZ_CLIENT_2",
      "name": "BIZ",
      "address": " J7 FCS BUILDING",
      "phoneNumber": "96971782782"

    }
    
  },
  client: undefined,
  loading: false,
  error: undefined
}

const clientReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { data, message } = payload || {};
  switch (type) {
    case CLIENT_LIST_REQUEST:
      return { ...state, loading: true };
    case CLIENT_LIST_SUCCESS:
      const raw = {};
      forEach(data, (item) => {
        raw[data.id] = item
      })
      return { ...state, loading: false, list: map(data, "id"), raw };
    case CLIENT_LIST_FAILURE:
      return { ...state, error: message, loading: false };

    case CLIENT_REQUEST:
      return { ...state, client: undefined, loading: true, error: undefined }
    case CLIENT_SUCCESS:
      return { ...state, client: data, loading: false }
    case CLIENT_FAILURE:
    case CLIENT_UPDATE_FAILURE:
      return { ...state, error: message, loading: false }

    case CLIENT_UPDATE_REQUEST:
      return { ...state, loading: true, error: undefined }
    case CLIENT_UPDATE_SUCCESS:
      if(!data.id) {
        const id = makeid(3);
        if(!state.list) {
          state.list = [];
        }
        state.list.push(id);
        state.raw[id] = {...data, id};
      } else {
        state.raw[data.id] = data;
      }
      return { ...state, loading: false, error: undefined }

    default: return state;
  }
}

export default clientReducer;

