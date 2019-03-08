import {createSelector} from 'reselect';

import {GlobalState} from '../rootReducer';

import {UserState} from './index';

const userDomain = () => (state: GlobalState) => state.user;

export type UserData = {};

export const getUserData = () =>
  createSelector(
    userDomain(),
    (substate: UserState): UserData => {
      return {};
    }
  );
