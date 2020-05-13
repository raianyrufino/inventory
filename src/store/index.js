import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/RootSaga';
import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

/* Como funciona o fluxo do redux-saga? 
 -> O usuário clica em algum component, ele gera uma action no action create,
 então será chamado uma action especial do redux-saga e ele vai tomar uma decisão do que deve
 ser chamado e qual action deve ser disparada. E quando ele disparar a action, o reducer responsável
 pela action vai atualizar o estado da store.
*/
