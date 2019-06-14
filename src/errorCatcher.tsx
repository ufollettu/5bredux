import * as React from 'react';

import App from './app';

type Props = {};
type State = {
  hasError: boolean;
  error: any;
  info: any;
};

export default class CatcherInTheRye extends React.Component<Props, State> {
  public readonly state: State = {
    hasError: false,
    error: null,
    info: null
  };

  componentDidCatch(error: any, info: any) {
    // STEP: Display fallback UI
    this.setState({hasError: true, error, info});

    // STEP: You can also log the error to an error reporting service
    console.error(error, info);
  }

  render(): JSX.Element {
    const {hasError, error, info} = this.state;

    // STEP: if an error is catched lock the UI and prevent propagation
    if (hasError) {
      return (
        <div>
          <h1>An error was catched</h1>
          <p>{error}</p>
          <p>{info}</p>
        </div>
      );
    }

    // STEP: if no error is catched run the application normally
    return <App />;
  }
}
