import * as React from 'react';

import { ChipBody } from './styles';

interface IProps {
  era: number;
  variant: 'included' | 'excluded';
  isSelected?: boolean;
}

export const EraChip: React.SFC<IProps> = ({
  era,
  variant,
  isSelected
}: IProps) => {
  return (
    <ChipBody variant={variant} isSelected={isSelected}>
      {era}
    </ChipBody>
  );
};
