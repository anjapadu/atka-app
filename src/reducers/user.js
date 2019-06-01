import {
} from '../constants'
import { SET_USER_REDUCER } from '../constants/user';

const INITIAL_STATE = {
    userId: null,
    username: '',

    position: null

}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_USER_REDUCER:
            return {
                ...state,
                [payload.key]: payload.value
            }
        default:
            return state;
    }
}
