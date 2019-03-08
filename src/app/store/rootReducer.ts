import {combineReducers} from 'redux';

import initReducer, {InitState} from './Init';

export interface GlobalState {
  init: InitState;
}

export default combineReducers<GlobalState>({init: initReducer});
