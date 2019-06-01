import {
    LOG_IN,
} from '../constants';

const INITIAL_STATE = {
    isLogged: false,



};

export default (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {

        case LOG_IN:

            return {
                ...state,
                isLogged: true,

            }


        default:
            return state;
    }
}
