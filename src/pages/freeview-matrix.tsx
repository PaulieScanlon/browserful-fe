import * as React from 'react';
import styled from 'react-emotion';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateBrowserQuery
} from '../modules/ui/actions/update_ui';

import { HeadTag } from '../components/HeadTag';
import { Container } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { scaffolding, common } from '../theme';

import ControlCards from '../features/ControlCards/ControlCards';
import BrowserCards from '../features/BrowserCards/BrowserCards';

import { urlValidator } from '../utils/urlValidator';
import { urlGetter } from '../utils/urlGetter';

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  marginTop: common.appBar.height,
  width: '100%',
  heigt: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  left: '0px'
});

interface IProps {
  updateQuery: any;
  updateValue: any;
  updateBrowserQuery: any;
}
interface IState {
  loaded: boolean;
}

class Matrix extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    history.replaceState({}, '', `${urlValidator()}`);

    const { updateQuery, updateValue, updateBrowserQuery } = this.props;

    updateQuery(urlGetter().qt);
    updateValue(urlGetter().qt, urlGetter().sv);
    updateBrowserQuery(urlGetter().qt, urlGetter().sv, ['Opera 9'], ['IE 9']);

    this.setState({
      loaded: true
    });
  }

  render() {
    const { loaded } = this.state;

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar fixed={true} width="100%" />
        <FreeviewContent>
          <Container
            fluid
            style={{
              margin: `${scaffolding.gutterLg} ${scaffolding.gutterSm}`
            }}
          >
            {loaded && <ControlCards />}
            {loaded && <BrowserCards />}
          </Container>
        </FreeviewContent>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch),
  updateBrowserQuery: bindActionCreators(updateBrowserQuery, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Matrix);
