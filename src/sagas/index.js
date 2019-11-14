import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as fromAction from '../actions';
import { getAllUsers } from '../services/apiService';

export function* handleUsersFetch() {
  const users = yield call(getAllUsers);
  yield put(fromAction.loadUsersSuccess(users));
}

export function* watchUsersFetch() {
  yield takeLatest(fromAction.ACTIONS.FETCH_USERS, handleUsersFetch);
}

export default function* rootSaga() {
  yield all([watchUsersFetch()]);
}
