import { all } from 'redux-saga/effects';
import watchUsersFetch from './usersSaga';
import watchUserDetailsFetch from './detailsSaga';

export default function* rootSaga() {
  yield all([watchUsersFetch(), watchUserDetailsFetch()]);
}
