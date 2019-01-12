import * as React from 'react';

import { Container } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { scaffolding } from '../theme';

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
        <AppBar fixed={true} width="100%" />
        <Container
          style={{
            margin: `${scaffolding.gutterSm} auto`
          }}
        >
          {isLoaded && <MatrixUi variant={variantTypes.FREEVIEW} />}
        </Container>
      </AppContent>
    );
  }
}

export default FreeviewMatrix;
