import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMessage } from '../modules/annoucements/actions/update_message';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { spaceLg } from '../theme';
import { P } from '../typography';
interface IProps {
  message: string;
  updateMessage: any;
}

interface IState {}

class Messages extends React.Component<IProps, IState> {
  render() {
    const { message, updateMessage } = this.props;

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar />

        <Container fluid style={{ marginTop: `${spaceLg}px` }}>
          <Row>
            <Col xs={12} sm={5}>
              <P>This is nothing, just testing Redux</P>
            </Col>
            <Col xs={12} sm={6}>
              <P>right content</P>
              <P>Message: {message}</P>

              <button onClick={() => updateMessage('Hello World')}>
                Hello World
              </button>

              <button onClick={() => updateMessage('Something Else')}>
                Something Else
              </button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  message: state.announcement.message
});

const mapDispatchToProps = dispatch => ({
  updateMessage: bindActionCreators(updateMessage, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
