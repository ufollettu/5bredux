import {call, put, takeEvery} from 'redux-saga/effects';

import {get} from '../../../utils/request';

enum InitActionEnum {
  REQUEST = 'app/INIT/REQUEST',
  SUCCESS = 'app/INIT/SUCCESS',
  FAIL = 'app/INIT/FAIL'
}

export interface InitInit {
  type: InitActionEnum.REQUEST;
}
export interface InitSuccess {
  type: InitActionEnum.SUCCESS;
  data: object;
}
export interface InitFail {
  type: InitActionEnum.FAIL;
  err: object;
}

type InitAction = InitInit | InitSuccess | InitFail;

export function initInit(): InitInit {
  return {
    type: InitActionEnum.REQUEST
  };
}
export function initSuccess(data: object): InitSuccess {
  return {
    type: InitActionEnum.SUCCESS,
    data
  };
}
export function initFail(err: object): InitFail {
  return {
    type: InitActionEnum.FAIL,
    err
  };
}

function* initRequest(action: InitAction) {
  const requestURL = '';
  const requestOpt = {
    // 'X-Auth-Token': action.token,
  };

  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(initSuccess(data));
  } catch (err) {
    yield put(initFail(err));
  }
}

export function* sagas() {
  yield takeEvery(InitActionEnum.REQUEST, initRequest);
}

export interface InitState {
  loading: boolean;
  loaded: null | boolean;
  data: null | object;
}

const initialState: InitState = {
  loading: false,
  loaded: null,
  data: null
};

export default (state: InitState = initialState, action: InitAction): InitState => {
  switch (action.type) {
    case InitActionEnum.REQUEST:
      return {
        ...state,
        loading: true
      };
    case InitActionEnum.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: {
          ...action.data
        }
      };
    case InitActionEnum.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
};
