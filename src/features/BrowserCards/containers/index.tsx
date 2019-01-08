import { BrowserCards } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateAuto,
  updateIncluded,
  updateExcluded
} from '../../../modules/ui/actions/updateUi';

const mapStateToProps = state => ({
  queryType: state.ui.queryType,
  globalUsage: state.ui.globalUsage,
  yearReleased: state.ui.yearReleased,
  lastVersions: state.ui.lastVersions,
  incQuery: state.ui.incQuery,
  excQuery: state.ui.excQuery,
  browserQuery: state.ui.browserQuery
});

const mapDispatchToProps = dispatch => ({
  updateAuto: bindActionCreators(updateAuto, dispatch),
  updateIncluded: bindActionCreators(updateIncluded, dispatch),
  updateExcluded: bindActionCreators(updateExcluded, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowserCards);
