import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';

import { RangeSlider } from '../components/RangeSlider';
import { Accordion, AccordionItem } from '../components/Accordion';
import { scaffolding, common } from '../theme';

import styled from 'react-emotion';

import browserslist from 'browserslist';

interface IProps {
  updateBrowserlist: any;
}

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  marginTop: common.appBar.height,
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  right: '0px'
});

class Freeview extends React.Component<IProps> {
  onChange(value: any) {
    console.log(`> ${value[0] / 100}%, <${value[1] / 10}%`);
    this.props.updateBrowserlist(
      browserslist(`> ${value[0] / 100}%, <${value[1] / 10}%`)
    );
  }

  render() {
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
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Accordion type="checkbox" name="storybook-accordion">
                  <AccordionItem
                    defaultChecked
                    label="Global Usage > {x}% < {x}%"
                  >
                    <RangeSlider
                      min={0}
                      max={1}
                      steps={0.5}
                      onChange={value => this.onChange(value)}
                    />
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </FreeviewContent>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  result: state.browserlist.result
});

const mapDispatchToProps = dispatch => ({
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freeview);
