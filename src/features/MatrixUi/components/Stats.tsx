import * as React from 'react';

import { IProps } from '../types';

import { DoughnutChart } from '../../../ui/DoughnutChart';
import { LabelTextRegular, LabelTextBold } from '../../../ui/Typography';

import {
  ChartContainer,
  ChartArea,
  StatArea,
  StatBox,
  StatDot
} from './styles';

import { colours } from '../../../theme';

export const Stats: React.SFC<IProps> = ({
  includedList,
  excludedList
}: IProps) => {
  const chartData = [
    {
      name: 'desktop',
      value: includedList.desktop,
      fill: colours.blue,
      stroke: colours.blue
    },
    {
      name: 'mobile',
      value: includedList.mobile,
      fill: colours.teal,
      stroke: colours.teal
    },
    {
      name: 'desktop-excluded',
      value: excludedList.desktop,
      fill: colours.offWhite,
      stroke: colours.offWhite
    },
    {
      name: 'mobile-excluded',
      value: excludedList.mobile,
      fill: colours.offWhite,
      stroke: colours.offWhite
    }
  ];
  return (
    <React.Fragment>
      <ChartContainer>
        <ChartArea>
          <DoughnutChart
            data={chartData}
            segmentColour={colours.white}
            strokeColour={colours.white}
          />
        </ChartArea>
        <StatArea>
          <StatBox className="stat-box">
            <LabelTextRegular>
              <StatDot dotColour={colours.blue} />
              Desktop
            </LabelTextRegular>
            <LabelTextBold>{includedList.desktop}</LabelTextBold>
          </StatBox>
          <StatBox className="stat-box">
            <LabelTextRegular>
              <StatDot dotColour={colours.teal} />
              Mobile
            </LabelTextRegular>
            <LabelTextBold>{includedList.mobile}</LabelTextBold>
          </StatBox>
          <StatBox className="stat-box">
            <LabelTextRegular>
              <StatDot dotColour={colours.pink} />
              Total
            </LabelTextRegular>
            <LabelTextBold>
              {includedList.desktop + includedList.mobile}
            </LabelTextBold>
          </StatBox>
        </StatArea>
      </ChartContainer>
    </React.Fragment>
  );
};
