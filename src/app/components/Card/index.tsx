import {CardBean} from 'beans/index';
import * as React from 'react';

import bookImg from '../../../assets/images/png/zanichelli-book-gray@8x.png';

import {Wrap} from './styles';

type Props = CardBean & {};
type State = {
  isOpen: boolean;
};

export default class Card extends React.Component<Props, State> {
  public readonly state: State = {
    isOpen: false
  };

  private constructor(props: Props) {
    super(props);
    this.handleCardOpen = this.handleCardOpen.bind(this);
  }

  renderStringArray(items: string[]): JSX.Element[] {
    return items.map((item: string, index: number) => (
      <span key={item}>
        {item}
        {index !== items.length - 1 ? `, \u00A0` : `.`}
      </span>
    ));
  }

  handleCardOpen(): void {
    const {isOpen} = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render(): JSX.Element {
    const {titolo, img, tags, autori, anno} = this.props;
    const {isOpen} = this.state;

    return (
      <Wrap isOpen={isOpen}>
        <header>
          <h2>{titolo}</h2>
          <span>
            <img src={bookImg} />
          </span>
        </header>
        <img alt={titolo} src={img} />
        <footer>
          <button onClick={this.handleCardOpen}>Risorse</button>
          <h2>{titolo}</h2>
          <div className="tags">{this.renderStringArray(tags)}</div>
          <div className="authors">
            Autore:
            {this.renderStringArray(autori)}
          </div>
          <p>
            Edizione: <b>{anno}</b>
          </p>
          <div className="hidden_content">
            <ul>
              <li>Leggi sul browser</li>
              <li>Sito e risorse del libro</li>
              <li>Programmazione</li>
              <li>Prove di verifica</li>
              <li>ZTE</li>
            </ul>
          </div>
        </footer>
      </Wrap>
    );
  }
}
