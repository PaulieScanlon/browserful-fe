import { FreeviewMatrixUi } from '../components/FreeviewMatrixUi';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateAuto,
  updateIncluded,
  updateExcluded,
  updateIncExc
} from '../actions/MatrixUi';

const mapStateToProps = state => ({
  queryType: state.matrixUi.queryType,
  lastVersions: state.matrixUi.lastVersions,
  globalUsage: state.matrixUi.globalUsage,
  yearReleased: state.matrixUi.yearReleased,
  incQuery: state.matrixUi.incQuery,
  excQuery: state.matrixUi.excQuery
});

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch),
  updateAuto: bindActionCreators(updateAuto, dispatch),
  updateIncluded: bindActionCreators(updateIncluded, dispatch),
  updateExcluded: bindActionCreators(updateExcluded, dispatch),
  updateIncExc: bindActionCreators(updateIncExc, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FreeviewMatrixUi);
