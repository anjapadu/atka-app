import { all } from 'redux-saga/effects';
import appSaga from './app';

export default function* rootSaga() {
    yield all([
        /* ...itemSaga */
        ...appSaga
    ])
}
