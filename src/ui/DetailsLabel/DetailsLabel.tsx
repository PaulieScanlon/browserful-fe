import * as React from 'react';

import { BrowserLogo } from '../BrowserLogo';

import {
  LabelWrapper,
  LabelText,
  BoldText,
  BarChartWrapper,
  BarChart
} from './styles';

interface IProps {
  label: string;
  logo?: string;
  value?: {
    amount: string | number;
    suffix?: string;
  };
  showBar?: boolean;
}

export const DetailsLabel: React.SFC<IProps> = ({
  label,
  logo,
  value,
  showBar
}: IProps) => {
  return (
    <LabelWrapper>
      {logo && <BrowserLogo logo={logo} />}
      <LabelText>{label}</LabelText>
      {value && (
        <BoldText>
          {value.amount}
          {value.suffix}
        </BoldText>
      )}

      {showBar && value && (
        <BarChartWrapper>
          <BarChart width={value.amount} />
        </BarChartWrapper>
      )}
    </LabelWrapper>
  );
};
