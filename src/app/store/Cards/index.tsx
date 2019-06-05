import {CardBean} from 'beans';
import {call, put, takeEvery} from 'redux-saga/effects';

import {get} from '../../../utils/request';

enum CardsActionEnum {
  REQUEST = 'app/CARDS/REQUEST',
  SUCCESS = 'app/CARDS/SUCCESS',
  FAIL = 'app/CARDS/FAIL'
}

export interface CardsInit {
  type: CardsActionEnum.REQUEST;
}

export interface CardsSuccess {
  type: CardsActionEnum.SUCCESS;
  cards: CardBean[];
}

export interface CardsFail {
  type: CardsActionEnum.FAIL;
  err: object;
}

type CardsAction = CardsInit | CardsSuccess | CardsFail;

export function cardsInit(): CardsInit {
  return {
    type: CardsActionEnum.REQUEST
  };
}
export function cardsSuccess(cards: CardBean[]): CardsSuccess {
  return {
    type: CardsActionEnum.SUCCESS,
    cards
  };
}
export function cardsFail(err: object): CardsFail {
  return {
    type: CardsActionEnum.FAIL,
    err
  };
}

function* cardsRequest(action: CardsAction) {
  const requestURL = '162-zanichelli-06/cards';
  const requestOpt = {
    // 'X-Auth-Token': action.token,
  };

  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(cardsSuccess(data));
  } catch (err) {
    yield put(cardsFail(err));
  }
}

export function* sagas() {
  yield takeEvery(CardsActionEnum.REQUEST, cardsRequest);
}

export interface CardsState {
  loading: boolean;
  loaded: null | boolean;
  data: null | CardBean[];
}

const initialState: CardsState = {
  loading: false,
  loaded: null,
  data: null
};

export default (state: CardsState = initialState, action: CardsAction): CardsState => {
  switch (action.type) {
    case CardsActionEnum.REQUEST:
      return {
        ...state,
        loading: true
      };
    case CardsActionEnum.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: {
          ...action.cards
        }
      };
    case CardsActionEnum.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
};
