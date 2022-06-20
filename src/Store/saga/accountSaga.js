// import { fetchAPI } from 'Api/api';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AccountActions, AccountListActions, AccountUpdateActions, ACCOUNT_LIST_REQUEST, ACCOUNT_REQUEST, ACCOUNT_UPDATE_REQUEST } from 'Store/action/AccountActions';
import { getAccountState } from 'Store/selector';

function* fetchAccountListOperation() {
  try {
    // console.log("here");
    // const Account = yield call(fetchAPI,"get");
    const AccountState = yield select(getAccountState);
    yield put(AccountListActions.success({
      data: AccountState.list // todo: pass list
    }))
  } catch (error) {
    yield put(AccountListActions.failure({message: error.message}))
  }
}

function* fetchAccountOperation(action) {
  const { type, payload: {id} } = action;
  const {raw} = yield select(getAccountState);
  if(raw[id]) {
    yield put(AccountActions.success({data: raw[id]}));
  } else {
    yield put(AccountActions.failure({message: "No Account Found", data: undefined}));
  }
}

//for update
function* updateAccountOperation(action) {
  const { type, payload } = action;
  yield put(AccountUpdateActions.success({data: payload}));
}


export function* watchAccountActions() {
  yield takeLatest(ACCOUNT_LIST_REQUEST, fetchAccountListOperation);
  yield takeLatest(ACCOUNT_REQUEST, fetchAccountOperation);
  yield takeLatest(ACCOUNT_UPDATE_REQUEST, updateAccountOperation);
}
