import * as React from 'react';

import { BrowserLogo } from '../BrowserLogo';

import { LabelWrapper } from './styles';

import { LabelTextRegular } from '../Typography';

interface IProps {
  label: string;
  logo?: string;
  renderStats?(): React.ReactNode;
}

export const DetailsLabel: React.SFC<IProps> = ({
  label,
  logo,
  renderStats
}: IProps) => {
  return (
    <LabelWrapper>
      {logo && <BrowserLogo logo={logo} />}
      <LabelTextRegular className="label">{label}</LabelTextRegular>
      {renderStats()}
    </LabelWrapper>
  );
};

DetailsLabel.defaultProps = {
  renderStats: () => null
};
