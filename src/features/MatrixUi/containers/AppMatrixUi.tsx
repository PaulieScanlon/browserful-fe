import * as React from 'react';
import { MatrixUi } from '../components/MatrixUi';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateAuto,
  updateIncluded,
  updateExcluded,
  updateIncExc
} from '../actions/Matrix';

import { constructMatrix } from '../../../utils/matrixUtils/constructMatrix';
import { comparisonQuery } from '../../../utils/queryUtils/queryComparison';
import { queryBuilder } from '../../../utils/queryUtils/queryBuilder';

import { IProps } from '../types';

class AppMatrixUi extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.handleAccordionChange = this.handleAccordionChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
    this.handleIncludeChange = this.handleIncludeChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
  }

  handleAccordionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { updateQuery } = this.props;
    const qt = event.currentTarget.id;
    updateQuery(qt);
  }

  handleSliderChange(value: number, id: string) {
    const { updateValue } = this.props;
    const qt = id;
    const sv = value;
    updateValue(qt, sv);
  }

  handleAutoChange(query: string) {
    const { updateAuto, incQuery, excQuery } = this.props;
    updateAuto(incQuery, excQuery, query);
  }

  handleIncludeChange(query: string) {
    const { updateIncluded, incQuery, excQuery } = this.props;
    updateIncluded(incQuery, excQuery, query);
  }

  handleExcludeChange(query: string) {
    const { updateExcluded, incQuery, excQuery } = this.props;
    updateExcluded(incQuery, excQuery, query);
  }

  render() {
    const {
      queryType,
      lastVersions,
      globalUsage,
      yearReleased,
      incQuery,
      excQuery
    } = this.props;

    const slidervValues = {
      lastVersions,
      globalUsage,
      yearReleased
    };

    const browserQuery = queryBuilder(
      queryType,
      slidervValues[queryType],
      incQuery,
      excQuery
    );

    const matrix = constructMatrix(
      browserQuery,
      comparisonQuery[queryType],
      incQuery,
      excQuery
    );

    return (
      <MatrixUi
        queryType={queryType}
        slidervValues={slidervValues}
        browserList={matrix.browserList}
        includedList={matrix.includedList}
        excludedList={matrix.excludedList}
        total={matrix.total}
        handleAccordionChange={this.handleAccordionChange}
        handleSliderChange={this.handleSliderChange}
        handleAutoChange={this.handleAutoChange}
        handleIncludeChange={this.handleIncludeChange}
        handleExcludeChange={this.handleExcludeChange}
      />
    );
  }
}

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
)(AppMatrixUi);
