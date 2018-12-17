import * as React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionChip } from './VersionChip';

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
        browser="Chrome"
        version="70"
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
  'isIncluded: true',
  withInfo(
    'The isIncluded prop is used to denote if a browser/version is included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        isIncluded={true}
        browser="Chrome"
        version="70"
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
  'isIncluded: false',
  withInfo(
    'The isIncluded prop is used to denote if a browser/version is included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        isIncluded={false}
        browser="Chrome"
        version="70"
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
  'hasOverride: isIncluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        hasOverride="isIncluded"
        browser="Chrome"
        version="70"
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
  'hasOverride: isExcluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip
        hasOverride="isExcluded"
        browser="Chrome"
        version="70"
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
  'functional test A',
  withInfo('regardless of if isIncluded, hasOverride should always override')(
    () => (
      <StoryDiv>
        <VersionChip
          isIncluded={false}
          hasOverride="isIncluded"
          browser="Chrome"
          version="70"
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
    )
  )
);

stories.add(
  'functional test B',
  withInfo('regardless of if isIncluded, hasOverride should always override')(
    () => (
      <StoryDiv>
        <VersionChip
          isIncluded={true}
          hasOverride="isExcluded"
          browser="Chrome"
          version="70"
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
    )
  )
);
