import * as React from 'react';
import fetch from 'isomorphic-unfetch';

import LandingPage from '../features/LandingPage/components';
import FeedbackForm from '../features/FeedbackForm/components';
interface IProps {
  json: any;
}
interface IState {
  isLoaded: boolean;
}

class Index extends React.Component<IProps, IState> {
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
