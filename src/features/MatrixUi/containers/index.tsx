import * as React from 'react';
import { MatrixUi } from '../components';

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

import { urlValidator } from '../../../utils/urlUtils/urlValidator';
import { urlGetter } from '../../../utils/urlUtils/urlGetter';
import { urlSetter } from '../../../utils/urlUtils/urlSetter';
import { constructMatrix } from '../../../utils/matrixUtils/constructMatrix';
import { comparisonQuery } from '../../../utils/queryUtils/queryComparison';
import { queryBuilder } from '../../../utils/queryUtils/queryBuilder';
import { queryParams } from '../../../utils/queryUtils/enums';
import { arrayAdd } from '../../../utils/arrayUtils/arrayAdd';
import { arrayRemove } from '../../../utils/arrayUtils/arrayRemove';

import { IProps, IState } from '../types';
import { variantTypes } from '../enums';

class MatrixUiContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoaded: false
    };

    this.handleAccordionChange = this.handleAccordionChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
    this.handleIncludeChange = this.handleIncludeChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
  }

  componentDidMount() {
    const { variant, updateQuery, updateValue, updateIncExc } = this.props;

    if (variant === variantTypes.FREEVIEW) {
      history.replaceState({}, '', `${urlValidator()}`);

      const qt = urlGetter().qt;
      const sv = urlGetter().sv;
      const incq = urlGetter()
        [queryParams.INCLUDED_QUERY].toString()
        .split(',');
      const excq = urlGetter()
        [queryParams.EXCLUDED_QUERY].toString()
        .split(',');

      updateQuery(qt);
      updateValue(qt, sv);
      updateIncExc(incq, excq);
    }

    this.setState({
      isLoaded: true
    });
  }

  handleAccordionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { variant, updateQuery } = this.props;
    const qt = event.currentTarget.id;
    updateQuery(qt);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter('qt', qt);
      urlSetter('sv', this.props[qt]);
    }
  }

  handleSliderChange(value: number, id: string) {
    const { variant, updateValue } = this.props;
    const qt = id;
    const sv = value;
    updateValue(qt, sv);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter('qt', qt);
      urlSetter('sv', sv);
    }
  }

  handleAutoChange(query: string) {
    const { variant, updateAuto, incQuery, excQuery } = this.props;
    updateAuto(incQuery, excQuery, query);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(
        queryParams.EXCLUDED_QUERY,
        arrayRemove(excQuery, query).join()
      );
      urlSetter(
        queryParams.INCLUDED_QUERY,
        arrayRemove(incQuery, query).join()
      );
    }
  }

  handleIncludeChange(query: string) {
    const { variant, updateIncluded, incQuery, excQuery } = this.props;
    updateIncluded(incQuery, excQuery, query);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(
        queryParams.EXCLUDED_QUERY,
        arrayRemove(excQuery, query).join()
      );
      urlSetter(queryParams.INCLUDED_QUERY, arrayAdd(incQuery, query).join());
    }
  }

  handleExcludeChange(query: string) {
    const { variant, updateExcluded, incQuery, excQuery } = this.props;
    updateExcluded(incQuery, excQuery, query);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(
        queryParams.INCLUDED_QUERY,
        arrayRemove(incQuery, query).join()
      );
      urlSetter(queryParams.EXCLUDED_QUERY, arrayAdd(excQuery, query).join());
    }
  }

  render() {
    const { isLoaded } = this.state;
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
      <React.Fragment>
        {isLoaded && (
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
        )}
      </React.Fragment>
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
)(MatrixUiContainer);
