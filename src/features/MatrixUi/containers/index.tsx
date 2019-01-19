import * as React from 'react';
import { MatrixUi } from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateName,
  updateAuto,
  updateIncluded,
  updateExcluded,
  updateIncExc,
  updateBrowserQuery,
  updateComparisonQuery
} from '../actions';

import { urlValidator } from '../../../utils/urlUtils/urlValidator';
import { urlGetter } from '../../../utils/urlUtils/urlGetter';
import { urlSetter } from '../../../utils/urlUtils/urlSetter';
import { constructMatrix } from '../../../utils/matrixUtils/constructMatrix';
import { comparisonBuilder } from '../../../utils/comparisonUtils/comparisonBuilder';
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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
    this.handleIncludeChange = this.handleIncludeChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
  }

  componentDidMount() {
    const {
      variant,
      updateQuery,
      updateValue,
      updateName,
      updateIncExc
    } = this.props;

    if (variant === variantTypes.FREEVIEW) {
      history.replaceState({}, '', `${urlValidator()}`);

      const qt = urlGetter().qt;
      const sv = urlGetter().sv;
      const incq = urlGetter()[queryParams.INCLUDED_QUERY];
      const excq = urlGetter()[queryParams.EXCLUDED_QUERY];
      const mn = urlGetter()[queryParams.MATRIX_NAME];

      // updateQuery(qt);
      // updateValue(qt, sv);
      // updateName(mn);
      updateIncExc(incq, excq);
    }

    this.setState({
      isLoaded: true
    });
  }

  componentWillReceiveProps(nextProps: any) {
    const { updateBrowserQuery, updateComparisonQuery } = this.props;

    const bq = queryBuilder(
      nextProps.lastVersions,
      nextProps.globalUsage,
      nextProps.yearReleased,
      nextProps.incQuery,
      nextProps.excQuery
    );
    updateBrowserQuery(bq);

    updateComparisonQuery(
      comparisonBuilder(
        nextProps.lastVersions,
        nextProps.globalUsage,
        nextProps.yearReleased
      )
    );
  }

  handleAccordionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { updateQuery } = this.props;
    const { id, checked } = event.currentTarget;

    // const { variant, updateQuery } = this.props;
    // const qt = event.currentTarget.id;
    updateQuery(id, checked);
    // if (variant === variantTypes.FREEVIEW) {
    //   urlSetter('qt', qt);
    //   urlSetter('sv', this.props[qt]);
    // }
  }

  handleSliderChange(id: string, value: number) {
    const { variant, updateValue } = this.props;

    // const qt = id;
    // const sv = value;
    updateValue(id, value);

    if (variant === variantTypes.FREEVIEW) {
      //   urlSetter('qt', qt);
      //   urlSetter('sv', sv);
    }
  }

  handleNameChange(html: any) {
    const { variant, updateName } = this.props;
    const mn = html;
    updateName(html);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter('mn', mn);
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
      browserQuery,
      comparisonQuery,
      lastVersions,
      globalUsage,
      yearReleased,
      matrixName,
      incQuery,
      excQuery
    } = this.props;

    const matrix = constructMatrix(
      browserQuery,
      comparisonQuery,
      incQuery,
      excQuery
    );

    return (
      <React.Fragment>
        {isLoaded && (
          <MatrixUi
            queryType={queryType}
            slidervValues={{ lastVersions, globalUsage, yearReleased }}
            matrixName={matrixName}
            browserList={matrix.browserList}
            browserQuery={browserQuery}
            includedTotal={matrix.includedTotal}
            excludedTotal={matrix.excludedTotal}
            total={matrix.total}
            handleAccordionChange={this.handleAccordionChange}
            handleSliderChange={this.handleSliderChange}
            handleNameChange={this.handleNameChange}
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
  matrixName: state.matrixUi.matrixName,
  lastVersions: state.matrixUi.lastVersions,
  globalUsage: state.matrixUi.globalUsage,
  yearReleased: state.matrixUi.yearReleased,
  browserQuery: state.matrixUi.browserQuery,
  comparisonQuery: state.matrixUi.comparisonQuery,
  incQuery: state.matrixUi.incQuery,
  excQuery: state.matrixUi.excQuery
});

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch),
  updateName: bindActionCreators(updateName, dispatch),
  updateBrowserQuery: bindActionCreators(updateBrowserQuery, dispatch),
  updateComparisonQuery: bindActionCreators(updateComparisonQuery, dispatch),
  updateAuto: bindActionCreators(updateAuto, dispatch),
  updateIncluded: bindActionCreators(updateIncluded, dispatch),
  updateExcluded: bindActionCreators(updateExcluded, dispatch),
  updateIncExc: bindActionCreators(updateIncExc, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatrixUiContainer);
