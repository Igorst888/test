import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as fromAction from '../actions';
import { getAllsers } from '../services/apiService';

export function* handleUsersFetch() {
  const users = yield call(getAllsers);
  yield put(fromAction.loadUsersSuccess(users));
}

export function* watchUsersFetch() {
  yield takeLatest(fromAction.ACTIONS.FETCH_USERS, handleUsersFetch);
}

export default function* rootSaga() {
  yield all([watchUsersFetch()]);
}
