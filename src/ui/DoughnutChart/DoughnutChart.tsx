import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

import { addFillToData } from './utils';
import { ChartWrapper } from './styles';

import { colours } from '../../theme';

export interface IData {
  name: string;
  value: number;
  key: string;
}

interface IProps {
  data: Array<IData>;
  segmentColour?: string;
}

export const DoughnutChart: React.SFC<IProps> = ({
  data,
  segmentColour
}: IProps) => {
  return (
    <ChartWrapper>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={320}
        className="responsive-container"
      >
        <PieChart>
          <Pie
            dataKey="value"
            data={addFillToData(data, segmentColour)}
            startAngle={220}
            endAngle={-40}
            innerRadius={'70%'}
            outerRadius={'100%'}
            paddingAngle={2}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

DoughnutChart.defaultProps = {
  segmentColour: colours.pink
};