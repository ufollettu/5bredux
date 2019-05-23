import * as React from 'react';

import {Wrap} from './styles';

type Props = {};
type State = CardType & {
  value: string;
  error: boolean;
};

export default class TextInput extends React.Component<Props, State> {
  public readonly state: State = {
    value: '',
    error: false
  };

  handleTextInput(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      value: e.target.value
    });
  }

  checkInput(e: React.FocusEvent<HTMLInputElement>): void {
    this.setState({
      error: !e.target.value.match(/@/)
    });
  }

  resetInput(e: React.FocusEvent<HTMLInputElement>): void {
    this.setState({
      error: false,
      value: ''
    });
  }

  render(): JSX.Element {
    const {value, error} = this.state;
    return (
      <Wrap error={error}>
        <fieldset>
          <label>email</label>
          <span>{error && `◎ L'email inserita non è corretta`}</span>
          <input
            type="text"
            name="email"
            id="email"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleTextInput(e)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => this.checkInput(e)}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => this.resetInput(e)}
          />
        </fieldset>
      </Wrap>
    );
  }
}
