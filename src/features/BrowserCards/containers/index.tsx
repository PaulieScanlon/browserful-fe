import { BrowserCards } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateThing } from '../../../modules/ui/actions/updateUi';

const mapStateToProps = state => ({
  thingObject: state.ui.thingObject
});

const mapDispatchToProps = dispatch => ({
  updateThing: bindActionCreators(updateThing, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowserCards);
