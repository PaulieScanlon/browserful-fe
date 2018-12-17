import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { SelectPopover } from './SelectPopover';

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
    <SelectPopover browser="Chrome" version="70" name="storybook-popover" />
  ))
);

stories.add(
  'hasOverride: isIncluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <SelectPopover
      hasOverride="isIncluded"
      browser="Chrome"
      version="70"
      name="storybook-popover"
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
  'hasOverride: isExcluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <SelectPopover
      hasOverride="isExcluded"
      browser="Chrome"
      version="70"
      name="storybook-popover"
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
  'on[x]Change',
  withInfo(
    'There are x3 onChange listerns: onAutoChange, onIncludeChange,  onExcludeChange, which fire when a ToggleSwitch or RadioButton onChange fires'
  )(() => (
    <SelectPopover
      browser="Chrome"
      version="70"
      name="storybook-popover"
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
