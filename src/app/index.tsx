import {Action, Location} from 'history';
import {createHashHistory} from 'history';
import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {Dispatch} from 'redux';

import Home from './views/Home';

import {GlobalState} from './store/rootReducer';
const history = createHashHistory();

type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  public readonly state: State = {};

  componentDidMount() {
    // STEP: Checking url changes
    history.listen(
      (l: Location, a: Action): void => {
        console.groupCollapsed('HISTORY');
        console.log('location: ', l);
        console.log('action: ', a);
        console.groupEnd();
      }
    );
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

function mapStateToProps(state: GlobalState) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
