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

import { ControlCards } from '../features/ControlCards/';
import { BrowserCards } from '../features/BrowserCards/';

import { urlValidator } from '../utils/urlValidator';
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
  ui: any;
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

    this.props.updateQuery(urlGetter().qt);
    this.props.updateValue(urlGetter().qt, urlGetter().sv);
    this.props.updateBrowserQuery(urlGetter().qt, urlGetter().sv);

    this.setState({
      loaded: true
    });
  }

  accordionOnChange(queryType: string, queryColour: string) {
    this.props.updateQuery(queryType, queryColour);

    urlSetter(queryType, this.props.ui[queryType]);
  }

  sliderOnChange(value: any) {
    this.props.updateValue(this.props.ui.queryType, value);
    this.props.updateBrowserQuery(this.props.ui.queryType, value);

    urlSetter(this.props.ui.queryType, value);
  }

  render() {
    const { ui } = this.props;

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
              <BrowserCards
                browserList={ui.browserList}
                queryColour={ui.queryColour}
              />
            )}
          </Container>
        </FreeviewContent>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch),
  updateBrowserQuery: bindActionCreators(updateBrowserQuery, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matrix);
