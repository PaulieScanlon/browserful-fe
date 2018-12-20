import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { OverrideSelect } from './OverrideSelect';

const onAutoChange = (browser, version, event) => {
  action('onAutoChange')(browser, version, event.currentTarget);
};

const onIncludeChange = (browser, version, event) => {
  action('onIncludeChange')(browser, version, event.currentTarget);
};

const onExcludeChange = (browser, version, event) => {
  action('onExcludeChange')(browser, version, event.currentTarget);
};

import { createMatrix } from '../../utils/createMatrix';
const mockData = createMatrix('last 2 versions', [''], [''])[7];

const commonProps = {
  friendlyName: mockData.friendlyName,
  queryName: mockData.queryName,
  version: mockData.versions[0].id,
  logo: mockData.logo
};

const stories = storiesOf('OverrideSelect', module);

stories.add(
  'default usage',
  withInfo(
    '///// TODO THIS NEEDS TO BE A CONNECTED COMPONENT TO PASS THE ONCHANGE VALUES ON TO REDUX /////   OverrideSelect is x3 HTML radio inputs and requires the following props: browser, version and a name which acts as the group name'
  )(() => <OverrideSelect {...commonProps} name="storybook-override-select" />)
);

stories.add(
  'hasOverride: isIncluded',
  withInfo(
    'The hasOverride prop is used to denote if a browser/version is manually included or excluded'
  )(() => (
    <OverrideSelect
      {...commonProps}
      name="storybook-override-select"
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
    <OverrideSelect
      {...commonProps}
      name="storybook-override-select"
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
    <OverrideSelect
      {...commonProps}
      name="storybook-override-select"
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
