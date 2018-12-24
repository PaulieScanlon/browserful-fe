import * as React from 'react';

import { ToggleSwitch } from '../ToggleSwitch';
import { RadioButton } from '../RadioButton';
import { colours } from '../../theme';

import { OverrideWrapper, DetailsBorder, InputWrapper } from './styles';
import { overrideTypes } from '../VersionChip/types';
import { DetailsLabel } from '../DetailsLabel';

export interface OverrideSelectChangeProps {
  onAutoChange?: (
    queryName: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onIncludeChange?: (
    queryName: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onExcludeChange?: (
    queryName: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface IProps extends OverrideSelectChangeProps {
  friendlyName: string;
  queryName: string;
  version: number | string;
  logo: string;
  name: string;
  hasOverride?: string;
}

export const OverrideSelect: React.SFC<IProps> = ({
  friendlyName,
  queryName,
  version,
  logo,
  name,
  hasOverride,
  onAutoChange,
  onIncludeChange,
  onExcludeChange
}) => {
  return (
    <OverrideWrapper>
      <DetailsLabel
        label={friendlyName}
        logo={logo}
        value={{ amount: version }}
      />
      <DetailsBorder />

      <InputWrapper>
        <ToggleSwitch
          id={`auto ${queryName} ${version}`}
          name={name}
          type="radio"
          flexDirection="row-reverse"
          defaultChecked={!hasOverride ? true : false}
          onChange={event => onAutoChange(queryName, version, event)}
        >
          Automatic mode
        </ToggleSwitch>

        <RadioButton
          id={`include ${queryName} ${version}`}
          name={name}
          flexDirection="row-reverse"
          defaultChecked={
            hasOverride === overrideTypes.IS_INCLUDED ? true : false
          }
          selectColour={colours.green}
          onChange={event => onIncludeChange(queryName, version, event)}
        >
          Always Include
        </RadioButton>
        <RadioButton
          id={`exclude ${queryName} ${version}`}
          name={name}
          flexDirection="row-reverse"
          defaultChecked={
            hasOverride === overrideTypes.IS_EXCLUDED ? true : false
          }
          selectColour={colours.red}
          onChange={event => onExcludeChange(queryName, version, event)}
        >
          Always Exclude
        </RadioButton>
      </InputWrapper>
    </OverrideWrapper>
  );
};

OverrideSelect.defaultProps = {
  onAutoChange: () => {},
  onIncludeChange: () => {},
  onExcludeChange: () => {}
};
