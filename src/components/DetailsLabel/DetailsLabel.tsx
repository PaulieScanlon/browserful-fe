import * as React from 'react';

import { BrowserLogo } from '../BrowserLogo';

import { LabelWrapper, LabelText, BoldText } from './styles';

interface IProps {
  label: string;
  logo?: string;
  percent?: number | string;
  statistic?: number | string;
}

export const DetailsLabel: React.SFC<IProps> = ({
  label,
  logo,
  percent,
  statistic
}: IProps) => {
  return (
    <LabelWrapper>
      {logo && <BrowserLogo logo={logo} />}
      <LabelText>{label}</LabelText>
      {percent && <BoldText>{percent}%</BoldText>}
      {statistic && <BoldText>{statistic}</BoldText>}
    </LabelWrapper>
  );
};
