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
import { queryParams } from '../../../utils/enums';
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
    const { variant, updateValue, updateName, updateIncExc } = this.props;

    if (variant === variantTypes.FREEVIEW) {
      history.replaceState({}, '', `${urlValidator()}`);

      const mn = urlGetter()[queryParams.MATRIX_NAME];
      const lv = urlGetter()[queryParams.LAST_VERSIONS];
      const gu = urlGetter()[queryParams.GLOBAL_USAGE];
      const yr = urlGetter()[queryParams.YEAR_RELEASED];
      const incq = urlGetter()[queryParams.INCLUDED_QUERY];
      const excq = urlGetter()[queryParams.EXCLUDED_QUERY];

      updateValue('lv', lv.value ? lv.value : this.props.lv.value, lv.checked);

      updateValue('gu', gu.value ? gu.value : this.props.gu.value, gu.checked);

      updateValue('yr', yr.value ? yr.value : this.props.yr.value, yr.checked);

      updateName(mn);
      updateIncExc(incq, excq);
    }

    this.setState({
      isLoaded: true
    });
  }

  componentWillReceiveProps(nextProps: any) {
    const { updateBrowserQuery, updateComparisonQuery } = this.props;

    const bq = queryBuilder(
      nextProps.lv,
      nextProps.gu,
      nextProps.yr,
      nextProps.incQuery,
      nextProps.excQuery
    );

    updateBrowserQuery(bq);

    updateComparisonQuery(
      comparisonBuilder(nextProps.lv, nextProps.gu, nextProps.yr)
    );
  }

  handleAccordionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { variant, updateQuery } = this.props;
    const { id, checked } = event.currentTarget;

    updateQuery(id, checked);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(id, this.props[id].value, checked);
    }
  }

  handleSliderChange(id: string, value: number) {
    const { variant, updateValue } = this.props;

    updateValue(id, value);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(id, this.props[id].value, this.props[id].checked);
    }
  }

  handleNameChange(html: any) {
    const { variant, updateName } = this.props;
    const mn = html;
    updateName(html);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter('mn', mn, null);
    }
  }

  handleAutoChange(query: string) {
    const { variant, updateAuto, incQuery, excQuery } = this.props;
    updateAuto(incQuery, excQuery, query);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(
        queryParams.EXCLUDED_QUERY,
        arrayRemove(excQuery, query).join(),
        null
      );
      urlSetter(
        queryParams.INCLUDED_QUERY,
        arrayRemove(incQuery, query).join(),
        null
      );
    }
  }

  handleIncludeChange(query: string) {
    const { variant, updateIncluded, incQuery, excQuery } = this.props;
    updateIncluded(incQuery, excQuery, query);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(
        queryParams.EXCLUDED_QUERY,
        arrayRemove(excQuery, query).join(),
        null
      );
      urlSetter(
        queryParams.INCLUDED_QUERY,
        arrayAdd(incQuery, query).join(),
        null
      );
    }
  }

  handleExcludeChange(query: string) {
    const { variant, updateExcluded, incQuery, excQuery } = this.props;
    updateExcluded(incQuery, excQuery, query);

    if (variant === variantTypes.FREEVIEW) {
      urlSetter(
        queryParams.INCLUDED_QUERY,
        arrayRemove(incQuery, query).join(),
        null
      );
      urlSetter(
        queryParams.EXCLUDED_QUERY,
        arrayAdd(excQuery, query).join(),
        null
      );
    }
  }

  render() {
    const { isLoaded } = this.state;
    const {
      browserQuery,
      comparisonQuery,
      lv,
      gu,
      yr,
      mn,
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
            slidervValues={{ lv, gu, yr }}
            mn={mn}
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
  mn: state.matrixUi.mn,
  lv: state.matrixUi.lv,
  gu: state.matrixUi.gu,
  yr: state.matrixUi.yr,
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
