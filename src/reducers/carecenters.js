import {
} from '../constants'
import { SET_REDUCER_CARE_CENTERS } from '../constants/carecenters';

const INITIAL_STATE = {
    nearCareCenters: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_REDUCER_CARE_CENTERS:
            return {
                ...state,
                [payload.key]: payload.value
            }
        default:
            return state;
    }
}
