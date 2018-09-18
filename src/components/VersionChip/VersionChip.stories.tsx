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
      variant="included"
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'included',
  withInfo('included is green and is used when a browser version is included')(
    () => (
      <VersionChip
        browser="Chrome"
        version={72}
        variant="included"
        onClick={(event, id) => onClick(event, id)}
      />
    )
  )
);

stories.add(
  'included & isSelected',
  withInfo('isSelected adds a border')(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      variant="included"
      isSelected
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'excluded',
  withInfo('excluded is red and is used when a browser version is excluded')(
    () => (
      <VersionChip
        browser="Chrome"
        version={72}
        variant="excluded"
        onClick={(event, id) => onClick(event, id)}
      />
    )
  )
);

stories.add(
  'excluded & isSelected',
  withInfo('isSelected adds a border')(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      variant="excluded"
      isSelected
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
      variant="included"
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
      variant="included"
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
      variant="included"
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
          variant="included"
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={2}
          variant="excluded"
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={3}
          variant="included"
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={4}
          variant="excluded"
          isSelected
          onClick={(event, id) => onClick(event, id)}
        />
      </div>
      <div>
        <VersionChip
          browser="Chrome"
          version={5}
          variant="excluded"
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={6}
          variant="included"
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={7}
          variant="excluded"
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={8}
          variant="included"
          isSelected
          onClick={(event, id) => onClick(event, id)}
        />
      </div>
    </div>
  ))
);
