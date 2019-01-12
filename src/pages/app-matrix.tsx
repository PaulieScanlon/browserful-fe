import * as React from 'react';

import { Container } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { SideBar } from '../ui/SideBar';
import { scaffolding } from '../theme';

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
            {isLoaded && <MatrixUi variant={variantTypes.APPVIEW} />}
          </Container>
        </SideBar>
      </AppContent>
    );
  }
}

export default AppMatrix;
