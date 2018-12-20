import * as React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionChip } from './VersionChip';

const stories = storiesOf('VersionChip', module);

import { createMatrix } from '../../utils/createMatrix';
const mockData = createMatrix('last 2 versions', [''], [''])[7];

const commonProps = {
  friendlyName: mockData.friendlyName,
  queryName: mockData.queryName,
  version: mockData.versions[0].id,
  logo: mockData.logo
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
  withInfo(
    'The browser and version prop are used for the on[x]Change callbacks'
  )(() => (
    <StoryDiv>
      <VersionChip {...commonProps} />
    </StoryDiv>
  ))
);

stories.add(
  'isIncluded: true',
  withInfo(
    'The isIncluded prop is used to denote if a browser/version is included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip isIncluded={true} {...commonProps} />
    </StoryDiv>
  ))
);

stories.add(
  'isIncluded: false',
  withInfo(
    'The isIncluded prop is used to denote if a browser/version is included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip isIncluded={false} {...commonProps} />
    </StoryDiv>
  ))
);

stories.add(
  'hasOverride: isIncluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip hasOverride="isIncluded" {...commonProps} />
    </StoryDiv>
  ))
);

stories.add(
  'hasOverride: isExcluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <StoryDiv>
      <VersionChip hasOverride="isExcluded" {...commonProps} />
    </StoryDiv>
  ))
);

stories.add(
  'functional test A',
  withInfo('regardless of if isIncluded, hasOverride should always override')(
    () => (
      <StoryDiv>
        <VersionChip isIncluded={false} {...commonProps} />
      </StoryDiv>
    )
  )
);

stories.add(
  'functional test B',
  withInfo('regardless of if isIncluded, hasOverride should always override')(
    () => (
      <StoryDiv>
        <VersionChip isIncluded={true} {...commonProps} />
      </StoryDiv>
    )
  )
);
