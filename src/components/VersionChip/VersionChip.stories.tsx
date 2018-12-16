import * as React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionChip } from './VersionChip';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix(browserslist(['last 1 Chrome versions']));

const onAutoChange = (browser, version, event) => {
  action('onAutoChange')(browser, version, event.currentTarget);
};

const onIncludeChange = (browser, version, event) => {
  action('onIncludeChange')(browser, version, event.currentTarget);
};

const onExcludeChange = (browser, version, event) => {
  action('onExcludeChange')(browser, version, event.currentTarget);
};

const stories = storiesOf('VersionChip', module);

const StoryDiv = styled.div({
  label: 'story-div',
  height: '170px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center'
});

stories.add(
  'default usage',
  withInfo(
    'The browser and version prop are used for the on[x]Change callbacks'
  )(() => (
    <StoryDiv>
      <VersionChip
        browser={mockData[0].queryName}
        version={mockData[0].versions[0].id}
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

stories.add(
  'isIncluded',
  withInfo(
    'The isIncluded prop is used to denote if a browser/version is included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        isIncluded={true}
        browser={mockData[0].queryName}
        version={mockData[0].versions[0].id}
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

stories.add(
  'isIncluded & hasOverride',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        isIncluded={true}
        hasOverride={true}
        browser={mockData[0].queryName}
        version={mockData[0].versions[0].id}
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

stories.add(
  '!isIncluded & hasOverride',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        isIncluded={false}
        hasOverride={true}
        browser={mockData[0].queryName}
        version={mockData[0].versions[0].id}
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
