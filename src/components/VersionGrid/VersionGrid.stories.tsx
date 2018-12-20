import * as React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionGrid } from './VersionGrid';

import { createMatrix } from '../../utils/createMatrix';
const mockData = createMatrix('last 2 versions', [''], [''])[7];

const stories = storiesOf('VersionGrid', module);

const StoryDiv = styled.div({
  label: 'story-div',
  height: '170px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center'
});

stories.add(
  'default usage',
  withInfo('VersionGrid displays the VersionChips in a grid')(() => (
    <StoryDiv>
      <VersionGrid data={mockData} />
    </StoryDiv>
  ))
);
