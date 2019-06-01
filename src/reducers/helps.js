import { SET_HELPS_REDUCER } from '../constants';

const INITIAL_STATE = {
    helps: []
};

export default (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case SET_HELPS_REDUCER:
            return {
                ...state,
                [payload.key]: payload.value
            }
        default:
            return state;
    }
}