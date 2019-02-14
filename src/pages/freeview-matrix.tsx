import * as React from 'react';

import { Container } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
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

class FreeviewMatrix extends React.Component<IProps, IState> {
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
      <AppContent>
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
        <Container
          style={{
            margin: `${scaffolding.gutterSm} auto`
          }}
          fluid
        >
          {isLoaded && <MatrixUi variant={variantTypes.FREEVIEW} />}
        </Container>
      </AppContent>
    );
  }
}

export default FreeviewMatrix;
