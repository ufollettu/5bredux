import {CardsInit, cardsInit} from 'app/store/Cards';
import {GlobalState} from 'app/store/rootReducer';
import {CardBean} from 'beans/index';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import Card from '../Card';

import {Wrap} from './styles';

type Props = {
  cardsInit: () => CardsInit;
  cards: null | CardBean[];
};

type State = {};

class CardsManager extends React.Component<Props, State> {
  public readonly state: State = {};

  componentDidMount() {
    const {cardsInit} = this.props;
    cardsInit();
  }

  renderCardComponent(cards: CardBean[]): JSX.Element[] {
    return cards.map((card: CardBean): JSX.Element => <Card key={card.id} {...card} />);
  }

  render(): JSX.Element {
    const {cards} = this.props;
    console.log(cards);
    if (!cards) return <div />;
    return <Wrap>{this.renderCardComponent(cards)}</Wrap>;
  }
}

function mapStateToProps(state: GlobalState) {
  return {
    cards: state.cards.data
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    cardsInit: () => dispatch(cardsInit())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsManager);
