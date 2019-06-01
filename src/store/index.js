import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import {
    persistReducer, persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';
import sagas from '../sagas';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
    
    ]
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    let store = createStore(
        persistedReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );

    let persistor = persistStore(store, null, () => {
        sagaMiddleware.run(sagas);
    })


    return {
        store,
        persistor,
        sagaMiddleware
    }
}