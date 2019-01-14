import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

import { addFillToData } from './utils';
import { ChartWrapper } from './styles';

export interface IData {
  name: string;
  value: number;
  fill?: string;
  stroke?: string;
}

interface IProps {
  data: Array<IData>;
}

export const DoughnutChart: React.SFC<IProps> = ({ data }: IProps) => {
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
            innerRadius={'70%'}
            outerRadius={'100%'}
            paddingAngle={2}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};
