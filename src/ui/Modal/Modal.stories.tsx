import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { VersionChip } from '../VersionChip';
import { OverrideSelect } from '../OverrideSelect';

import { Modal } from './Modal';

const onAutoChange = (queryName, version, event) => {
  action('onAutoChange')(queryName, version, event.currentTarget);
};

const onIncludeChange = (queryName, version, event) => {
  action('onIncludeChange')(queryName, version, event.currentTarget);
};

const onExcludeChange = (queryName, version, event) => {
  action('onExcludeChange')(queryName, version, event.currentTarget);
};

const commonProps = {
  friendlyName: 'Chrome',
  queryName: 'Chrome 70',
  version: '70',
  logo: 'chrome'
};

const stories = storiesOf('Modal', module);

stories.add(
  'default usage',
  withInfo('Modal requires a renderProp for both the trigger and the content ')(
    () => (
      <Modal
        renderTrigger={() => <VersionChip {...commonProps} />}
        renderContent={() => (
          <OverrideSelect
            {...commonProps}
            name={commonProps.friendlyName}
            onAutoChange={(queryName, version, event) =>
              onAutoChange(queryName, version, event)
            }
            onIncludeChange={(queryName, version, event) =>
              onIncludeChange(queryName, version, event)
            }
            onExcludeChange={(queryName, version, event) =>
              onExcludeChange(queryName, version, event)
            }
          />
        )}
      />
    )
  )
);
