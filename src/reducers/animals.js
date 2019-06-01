import { SET_ANIMAL_REDUCER } from '../constants';

const INITIAL_STATE = {
    animals: [],
    selectedAnimal: {
        nombre: '',
        fechaNac: '',
        raza: '',
        color: '',
        tamanio: '',
        estadoSalud: '',
        descripción: '',
        estado: -1
    }
};

export default (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case SET_ANIMAL_REDUCER:
            return {
                ...state,
                [payload.key]: payload.value
            }
        default:
            return state;
    }
}