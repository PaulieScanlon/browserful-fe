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

import { createMatrix } from '../../utils/createMatrix';
const mockData = createMatrix('last 2 versions', [''], [''])[7];

const commonProps = {
  friendlyName: mockData.friendlyName,
  queryName: mockData.queryName,
  version: mockData.versions[0].id,
  logo: mockData.logo
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
            name="storybook-override-select"
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
