import {CardBean} from 'beans';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import CardsManager from '../../components/CardsManager';
import TextInput from '../../components/TextInput';
import {homeInit} from '../../store/Init';
import {GlobalState} from '../../store/rootReducer';

import {Wrap} from './styles';

type Props = {
  cards: CardBean[];
  handleHomeInit: any;
};

type State = {};

class Home extends React.Component<Props, State> {
  public readonly state: State = {};

  componentDidMount() {
    this.props.handleHomeInit();
    // API calls goes here
  }

  render() {
    const cards = this.props.cards;
    return (
      <Wrap>
        <h1>Text input example</h1>
        <TextInput />
        <h1>Card example</h1>
        <CardsManager cards={cards} />
      </Wrap>
    );
  }
}

function mapStateToProps(state: GlobalState) {
  return {cards: state.init.data};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleHomeInit: () => dispatch(homeInit())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
