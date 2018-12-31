import * as React from 'react';

import { BrowserLogo } from '../BrowserLogo';

import { LabelWrapper, LabelText, BoldText } from './styles';

interface IProps {
  label: string;
  logo?: string;
  value?: {
    amount: string | number;
    suffix?: string;
  };
}

export const DetailsLabel: React.SFC<IProps> = ({
  label,
  logo,
  value
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
    </LabelWrapper>
  );
};
