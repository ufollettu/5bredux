import {CardBean} from 'beans/index';
import * as React from 'react';

// import * as cards from '../../../assets/data/cardsData.json';
import Card from '../Card';

import {Wrap} from './styles';
type Props = {
  cards: CardBean[];
};
type State = {};

export default class CardsManager extends React.Component<Props, State> {
  public readonly state: State = {};

  renderCardComponent(cards: CardBean[]): JSX.Element[] {
    return cards.map((card: CardBean): JSX.Element => <Card key={card.id} {...card} />);
  }

  render(): JSX.Element {
    const {cards} = this.props;
    return <Wrap>{this.renderCardComponent(cards)}</Wrap>;
  }
}
