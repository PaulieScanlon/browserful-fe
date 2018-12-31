import * as React from 'react';

import LandingPage from '../features/LandingPage/components';
import FeedbackForm from '../features/FeedbackForm/components';
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

    return (
      <React.Fragment>
        {isLoaded && <LandingPage />}
        {isLoaded && <FeedbackForm />}
      </React.Fragment>
    );
  }
}

export default Index;
