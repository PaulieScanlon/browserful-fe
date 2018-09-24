import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

const data2 = require('../../mock-data/data-2.0.modifed.json');

import { BrowserCard } from './BrowserCard';

const store = new Store({
  isExpanded: true
});

const stories = storiesOf('BrowserCard', module);

const onExpandClick = (event, store) => {
  store.set({ isExpanded: !store.get('isExpanded') });
  action('onExpandClick')(
    event.currentTarget,
    `isExpanded: ${store.get('isExpanded')}`
  );
};

const onVersionClick = (event, id) => {
  action('onVersionClick')(event.currentTarget, id);
};

stories.add(
  'default usage',
  withInfo('BrowserCard displays versionChips and a other stuff..')(() => (
    <State store={store}>
      <BrowserCard
        data={data2.agents.edge}
        onExpandClick={event => onExpandClick(event, store)}
        onVersionClick={(event, id) => onVersionClick(event, id)}
      />
    </State>
  ))
);
