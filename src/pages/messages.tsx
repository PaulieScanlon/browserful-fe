import React from 'react';
import { Link } from '../../routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMessage } from '../modules/annoucements/actions/update_message';

interface IProps {
  message: string;
  updateMessage: any;
}

interface IState {}

class Messages extends React.Component<IProps, IState> {
  render() {
    const { message, updateMessage } = this.props;

    return (
      <div>
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
      </div>
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
