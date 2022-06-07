// import { fetchAPI } from 'Api/api';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { clientActions, clientListActions, clientUpdateActions, CLIENT_LIST_REQUEST, CLIENT_REQUEST, CLIENT_UPDATE_REQUEST } from 'Store/Action/clientActions';
import { getClientState } from 'Store/Selector';

function* fetchClientListOperation() {
  try {
    // console.log("here");
    // const client = yield call(fetchAPI,"get");
    const clientState = yield select(getClientState);
    yield put(clientListActions.success({
      data: clientState.list // todo: pass list
    }))
  } catch (error) {
    yield put(clientListActions.failure({message: error.message}))
  }
}

function* fetchClientOperation(action) {
  const { type, payload: {id} } = action;
  const {raw} = yield select(getClientState);
  if(raw[id]) {
    yield put(clientActions.success({data: raw[id]}));
  } else {
    yield put(clientActions.failure({message: "No Client Found", data: undefined}));
  }
}

//for update
function* updateClientOperation(action) {
  const { type, payload } = action;
  yield put(clientUpdateActions.success({data: payload}));
}


export function* watchClientActions() {
  yield takeLatest(CLIENT_LIST_REQUEST, fetchClientListOperation);
  yield takeLatest(CLIENT_REQUEST, fetchClientOperation);
  yield takeLatest(CLIENT_UPDATE_REQUEST, updateClientOperation);
}
