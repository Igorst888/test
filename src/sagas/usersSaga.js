import { takeLatest, call, put } from 'redux-saga/effects';
import * as fromAction from '../actions';
import { getAllUsers } from '../services/apiService';

export function* handleUsersFetch() {
  try {
    yield put(fromAction.loadUsers());
    const users = yield call(getAllUsers);
    yield put(fromAction.loadUsersSuccess(users));
  } catch (error) {
    yield put(fromAction.loadUsersFail(error.toString()));
  }
}

export default function* watchUsersFetch() {
  yield takeLatest(fromAction.ACTIONS.FETCH_USERS, handleUsersFetch);
}

