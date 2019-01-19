interface IQuery {
  value: number;
  checked: boolean;
}

export interface IProps {
  variant?: string;
  queryType?: string;
  matrixName?: any;
  lastVersions?: IQuery;
  globalUsage?: IQuery;
  yearReleased?: IQuery;
  browserQuery?: string;
  comparisonQuery?: string;
  incQuery?: Array<String>;
  excQuery?: Array<String>;
  //
  updateQuery?: Function;
  updateValue?: Function;
  updateName?: Function;
  updateBrowserQuery?: Function;
  updateComparisonQuery?: Function;
  updateAuto?: Function;
  updateIncluded?: Function;
  updateExcluded?: Function;
  updateIncExc?: Function;

  //
  slidervValues?: Object;
  handleAccordionChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSliderChange?: (id: string, value: number) => void;
  handleNameChange?: (html) => void;
  //
  browser?: any;
  selectColour?: string;
  //
  browserList?: any;
  includedTotal?: any;
  excludedTotal?: any;
  total?: any;
  handleAutoChange?: Function;
  handleIncludeChange?: Function;
  handleExcludeChange?: Function;

  // post css
  // browserQuery
}

export interface IState {
  isLoaded: boolean;
}
