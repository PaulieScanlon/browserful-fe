import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionChip } from './VersionChip';

const stories = storiesOf('VersionChip', module);

const onClick = (event, id) => {
  action('onClick')(event.currentTarget, id);
};

stories.add(
  'usage',
  withInfo(
    'The browser and version prop are used to create the id which is passed back in the onClick handler'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'isIncluded:true',
  withInfo(
    'isIncluded:true is green and is used when a browser version is included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={true}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'isIncluded:false',
  withInfo(
    'isIncluded:false is red and is used when a browser version is not included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={false}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'isIncluded & always',
  withInfo(
    'always:true adds a border of the correct colour for the isIncluded sate and is used when a browser is always included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={true}
      always={true}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  '!isIncluded & always',
  withInfo(
    'always:true adds a border of the correct colour for the isIncluded sate and is used when a browser is always not included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={false}
      always={true}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'single digit',
  withInfo('Displays a single digit and maintains width')(() => (
    <VersionChip
      browser="Chrome"
      version={1}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'double digit',
  withInfo('Displays a double digit and maintains width')(() => (
    <VersionChip
      browser="Chrome"
      version={10}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'tripple digit',
  withInfo('Displays a tripple digit and maintains width')(() => (
    <VersionChip
      browser="Chrome"
      version={100}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'in a grid',
  withInfo(
    'VersionChip has margin right and bottom to maintain space when used in a grid'
  )(() => (
    <div>
      <div>
        <VersionChip
          browser="Chrome"
          version={1}
          isIncluded={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={3}
          isIncluded={true}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={2}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={4}
          isIncluded={false}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
      </div>
      <div>
        <VersionChip
          browser="Chrome"
          version={5}
          isIncluded={false}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={6}
          onClick={(event, id) => onClick(event, id)}
        />

        <VersionChip
          browser="Chrome"
          version={7}
          isIncluded={true}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={8}
          isIncluded={true}
          onClick={(event, id) => onClick(event, id)}
        />
      </div>
    </div>
  ))
);
