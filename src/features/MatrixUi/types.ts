export interface IProps {
  queryType?: string;
  lastVersions?: number;
  globalUsage?: number;
  yearReleased?: number;
  incQuery?: Array<String>;
  excQuery?: Array<String>;
  //
  updateQuery?: Function;
  updateValue?: Function;
  updateAuto?: Function;
  updateIncluded?: Function;
  updateExcluded?: Function;
  updateIncExc?: Function;
  //
  slidervValues?: Object;
  handleAccordionChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSliderChange?: (value: number, id: string) => void;
  //
  browser?: any;
  //
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

export const UPDATE_QUERY = '[Update Query]';
export const UPDATE_VALUE = '[Update Value]';
export const UPDATE_AUTO = '[Update Auto]';
export const UPDATE_INCLUDED = '[Update Included]';
export const UPDATE_EXCLUDED = '[Update Exclude]';
export const UPDATE_INC_EXC = '[Update Include / Exclude]';
