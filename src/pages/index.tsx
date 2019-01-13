import * as React from 'react';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { IconLink } from '../ui/IconButton';
import { Icon } from '../ui/Icon';

import IndexUi from '../features/IndexUI/containers/';

import { colours } from '../theme';

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
        {isLoaded && (
          <React.Fragment>
            <HeadTag />
            <AppBar fixed={true}>
              <IconLink
                href="http://www.twitter.com/browserful"
                target="_blank"
                backgroundColour={colours.offWhite}
              >
                <Icon name="twitter" fill={colours.blue} />
              </IconLink>
            </AppBar>
            <IndexUi />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Index;
