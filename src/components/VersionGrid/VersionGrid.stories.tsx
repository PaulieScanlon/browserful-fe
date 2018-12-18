import * as React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionGrid } from './VersionGrid';

import { createMatrix } from '../../utils/createMatrix';
const mockData = createMatrix('last 2 versions', [''], ['']);

const stories = storiesOf('VersionGrid', module);

const onAutoChange = (browser, version, event) => {
  action('onAutoChange')(browser, version, event.currentTarget);
};

const onIncludeChange = (browser, version, event) => {
  action('onIncludeChange')(browser, version, event.currentTarget);
};

const onExcludeChange = (browser, version, event) => {
  action('onExcludeChange')(browser, version, event.currentTarget);
};

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
      <VersionGrid
        data={mockData[8]}
        onAutoChange={(event, browser, version) =>
          onAutoChange(event, browser, version)
        }
        onIncludeChange={(event, browser, version) =>
          onIncludeChange(event, browser, version)
        }
        onExcludeChange={(event, browser, version) =>
          onExcludeChange(event, browser, version)
        }
      />
    </StoryDiv>
  ))
);
