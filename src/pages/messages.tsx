import React from 'react';

import routes from 'routes';
const { Link } = routes;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMessage } from '../modules/annoucements/actions/update_message';

import { HeadTag } from '../components/HeadTag';
import { AppBar } from '../components/AppBar';

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
        <Link route="/">
          <a>/index</a>
        </Link>
        <p>Message: {message}</p>
        <div>
          <button onClick={() => updateMessage('Hello World')}>
            Hello World
          </button>
        </div>
        <div>
          <button onClick={() => updateMessage('Something Else')}>
            Something Else
          </button>
        </div>
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
