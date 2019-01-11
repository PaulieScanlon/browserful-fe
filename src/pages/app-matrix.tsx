import * as React from 'react';

import { Container } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { SideBar } from '../ui/SideBar';
import { scaffolding } from '../theme';

import AppMatrixUi from '../features/MatrixUi/containers/AppMatrixUi';

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
        <AppBar showLogo={false} fixed={true} width="100%" />
        <SideBar active={true}>
          <Container
            style={{
              margin: `${scaffolding.gutterLg} ${scaffolding.gutterSm}`
            }}
          >
            {isLoaded && <AppMatrixUi />}
          </Container>
        </SideBar>
      </AppContent>
    );
  }
}

export default AppMatrix;
