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
  percent?: number | string;
  statistic?: number | string;
  showBar?: boolean;
}

export const DetailsLabel: React.SFC<IProps> = ({
  label,
  logo,
  percent,
  statistic,
  showBar
}: IProps) => {
  return (
    <LabelWrapper>
      {logo && <BrowserLogo logo={logo} />}
      <LabelText>{label}</LabelText>
      {percent && <BoldText>{percent}%</BoldText>}
      {statistic && <BoldText>{statistic}</BoldText>}
      {showBar && percent && (
        <BarChartWrapper>
          <BarChart width={percent} />
        </BarChartWrapper>
      )}
    </LabelWrapper>
  );
};
