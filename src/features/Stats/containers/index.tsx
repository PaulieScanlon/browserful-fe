import { Stats } from '../components';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  queryType: state.ui.queryType,
  incQuery: state.ui.incQuery,
  excQuery: state.ui.excQuery,
  browserQuery: state.ui.browserQuery
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
