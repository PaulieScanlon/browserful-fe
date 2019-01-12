import * as React from 'react';

import IndexUi from '../features/IndexUI/containers/';

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

    return <React.Fragment>{isLoaded && <IndexUi />}</React.Fragment>;
  }
}

export default Index;
