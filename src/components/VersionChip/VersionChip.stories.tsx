import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { VersionChip } from './VersionChip';

import browserslist from 'browserslist';
import { friendlyIfy } from '../../utils/friendlyIfy';

const mockData = friendlyIfy(browserslist(['last 1 Chrome versions']));

const stories = storiesOf('VersionChip', module);

const onChange = (event, browser, version) => {
  action('onChange')(event.currentTarget, browser, version);
};

stories.add(
  'default usage',
  withInfo('The browser and version prop are used on the onChange callback')(
    () => (
      <VersionChip
        browser={mockData[0].name}
        version={mockData[0].versions[0].id}
        onChange={(event, browser, version) =>
          onChange(event, browser, version)
        }
      />
    )
  )
);

stories.add(
  '!isIncluded & defaultChecked',
  withInfo('The defaultChecked prop is the checked status of the checkbox')(
    () => (
      <VersionChip
        defaultChecked={true}
        browser={mockData[0].name}
        version={mockData[0].versions[0].id}
        onChange={(event, browser, version) =>
          onChange(event, browser, version)
        }
      />
    )
  )
);

stories.add(
  'isIncluded',
  withInfo('The isIncluded prop shows if a browser/version is included')(() => (
    <VersionChip
      isIncluded={true}
      browser={mockData[0].name}
      version={mockData[0].versions[0].id}
      onChange={(event, browser, version) => onChange(event, browser, version)}
    />
  ))
);

stories.add(
  'isIncluded & defaultChecked',
  withInfo('The defaultChecked prop is the checked status of the checkbox')(
    () => (
      <VersionChip
        defaultChecked={true}
        isIncluded={true}
        browser={mockData[0].name}
        version={mockData[0].versions[0].id}
        onChange={(event, browser, version) =>
          onChange(event, browser, version)
        }
      />
    )
  )
);
