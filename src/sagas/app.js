import {
    call,
    all,
    put,
    select,
    takeLatest,
    delay,
    fork
} from 'redux-saga/effects';
import { LOG_IN } from '../constants';
import {
} from '../api';

function* callLogin({ payload }) {
    try {


    } catch (e) {
        console.log('Error callLogin', e);

    }
}


export default [
    takeLatest(LOG_IN, callLogin)
]