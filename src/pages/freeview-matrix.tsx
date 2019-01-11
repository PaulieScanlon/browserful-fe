import * as React from 'react';
import styled from 'react-emotion';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateThing } from '../modules/ui/actions/updateUi';

import { Container, Row, Col } from 'react-grid-system';

import { HeadTag } from '../ui/HeadTag';
import { AppBar } from '../ui/AppBar';
import { scaffolding, common, colours } from '../theme';

import SliderControls from '../features/SliderControls/containers';
import BrowserCards from '../features/BrowserCards/containers';
// import Stats from '../features/Stats/containers';

import { queryParams } from '../utils/query-utils/enums';
import { urlValidator } from '../utils/url-utils/urlValidator';
import { urlGetter } from '../utils/url-utils/urlGetter';
import { queryBuilder } from '../utils/query-utils/queryBuilder';
// import { constructMatrix } from 'src/utils/matrix-utils/constructMatrix';

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
  queryType: string;
  thingObject: Object;

  updateQuery: any;
  updateValue: any;
  updateIncExcQuery: any;
  updateBrowserQuery: any;
  updateThing: any;
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

    const qt = urlGetter()[queryParams.QUERY_TYPE];
    const sv = urlGetter()[queryParams.SLIDER_VALUES];
    const inc = urlGetter()[queryParams.INCLUDED_QUERY].split(',');

    const exc = urlGetter()
      [queryParams.EXCLUDED_QUERY].replace(/^,|,$/g, '')
      .split(',');

    const qb = queryBuilder(qt, sv, inc, exc);

    // console.log('qt: ', qt);
    // console.log('sv: ', qt, ':', sv);
    // console.log('qb: ', qb);
    // console.log('inc: ', inc);
    // console.log('exc: ', exc);

    this.props.updateThing({
      ...this.props.thingObject,
      [queryParams.QUERY_TYPE]: qt,
      [qt]: sv,
      browserQuery: qb,
      incq: inc,
      excq: exc
    });

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
            margin: `${scaffolding.gutterSm} auto`
          }}
        >
          <Row>
            {isLoaded && (
              <Col xs={12} sm={12} md={7} lg={8}>
                <SliderControls />
                <div
                  style={{
                    marginTop: scaffolding.gutterLg
                  }}
                />
              </Col>
            )}
            {isLoaded && (
              <Col xs={12} sm={12} md={5} lg={4}>
                {/* <Stats /> */}
                <div
                  style={{
                    marginTop: scaffolding.gutterLg
                  }}
                />
              </Col>
            )}
          </Row>

          {/* <Row>{isLoaded && <BrowserCards />}</Row> */}
        </Container>
      </FreeviewContent>
    );
  }
}

const mapStateToProps = state => ({
  thingObject: state.ui.thingObject
});

const mapDispatchToProps = dispatch => ({
  updateThing: bindActionCreators(updateThing, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matrix);
