import * as React from 'react';

import { Container } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { SideBar } from '../ui/SideBar';
import { IconLink } from '../ui/IconButton';
import { Icon } from '../ui/Icon';

import { scaffolding, colours } from '../theme';

import MatrixUi from '../features/MatrixUi/containers';
import { variantTypes } from '../features/MatrixUi/enums';

import { AppContent } from './styles';

interface IProps {}
interface IState {
  isLoaded: boolean;
}

class AppMatrix extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  getInitialProps = () => {
    //@TODO add getInitialProps to get the users matrix settings
  };

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <AppContent>
        <HeadTag />
        <AppBar showLogo={false} fixed={true}>
          <IconLink
            href="http://www.twitter.com/browserful"
            target="_blank"
            backgroundColour={colours.offWhite}
          >
            <Icon name="twitter" fill={colours.blue} />
          </IconLink>
        </AppBar>
        <SideBar active={true}>
          <Container
            style={{
              margin: `${scaffolding.gutterSm} auto`
            }}
          >
            {isLoaded && <MatrixUi variant={variantTypes.APPVIEW} />}
          </Container>
        </SideBar>
      </AppContent>
    );
  }
}

export default AppMatrix;
