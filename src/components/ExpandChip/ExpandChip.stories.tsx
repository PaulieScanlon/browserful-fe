import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

import { ExpandChip } from './ExpandChip';

const store = new Store({
  isExpanded: true
});

const stories = storiesOf('ExpandChip', module);

const onClick = (event, store) => {
  store.set({ isExpanded: !store.get('isExpanded') });
  action('onExpandClick')(
    event.currentTarget,
    `isExpanded: ${store.get('isExpanded')}`
  );
};

stories.add(
  'usage',
  withInfo(
    'ExpandChip is used in BrowserCard and contains an onClick to expand the BrowserCard. The isExpaned prop controls the rotation of the chevron'
  )(() => (
    <State store={store}>
      <ExpandChip isExpanded={true} onClick={event => onClick(event, store)} />
    </State>
  ))
);
