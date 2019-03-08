import * as React from 'react';

import App from './app';

type Props = {};

type State = {
  hasError: boolean;
};

export default class CatcherInTheRye extends React.Component<Props, State> {
  public readonly state: State = {
    hasError: false
  };

  componentDidCatch(error: any, info: any) {
    // STEP: Display fallback UI
    this.setState({hasError: true});
    // STEP: You can also log the error to an error reporting service
    console.error(error, info);
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return <h1>An error was catched</h1>;
    }
    return <App />;
  }
}
