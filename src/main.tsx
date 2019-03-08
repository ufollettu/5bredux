import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {configureStore} from './app/store';
import CatcherInTheRye from './errorCatcher';
import {GlobalStyle} from './global-styles';

// STEP: prepare store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <GlobalStyle />
      <CatcherInTheRye />
    </div>
  </Provider>,
  document.getElementById('root')
);
