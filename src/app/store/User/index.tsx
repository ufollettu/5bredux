import {call, put, takeEvery} from 'redux-saga/effects';

import {get} from '../../../utils/request';

export enum UserActionEnum {
  REQUEST = 'app/USER/REQUEST',
  SUCCESS = 'app/USER/SUCCESS',
  FAIL = 'app/USER/FAIL'
}

export interface UserInit {
  type: UserActionEnum.REQUEST;
  token: string;
}
export interface UserSuccess {
  type: UserActionEnum.SUCCESS;
  data: object;
}
export interface UserFail {
  type: UserActionEnum.FAIL;
  err: object;
}

type UserAction = UserInit | UserSuccess | UserFail;

export function userInit(token: string): UserInit {
  return {
    type: UserActionEnum.REQUEST,
    token
  };
}
export function userSuccess(data: object): UserSuccess {
  return {
    type: UserActionEnum.SUCCESS,
    data
  };
}
export function userFail(err: object): UserFail {
  return {
    type: UserActionEnum.FAIL,
    err
  };
}

function* userRequest(action: UserInit) {
  const requestURL = '';
  const requestOpt = {
    headers: {
      'X-Auth-Token': action.token
    }
  };

  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(userSuccess(data));
  } catch (err) {
    yield put(userFail(err));
  }
}

export function* sagas() {
  yield takeEvery(UserActionEnum.REQUEST, userRequest);
}

export interface UserState {
  loading: boolean;
  loaded: null | boolean;
}

const initialState: UserState = {
  loading: false,
  loaded: null
};

export default (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionEnum.REQUEST:
      return {
        ...state,
        loading: true
      };
    case UserActionEnum.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case UserActionEnum.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
};
