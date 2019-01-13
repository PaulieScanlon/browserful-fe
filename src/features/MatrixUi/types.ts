export interface IProps {
  variant?: string;
  queryType?: string;
  lastVersions?: number;
  globalUsage?: number;
  yearReleased?: number;
  browserQuery?: string;
  incQuery?: Array<String>;
  excQuery?: Array<String>;
  //
  updateQuery?: Function;
  updateValue?: Function;
  updateBrowserQuery?: Function;
  updateAuto?: Function;
  updateIncluded?: Function;
  updateExcluded?: Function;
  updateIncExc?: Function;
  //
  slidervValues?: Object;
  handleAccordionChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSliderChange?: (value: number, id: string) => void;
  handleNameChange?: (html) => void;
  //
  browser?: any;
  selectColour?: string;
  //
  browserList?: any;
  includedList?: any;
  excludedList?: any;
  total?: any;
  handleAutoChange?: Function;
  handleIncludeChange?: Function;
  handleExcludeChange?: Function;
}

export interface IState {
  isLoaded: boolean;
}
