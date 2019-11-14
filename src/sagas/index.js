import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as fromAction from '../actions';
import { getAllUsers, getUserDetails } from '../services/apiService';

export function* handleUsersFetch() {
  try {
    yield put(fromAction.loadUsers());
    const users = yield call(getAllUsers);
    yield put(fromAction.loadUsersSuccess(users));
  } catch (error) {
    yield put(fromAction.loadUsersFail(error.toString()));
  }
}

export function* handleUserDetailsFetch(action) {
  try {
    yield put(fromAction.loadDetails());
    const data = yield call(getUserDetails, action.id);
    yield put(fromAction.loadDetailsSuccess(data));
  } catch (error) {
    yield put(fromAction.loadDetailsFail(error.toString()));
  }
}

export function* watchUsersFetch() {
  yield takeLatest(fromAction.ACTIONS.FETCH_USERS, handleUsersFetch);
}

export function* watchUserDetailsFetch() {
  yield takeLatest(fromAction.ACTIONS.FETCH_DETAILS, handleUserDetailsFetch);
}

export default function* rootSaga() {
  yield all([watchUsersFetch(), watchUserDetailsFetch()]);
}
