import * as React from 'react';
import styled from 'react-emotion';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateIncExcQuery,
  updateBrowserQuery
} from '../modules/ui/actions/update_ui';

import { HeadTag } from '../ui/HeadTag';
import { Container } from 'react-grid-system';
import { AppBar } from '../ui/AppBar';
import { scaffolding, common } from '../theme';

import ControlSliders from '../features/ControlSliders/containers';
import BrowserCards from '../features/BrowserCards/containers';
import { queryParams } from '../utils/queryStrings';
import { urlValidator } from '../utils/urlValidator';
import { urlGetter } from '../utils/urlGetter';

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  margin: `${common.appBar.height} auto`,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  left: '0px'
});

interface IProps {
  updateQuery: any;
  updateValue: any;
  updateIncExcQuery: any;
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

    const {
      updateQuery,
      updateValue,
      updateBrowserQuery,
      updateIncExcQuery
    } = this.props;

    updateQuery(urlGetter()[queryParams.QUERY_TYPE]);

    updateValue(
      urlGetter()[queryParams.QUERY_TYPE],
      urlGetter()[queryParams.SLIDER_VALUES]
    );

    updateIncExcQuery(
      urlGetter()
        [queryParams.INCLUDED_QUERY].toString()
        .split(','),
      urlGetter()
        [queryParams.EXCLUDED_QUERY].toString()
        .split(',')
    );

    updateBrowserQuery(
      urlGetter()[queryParams.QUERY_TYPE],
      urlGetter()[queryParams.SLIDER_VALUES],
      urlGetter()
        [queryParams.INCLUDED_QUERY].toString()
        .split(','),
      urlGetter()
        [queryParams.EXCLUDED_QUERY].toString()
        .split(',')
    );

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
            style={{
              margin: `${scaffolding.gutterLg} auto`
            }}
          >
            {loaded && <ControlSliders />}
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
  updateIncExcQuery: bindActionCreators(updateIncExcQuery, dispatch),
  updateBrowserQuery: bindActionCreators(updateBrowserQuery, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Matrix);
