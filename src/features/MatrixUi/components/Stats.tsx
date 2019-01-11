import * as React from 'react';
import tinycolor from 'tinycolor2';

import { overrides } from '../../../utils/matrix-utils/enums';

import { IProps } from '../types';

import { DoughnutChart } from '../../../ui/DoughnutChart';

import {
  LabelTextRegular,
  LabelTextBold,
  LabelTextItalic
} from '../../../ui/Typography';

import {
  ChartContainer,
  ChartArea,
  DetailsContainer,
  StatsArea,
  TotalsArea,
  LegendArea,
  LegendDot
} from './styles';

import { colours, scaffolding } from '../../../theme';

export const Stats: React.SFC<IProps> = ({
  includedList,
  excludedList,
  total
}: IProps) => {
  const chartData = [
    {
      name: 'desktop',
      value: includedList.desktop,
      key: overrides.IS_INCLUDED
    },
    {
      name: 'mobile',
      value: includedList.mobile,
      key: overrides.IS_INCLUDED
    },
    {
      name: 'remaining-excluded',
      value: excludedList.desktop + excludedList.mobile,
      key: overrides.IS_EXCLUDED
    }
  ];
  return (
    <React.Fragment>
      <ChartContainer>
        <LegendArea>
          <LegendDot backgroundColour={colours.white} />
          <LabelTextRegular
            fontColour={colours.white}
            style={{ marginRight: scaffolding.gutterLg }}
          >
            Included
          </LabelTextRegular>
          <LegendDot
            backgroundColour={tinycolor(colours.white)
              .setAlpha(0.5)
              .toString()}
          />
          <LabelTextRegular fontColour={colours.white}>
            Excluded
          </LabelTextRegular>
        </LegendArea>
        <ChartArea>
          <DoughnutChart
            data={chartData}
            segmentColour={colours.white}
            strokeColour={colours.pink}
          />
        </ChartArea>
        <DetailsContainer>
          <StatsArea>
            <LabelTextBold>{includedList.desktop}&nbsp;</LabelTextBold>
            <LabelTextItalic>of&nbsp;</LabelTextItalic>
            <LabelTextBold>&nbsp;{total.desktop}</LabelTextBold>
            <LabelTextRegular>&nbsp;desktop&nbsp;/&nbsp;</LabelTextRegular>

            <LabelTextBold>{includedList.mobile}&nbsp;</LabelTextBold>
            <LabelTextItalic>of&nbsp;</LabelTextItalic>
            <LabelTextBold>&nbsp;{total.mobile}</LabelTextBold>
            <LabelTextRegular>&nbsp;mobile</LabelTextRegular>
          </StatsArea>
          <TotalsArea>
            <LabelTextBold
              fontColour={colours.pink}
              style={{
                fontSize: '64px',
                lineHeight: '68px',
                color: colours.pink,
                marginLeft: scaffolding.gutterXl
              }}
            >
              {includedList.desktop + includedList.mobile}
            </LabelTextBold>
            <LabelTextItalic>&nbsp;of&nbsp;</LabelTextItalic>
            <LabelTextRegular>
              &nbsp;{total.desktop + total.mobile}
            </LabelTextRegular>
          </TotalsArea>
        </DetailsContainer>
      </ChartContainer>
    </React.Fragment>
  );
};
