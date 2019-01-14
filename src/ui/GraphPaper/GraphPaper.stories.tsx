import * as React from 'react';
import styled from 'react-emotion';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { GraphPaper } from './GraphPaper';
import { DoughnutChart } from '../DoughnutChart';
import { data } from '../DoughnutChart/DoughnutChart.stories';

const stories = storiesOf('GraphPaper', module);

const DemoDiv = styled.div({
  label: 'demo-div',
  position: 'relative',
  width: '100%',
  height: '194px',
  boxSizing: 'border-box'
});

stories.add(
  'default usage',
  withInfo('The GraphPaper component draws math style grid lines')(() => (
    <DemoDiv>
      <GraphPaper />
    </DemoDiv>
  ))
);

stories.add(
  'opacity',
  withInfo('The opacity prop controls the opacity of the GraphPaper')(() => (
    <DemoDiv>
      <GraphPaper opacity={0.2} />
    </DemoDiv>
  ))
);

stories.add(
  'renderContent',
  withInfo(
    'The renderContent prop renders a ReactNode or ReactChild and places it at center, center'
  )(() => (
    <DemoDiv>
      <GraphPaper renderContent={() => <div>Some content</div>} />
    </DemoDiv>
  ))
);

stories.add(
  'functional test',
  withInfo(
    'The renderContent prop renders a ReactNode or ReactChild and places it at center, center'
  )(() => (
    <DemoDiv>
      <GraphPaper
        opacity={0.2}
        renderContent={() => <DoughnutChart data={data} />}
      />
    </DemoDiv>
  ))
);
