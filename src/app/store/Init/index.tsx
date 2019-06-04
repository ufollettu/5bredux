import {call, put, takeEvery} from 'redux-saga/effects';

import {get} from '../../../utils/request';
import { CardBean } from 'beans';

// riferimento corso redux https://www.html.it/pag/65175/definire-le-azioni-che-modificano-lo-stato/
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
  data: CardBean[];
}
export interface InitFail {
  type: InitActionEnum.FAIL;
  err: object;
}

type InitAction = InitInit | InitSuccess | InitFail;

// qui si esportano le azioni con delle funzioni apposite, ma le azioni non sono definite in un file apposito come da guida redux
// ad esempio la seguente azione potrebbe essere definita in questo modo:
//
// const REQUEST_ACTION = "app/INIT/REQUEST";
// export function initRequestAction() {
//   return {
//     type: REQUEST_ACTION,
//     payload: {}
//   };
// }
// l'uso degli Enum di TS evita questo modo di scrivere e contemporaneamente ti protegge da errori

export function homeInit(): InitInit {
  console.log('sono qui')
  return {
    type: InitActionEnum.REQUEST
  };
}

export function initInit(): InitInit {
  return {
    type: InitActionEnum.REQUEST
  };
}

export function initSuccess(data: CardBean[]): InitSuccess {
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

// saga Worker
// per ogni richiesta creare un nuovo initRequest (es.: initRequest2, etc) e inserirlo nel generatore sagas
function* initCardsRequest(action: InitAction) {
  const requestURL = 'cards';
  const requestOpt = {
    // 'X-Auth-Token': action.token,
  };

  try {
    const data: CardBean[] = yield call(get, requestURL, requestOpt);
    // qui va inserita la logica (di mapping, etc) per lavorare il dato proveniente da API verso l'applicazione
    // al fine di aggiornare lo stato. è utile creare metodi appositi per fare questo
    yield put(initSuccess(data));
  } catch (err) {
    yield put(initFail(err));
  }
}

// saga Watcher
// questa funzione esportata è richiamata come 'import {sagas as initSagas} from './Init';'
// nel file sagas.ts e poi utilizzato nell'index dello store
export function* sagas() {
  yield takeEvery(InitActionEnum.REQUEST, initCardsRequest);
  // yield takeEvery(InitActionEnum.REQUEST, initRequest2);
}

export interface InitState {
  loading: boolean;
  loaded: null | boolean;
  data: CardBean[];
}

const initialState: InitState = {
  loading: false,
  loaded: null,
  data: []
};

// questa è la funzione reducer esportata, che è richiamata come 'import initReducer from './Init';'
// nel file rootReducer.ts e poi combinato con eventuali altri reducers
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
        data: action.data
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
