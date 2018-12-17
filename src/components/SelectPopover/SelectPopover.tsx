import * as React from 'react';

import { ToggleSwitch } from '../ToggleSwitch';
import { RadioButton } from '../RadioButton';
import { colours } from '../../theme';

import { SelectWrapper, InnerWrapper, Arrow, SelectHeader } from './styles';
import { overrideTypes } from '../VersionChip/types';

export interface SelectPopoverChangeProps {
  onAutoChange?: (
    browser: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onIncludeChange?: (
    browser: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onExcludeChange?: (
    browser: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface IProps extends SelectPopoverChangeProps {
  browser: string;
  version: number | string;
  name: string;
  hasOverride?: string;
}

export const SelectPopover: React.SFC<IProps> = ({
  browser,
  version,
  name,
  hasOverride,
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
              defaultChecked={!hasOverride ? true : false}
              onChange={event => onAutoChange(browser, version, event)}
            >
              Automatic mode
            </ToggleSwitch>
          </SelectHeader>

          <RadioButton
            id={`include ${browser} ${version}`}
            name={name}
            defaultChecked={
              hasOverride === overrideTypes.IS_INCLUDED ? true : false
            }
            selectColour={colours.green}
            onChange={event => onIncludeChange(browser, version, event)}
          >
            Always Include
          </RadioButton>
          <RadioButton
            id={`exclude ${browser} ${version}`}
            name={name}
            defaultChecked={
              hasOverride === overrideTypes.IS_EXCLUDED ? true : false
            }
            selectColour={colours.red}
            onChange={event => onExcludeChange(browser, version, event)}
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
