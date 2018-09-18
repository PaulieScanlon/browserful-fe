import * as React from 'react';

import { ChipButton } from './styles';

interface IProps {
  browser: string;
  version: number;
  variant: 'included' | 'excluded';
  isSelected?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export const VersionChip: React.SFC<IProps> = ({
  browser,
  version,
  variant,
  isSelected,
  onClick
}: IProps) => {
  return (
    <ChipButton
      variant={variant}
      isSelected={isSelected}
      onClick={event => onClick(event, `${browser}_${version}`)}
    >
      {version}
    </ChipButton>
  );
};
