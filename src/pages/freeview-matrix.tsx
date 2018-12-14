import * as React from 'react';

import styled from 'react-emotion';
import browserslist from 'browserslist';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateQueryColour,
  updateGlobalUsage,
  updateYearReleased,
  updateLastVersions
} from '../modules/ui/actions/update_ui';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';

import { HeadTag } from '../components/HeadTag';
import { Container } from 'react-grid-system';
import { AppBar } from '../components/AppBar';

import { ControlCards } from '../features/ControlCards/';
import { BrowserCards } from '../features/BrowserCards/';

import { urlValidator } from '../utils/urlValidator';
import { queryBuilder } from '../utils/queryBuilder';
import { actionBuilder } from '../utils/actionBuilder';
import { urlSetter } from '../utils/urlSetter';
import { urlGetter } from '../utils/urlGetter';
import { scaffolding, common } from '../theme';

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
  filtered: any;
  ui: any;
  updateBrowserlist: any;
  updateQuery: any;
  updateQueryColour: any;
  updateGlobalUsage: any;
  updateYearReleased: any;
  updateLastVersions: any;
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
    this.props.updateQuery(urlGetter().qt);
    this.props[actionBuilder(urlGetter().qt)](urlGetter().sv);

    this.props.updateBrowserlist(
      browserslist([`${queryBuilder(urlGetter().qt, urlGetter().sv)}`])
    );

    this.setState({
      loaded: true
    });
  }

  accordionOnChange(queryType: string, queryColour: string) {
    this.props.updateQuery(queryType);
    this.props.updateQueryColour(queryColour);

    urlSetter(queryType, this.props.ui[queryType]);
  }

  sliderOnChange(value: any) {
    this.props[actionBuilder(this.props.ui.queryType)](value);
    this.props.updateBrowserlist(
      browserslist([`${queryBuilder(this.props.ui.queryType, value)}`])
    );

    urlSetter(this.props.ui.queryType, value);
  }

  render() {
    const { ui, filtered } = this.props;
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
            {loaded && (
              <ControlCards
                ui={ui}
                accordionOnChange={(id, selectColour) =>
                  this.accordionOnChange(id, selectColour)
                }
                sliderOnChange={value => this.sliderOnChange(value)}
              />
            )}
            {loaded && (
              <BrowserCards filtered={filtered} queryColour={ui.queryColour} />
            )}
          </Container>
        </FreeviewContent>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  filtered: state.browserlist.filtered
});

const mapDispatchToPRops = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateQueryColour: bindActionCreators(updateQueryColour, dispatch),
  updateGlobalUsage: bindActionCreators(updateGlobalUsage, dispatch),
  updateYearReleased: bindActionCreators(updateYearReleased, dispatch),
  updateLastVersions: bindActionCreators(updateLastVersions, dispatch),
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPRops
)(Matrix);
