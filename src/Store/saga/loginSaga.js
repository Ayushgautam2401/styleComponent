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