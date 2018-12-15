import * as React from 'react';

import { ToggleSwitch } from '../ToggleSwitch';
import { RadioButton } from '../RadioButton';
import { colours } from '../../theme';

import { SelectWrapper, InnerWrapper, Arrow, SelectHeader } from './styles';

interface IProps {
  browser: string;
  version: number;
  name: string;
  onAutoChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    browser: string,
    version: number | string
  ) => void;
  onIncludeChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    browser: string,
    version: number | string
  ) => void;
  onExcludeChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    browser: string,
    version: number | string
  ) => void;
}

export const SelectPopover: React.SFC<IProps> = ({
  browser,
  version,
  name,
  onAutoChange,
  onIncludeChange,
  onExcludeChange
}) => {
  return (
    <SelectWrapper>
      <Arrow>
        <InnerWrapper>
          <SelectHeader>
            <ToggleSwitch
              id={`auto ${browser} ${version}`}
              name={name}
              type="radio"
              defaultChecked
              onChange={event => onAutoChange(event, browser, version)}
            >
              Automatically filter
            </ToggleSwitch>
          </SelectHeader>

          <RadioButton
            id={`include ${browser} ${version}`}
            name={name}
            selectColour={colours.green}
            onChange={event => onIncludeChange(event, browser, version)}
          >
            Always Include
          </RadioButton>
          <RadioButton
            id={`exclude ${browser} ${version}`}
            name={name}
            selectColour={colours.red}
            onChange={event => onExcludeChange(event, browser, version)}
          >
            Always Exclude
          </RadioButton>
        </InnerWrapper>
      </Arrow>
    </SelectWrapper>
  );
};

SelectPopover.defaultProps = {
  onAutoChange: () => {},
  onIncludeChange: () => {},
  onExcludeChange: () => {}
};
