import { takeLatest, call, put } from 'redux-saga/effects';
import * as fromAction from '../actions';
import { getUserDetails } from '../services/apiService';

export function* handleUserDetailsFetch(action) {
  try {
    yield put(fromAction.loadDetails());
    const data = yield call(getUserDetails, action.id);
    yield put(fromAction.loadDetailsSuccess(data));
  } catch (error) {
    yield put(fromAction.loadDetailsFail(error.toString()));
  }
}

export default function* watchUserDetailsFetch() {
  yield takeLatest(fromAction.ACTIONS.FETCH_DETAILS, handleUserDetailsFetch);
}
