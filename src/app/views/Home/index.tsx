import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import CardsManager from '../../components/CardsManager';
import TextInput from '../../components/TextInput';
import {GlobalState} from '../../store/rootReducer';

import {Wrap} from './styles';

type Props = {};

type State = {};

class Home extends React.Component<Props, State> {
  public readonly state: State = {};

  componentDidMount() {}

  render() {
    return (
      <Wrap>
        <h1>Text input example</h1>
        <TextInput />
        <h1>Card example</h1>
        <CardsManager />
      </Wrap>
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
)(Home);
