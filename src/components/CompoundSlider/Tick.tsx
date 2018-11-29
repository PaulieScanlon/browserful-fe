import * as React from 'react';

import { TickMarksWrapper, TickMarksStyles, TickNumbersStyles } from './styles';

interface IProps {
  tick: any;
  count: any;
}

export const Tick: React.SFC<IProps> = ({ tick, count }: IProps) => {
  return (
    <TickMarksWrapper>
      <TickMarksStyles
        style={{
          left: `${tick.percent}%`
        }}
      />
      <TickNumbersStyles
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`
        }}
      >
        {tick.value}
      </TickNumbersStyles>
    </TickMarksWrapper>
  );
};
