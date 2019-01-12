import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

import { addFillToData } from './utils';
import { ChartWrapper } from './styles';

import { colours } from '../../theme';

export interface IData {
  name: string;
  value: number;
  fill?: string;
  stroke?: string;
}

interface IProps {
  data: Array<IData>;
  segmentColour?: string;
  strokeColour?: string;
}

export const DoughnutChart: React.SFC<IProps> = ({
  data,
  segmentColour,
  strokeColour
}: IProps) => {
  return (
    <ChartWrapper>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="responsive-container"
      >
        <PieChart>
          <Pie
            dataKey="value"
            data={addFillToData(data)}
            startAngle={90}
            endAngle={450}
            // startAngle={220}
            // endAngle={-40}
            innerRadius={'70%'}
            outerRadius={'100%'}
            paddingAngle={2}
            fill={segmentColour}
            stroke={strokeColour}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

DoughnutChart.defaultProps = {
  segmentColour: colours.pink,
  strokeColour: colours.white
};
