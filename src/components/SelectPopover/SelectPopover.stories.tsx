import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { SelectPopover } from './SelectPopover';

const onAutoChange = (event, browser, version) => {
  action('onAutoChange')(event.currentTarget, browser, version);
};

const onIncludeChange = (event, browser, version) => {
  action('onIncludeChange')(event.currentTarget, browser, version);
};

const onExcludeChange = (event, browser, version) => {
  action('onExcludeChange')(event.currentTarget, browser, version);
};

const stories = storiesOf('SelectPopover', module);

stories.add(
  'default usage',
  withInfo(
    'SelectPopover is x3 HTML radio inputs and requires the following props: browser, version and a name which acts as the group name'
  )(() => (
    <SelectPopover browser="Chrome" version={70} name="storybook-popover" />
  ))
);

stories.add(
  'onAutoChange',
  withInfo('onAutoChange fires when the ToggleSwitch onChange fires')(() => (
    <SelectPopover
      browser="Chrome"
      version={70}
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
  'onIncludeChange',
  withInfo('onIncludeChange fires when the include RadioButton onChange fires')(
    () => (
      <SelectPopover
        browser="Chrome"
        version={70}
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
    )
  )
);

stories.add(
  'onExcludeChange',
  withInfo('onExcludeChange fires when the exclude RadioButton onChange fires')(
    () => (
      <SelectPopover
        browser="Chrome"
        version={70}
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
    )
  )
);
