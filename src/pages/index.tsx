import * as React from 'react';

import AppIndexUi from '../features/IndexUI/containers/AppIndexUi';

interface IState {
  isLoaded: boolean;
}

class Index extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    const { isLoaded } = this.state;

    return <React.Fragment>{isLoaded && <AppIndexUi />}</React.Fragment>;
  }
}

export default Index;
