<<<<<<< HEAD
// import { call, put, takeLatest, select } from 'redux-saga/effects';
// import { CURRENT_USER_FETCH,LOGIN_FETCH, loginActions, currentUserActions } from 'Store/Action/auth';
// import { _userData } from 'Store/Reducer/auth';
// import { getToken } from 'Store/Selector';

//  const loginUserAction = (user) => {
//     return {
//       type: types.LOGIN_USER,
//       user
//     }
//   };

//   export default function* watchUserAuthentication() {

//     yield takeLatest(types.LOGIN_USER, loginSaga);
//   }
//   export function* loginSaga(payload) {
//     try {
//       const response = yield call(loginUserService, payload);
//       yield [
//         put({ type: types.LOGIN_SUCCESS, response })
//       ];
//     } catch(error) {
//       yield put({ type: types.LOGIN_FAILIURE, error })
//     }
//   }


// // function* LoginUserFetch(action) {
// //     const { payload } = action;
// //     try {
// //     //   const response = yield call(fetchAPI, "/auth/signin", "post", undefined, payload);
// //     // const response = yield call (payload)
// //       localStorage.setItem('userData', JSON.stringify(_userData));
// //     //   localStorage.setItem("userData", `${response.data.tokenType} ${response.data.accessToken}`)
// //     //   yield put(loginActions.success(`${response.data.tokenType} ${response.data.accessToken}`))
// //     yield put (loginActions.success(JSON.stringify(_userData)))
// //     } catch (error) {
// //       yield put(loginActions.failure(error.message))
// //     }
// //   }
  
// //   function* GetUserFetch() {
// //     try {
// //       const token = yield select(getToken)
// //       const user = yield call( token);
// //       yield put(currentUserActions.success(user.data))
// //     } catch (error) {
// //       yield put(currentUserActions.failure(error.message))
// //     }
// //   }
// //   export function* watchLoginActions(){
// //     yield takeLatest(LOGIN_FETCH,LoginUserFetch);
// //     yield takeLatest(CURRENT_USER_FETCH,GetUserFetch);

// // }
=======
import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
import { useParams } from 'react-router-dom';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { CURRENT_USER_FETCH, LOGIN_FETCH, loginActions, currentUserActions } from 'Store/Action/auth';
import { _userData } from 'Store/Reducer/auth';
import { getToken } from 'Store/Selector';
function* LoginUserFetch(action) {
  const { payload } = action;
  const { email, password } = payload;
  try {
    console.log(payload);
    if (email === '123' && password === '123') {
      const response = {
        token: "1234567890"
      }
      localStorage.setItem('token', response.token);
      yield put(loginActions.success(response));
    }
    else {
      yield put(loginActions.failure("INVALID CREDENTIALS"))
    }
  } catch (error) {
    yield put(loginActions.failure(error.message))
  }
}

function* GetUserFetch() {
  try {
    const token = yield select(getToken);
    //call
    if(token === "1234567890") {
      yield put(currentUserActions.success({ name: "teyetg"}))
    } else {
      localStorage.removeItem("token");
      yield put(currentUserActions.failure("Invalid user"))
    }
  } catch (error) {
    localStorage.removeItem("token");
    yield put(currentUserActions.failure(error.message))
  }
}
export function* watchLoginActions() {
  yield takeLatest(LOGIN_FETCH, LoginUserFetch);
  yield takeLatest(CURRENT_USER_FETCH, GetUserFetch);

}
>>>>>>> ff31bcfebbcb940cf51e6260b1c15a4bca19a855
