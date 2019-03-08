import {combineReducers} from 'redux';

import userReducer, {UserState} from './User';

export interface GlobalState {
  user: UserState;
}

export default combineReducers<GlobalState>({
  user: userReducer,
});
