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

import { Container } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { scaffolding, common, colours } from '../theme';

import { config } from '../features/SliderControls/config';

import SliderControls from '../features/SliderControls/containers';
import BrowserControls from '../features/BrowserControls/containers';

import { queryParams } from '../utils/queryStrings';
import { urlValidator } from '../utils/urlValidator';
import { urlGetter } from '../utils/urlGetter';

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  margin: `${common.appBar.height} auto 0px`,
  paddingTop: scaffolding.gutterLg,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: colours.offWhite
});

interface IProps {
  updateQuery: any;
  updateValue: any;
  updateIncExcQuery: any;
  updateBrowserQuery: any;
}
interface IState {
  isLoaded: boolean;
}
class Matrix extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
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

    updateQuery(
      urlGetter()[queryParams.QUERY_TYPE],
      config[urlGetter()[queryParams.QUERY_TYPE]].selectColour
    );

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
      isLoaded: true
    });
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <FreeviewContent>
        <HeadTag />
        <AppBar fixed={true} width="100%" />

        <Container
          style={{
            margin: `${scaffolding.gutterLg} auto`
          }}
        >
          {isLoaded && <SliderControls />}
          {isLoaded && <BrowserControls />}
        </Container>
      </FreeviewContent>
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
