import {combineReducers} from 'redux';

import cardsReducer, {CardsState} from './Cards';

export interface GlobalState {
  cards: CardsState;
}

export default combineReducers<GlobalState>({
  cards: cardsReducer
});
