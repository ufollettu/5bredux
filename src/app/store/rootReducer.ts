import {combineReducers} from 'redux';

import initReducer, {InitState} from './Init';
// import cardsReducer, {CardsState} from './Cards';

export interface GlobalState {
  init: InitState;
  // cards: CardsState;
}

export default combineReducers<GlobalState>({
  init: initReducer,
  // cards: cardsReducer
});
