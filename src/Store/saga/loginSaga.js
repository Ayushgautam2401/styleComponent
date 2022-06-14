// import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
// import { useParams } from 'react-router-dom';
// import { call, put, takeLatest, select } from 'redux-saga/effects';
// import { CURRENT_USER_FETCH,LOGIN_FETCH, loginActions, currentUserActions } from 'Store/Action/auth';
// import { _userData } from 'Store/Reducer/auth';
// import { getToken } from 'Store/Selector';
// function* LoginUserFetch(action) {
//   const {email,password} = creds
//   const {payload} = action
//     // const { action:{email,password}} = payload;
//     try {
//       yield call(payload)
//         if (email === 'Ashishchoudhary41508@gmail.com' && password === 'Ashish@123') {
//         const user = {
//             email,
//             token :'12345'
//         }
//         localStorage.setItem('user',JSON.stringify(user))
//         yield put (loginActions.success(JSON.stringify(user)))
//         }
//         else{
//         localStorage.removeItem('user')
        
//         }
//     } catch (error) {
//       yield put(loginActions.failure(error.message))
//     }
//   }
  
// //   function* GetUserFetch() {
// //     try {
// //       const token = yield select(getToken)
// //       const user = yield call( token);
// //       yield put(currentUserActions.success(user.data))
// //     } catch (error) {
// //       yield put(currentUserActions.failure(error.message))
// //     }
// //   }
//   export function* watchLoginActions(){
//     yield takeLatest(LOGIN_FETCH,LoginUserFetch);
//     // yield takeLatest(CURRENT_USER_FETCH,GetUserFetch);

// }