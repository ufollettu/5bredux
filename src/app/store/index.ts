import {applyMiddleware, createStore, Store} from 'redux';

import createSagaMiddleware from 'redux-saga';

import {createLogger} from 'redux-logger';

import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer, {GlobalState} from './rootReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    return applyMiddleware(sagaMiddleware, loggerMiddleware);
  }
  return applyMiddleware(sagaMiddleware);
};

export function configureStore(initialState?: GlobalState): Store<GlobalState> {
  const store = createStore(
    rootReducer as any,
    initialState as any,
    composeWithDevTools(getMiddleware()) as any
  ) as Store<GlobalState>;

  for (const saga of sagas) {
    sagaMiddleware.run(saga);
  }

  return store;
}
