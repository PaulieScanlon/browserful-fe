import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { SelectPopover } from './SelectPopover';

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

const stories = storiesOf('SelectPopover', module);

stories.add(
  'default usage',
  withInfo(
    'SelectPopover is x3 HTML radio inputs and requires the following props: browser, version and a name which acts as the group name'
  )(() => (
    <SelectPopover
      browser={mockData[0].queryName}
      version={mockData[0].versions[0].id}
      name="storybook-popover"
      isIncluded={false}
      hasOverride={false}
    />
  ))
);

stories.add(
  'isIncluded & hasOverride',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <SelectPopover
      browser={mockData[0].queryName}
      version={mockData[0].versions[0].id}
      name="storybook-popover"
      isIncluded={true}
      hasOverride={true}
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
  ))
);

stories.add(
  'onAutoChange',
  withInfo('onAutoChange fires when the ToggleSwitch onChange fires')(() => (
    <SelectPopover
      browser={mockData[0].queryName}
      version={mockData[0].versions[0].id}
      name="storybook-popover"
      isIncluded={false}
      hasOverride={false}
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
  ))
);

stories.add(
  'onIncludeChange',
  withInfo('onIncludeChange fires when the include RadioButton onChange fires')(
    () => (
      <SelectPopover
        browser={mockData[0].queryName}
        version={mockData[0].versions[0].id}
        name="storybook-popover"
        isIncluded={true}
        hasOverride={false}
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
    )
  )
);

stories.add(
  'onExcludeChange',
  withInfo('onExcludeChange fires when the exclude RadioButton onChange fires')(
    () => (
      <SelectPopover
        browser={mockData[0].queryName}
        version={mockData[0].versions[0].id}
        name="storybook-popover"
        isIncluded={false}
        hasOverride={false}
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
    )
  )
);
