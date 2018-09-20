import * as React from 'react';

import { ChipButton } from './styles';

interface IProps {
  browser: string;
  version: number;
  isIncluded?: boolean;
  always?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export const VersionChip: React.SFC<IProps> = ({
  browser,
  version,
  isIncluded,
  always,
  onClick
}: IProps) => {
  return (
    <ChipButton
      isIncluded={isIncluded}
      always={always}
      onClick={event => onClick(event, `${browser}_${version}`)}
    >
      {version}
    </ChipButton>
  );
};

VersionChip.defaultProps = {
  isIncluded: false,
  always: false
};
