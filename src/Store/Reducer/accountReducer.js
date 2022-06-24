import { forEach, map } from "lodash";
import {
  ACCOUNT_FAILURE,
  ACCOUNT_LIST_FAILURE,
  ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS,
  ACCOUNT_REQUEST,
  ACCOUNT_SUCCESS,
  ACCOUNT_UPDATE_FAILURE,
  ACCOUNT_UPDATE_REQUEST,
  ACCOUNT_UPDATE_SUCCESS,
} from "Store/Action/AccountActions";
import { makeid } from "Util/idGenrator";

const INITIAL_STATE = {
  list: ["BIZ_Account_1", "BIZ_Account_2"],
  raw: {
    BIZ_Account_1: {
      id: "BIZ_Account_1",
      name: "BIZTECNO",

      address: [ "PLOT J7 FCS BUILDING", "ABC Building"],
    phoneNumber:[ "9888824240", "2456789349"],
    
    },
    BIZ_Account_2: {
      id: "BIZ_Account_2",
      name: "BIZ",
      address:[ " J7 FCS BUILDING", "XYZ Building"],
      phoneNumber: "96971782782",
    },
  },
  Account: undefined,
  loading: false,
  error: undefined,
};

const AccountReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { data, message } = payload || {};
  switch (type) {
    case ACCOUNT_LIST_REQUEST:
      return { ...state, loading: true };
    case ACCOUNT_LIST_SUCCESS:
      const raw = {};
      forEach(data, (item) => {
        raw[data.id] = item;
      });
      return { ...state, loading: false, list: map(data, "id"), raw };
    case ACCOUNT_LIST_FAILURE:
      return { ...state, error: message, loading: false };

    case ACCOUNT_REQUEST:
      return { ...state, Account: undefined, loading: true, error: undefined };
    case ACCOUNT_SUCCESS:
      return { ...state, Account: data, loading: false };
    case ACCOUNT_FAILURE:
    case ACCOUNT_UPDATE_FAILURE:
      return { ...state, error: message, loading: false };

    case ACCOUNT_UPDATE_REQUEST:
      return { ...state, loading: true, error: undefined };
    case ACCOUNT_UPDATE_SUCCESS:
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
};

export default AccountReducer;
