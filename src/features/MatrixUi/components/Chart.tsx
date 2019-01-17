import * as React from 'react';

import { IProps } from '../types';

import { DoughnutChart } from '../../../ui/DoughnutChart';
import { Icon } from '../../../ui/Icon';
import { GraphPaper } from '../../../ui/GraphPaper';

import { ChartArea, ChartIcon } from './styles';

import { colours } from '../../../theme';

export const Chart: React.SFC<IProps> = ({
  includedTotal,
  excludedTotal
}: IProps) => {
  const chartData = [
    {
      name: 'desktop',
      value: includedTotal.desktop,
      fill: colours.blue,
      stroke: colours.blue
    },
    {
      name: 'mobile',
      value: includedTotal.mobile,
      fill: colours.teal,
      stroke: colours.teal
    },
    {
      name: 'desktop-excluded',
      value: excludedTotal.desktop,
      fill: colours.offWhite,
      stroke: colours.offWhite
    },
    {
      name: 'mobile-excluded',
      value: excludedTotal.mobile,
      fill: colours.offWhite,
      stroke: colours.offWhite
    }
  ];
  return (
    <React.Fragment>
      <GraphPaper opacity={0.2} />
      <ChartArea>
        <DoughnutChart data={chartData} />
        <ChartIcon>
          <Icon name="bars" size="lg" fill={colours.white} />
        </ChartIcon>
      </ChartArea>
    </React.Fragment>
  );
};
