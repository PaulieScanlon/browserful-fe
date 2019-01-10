import { SliderControls } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateThing
} from '../../../modules/ui/actions/updateUi';

const mapStateToProps = state => ({
  queryType: state.ui.queryType,
  globalUsage: state.ui.globalUsage,
  yearReleased: state.ui.yearReleased,
  lastVersions: state.ui.lastVersions,
  incQuery: state.ui.incQuery,
  excQuery: state.ui.excQuery,
  browserQuery: state.ui.browserQuery,
  thingObject: state.ui.thingObject
});

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch),
  updateThing: bindActionCreators(updateThing, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderControls);
