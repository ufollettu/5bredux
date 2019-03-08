import {applyMiddleware, createStore, Store} from 'redux';

import createSagaMiddleware from 'redux-saga';

import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer, {GlobalState} from './rootReducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: GlobalState): Store<GlobalState> {
  const middlewares = [
    // loggerMiddleware,
    sagaMiddleware
  ];

  const store = createStore(
    rootReducer as any,
    initialState as any,
    composeWithDevTools(applyMiddleware(...middlewares)) as any
  ) as Store<GlobalState>;

  for (const saga of sagas) {
    sagaMiddleware.run(saga);
  }

  return store;
}
