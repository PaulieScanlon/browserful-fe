import * as React from 'react';

import { ToggleSwitch } from '../ToggleSwitch';
import { RadioButton } from '../RadioButton';
import { colours } from '../../theme';

import { OverrideWrapper, DetailsBorder, InputWrapper } from './styles';
import { overrideTypes } from '../VersionChip/types';
import { DetailsLabel } from '../DetailsLabel';
import { LabelTextBold } from '../Typography';

export interface OverrideSelectChangeProps {
  onAutoChange?: (
    query: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onIncludeChange?: (
    query: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onExcludeChange?: (
    query: string,
    version: number | string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

interface IProps extends OverrideSelectChangeProps {
  friendlyName: string;
  query: string;
  version: number | string;
  logo: string;
  name: string;
  hasOverride?: string;
}

export const OverrideSelect: React.SFC<IProps> = ({
  friendlyName,
  query,
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
        renderStats={() => [
          <LabelTextBold key="version">{version}</LabelTextBold>
        ]}
      />
      <DetailsBorder />

      <InputWrapper>
        <ToggleSwitch
          id={`auto ${query} ${version}`}
          name={name}
          type="radio"
          flexDirection="row-reverse"
          defaultChecked={!hasOverride ? true : false}
          onChange={event => onAutoChange(query, version, event)}
        >
          Automatic mode
        </ToggleSwitch>

        <RadioButton
          id={`include ${query} ${version}`}
          name={name}
          flexDirection="row-reverse"
          defaultChecked={
            hasOverride === overrideTypes.IS_INCLUDED ? true : false
          }
          selectColour={colours.green}
          onChange={event => onIncludeChange(query, version, event)}
        >
          Always Include
        </RadioButton>
        <RadioButton
          id={`exclude ${query} ${version}`}
          name={name}
          flexDirection="row-reverse"
          defaultChecked={
            hasOverride === overrideTypes.IS_EXCLUDED ? true : false
          }
          selectColour={colours.red}
          onChange={event => onExcludeChange(query, version, event)}
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
