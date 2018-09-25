import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

import { VersionChip } from './VersionChip';

const store = new Store({
  always: false
});

const stories = storiesOf('VersionChip', module);

const onClick = (event, id) => {
  action('onClick')(event.currentTarget, id);
};

const onClickWithStore = (event, id, store) => {
  store.set({ always: !store.get('always') });
  action('onClick')(event.currentTarget, id, `always: ${store.get('always')}`);
};

stories.add(
  'default usage',
  withInfo(
    'The browser and version prop are used to create the id which is passed back in the onClick handler'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'onClick & isIncluded',
  withInfo(
    'This story is purely to demonstrate the oncClick and receiveing the always prop from a state'
  )(() => (
    <State store={store}>
      <VersionChip
        browser="Chrome"
        version={72}
        isIncluded={true}
        onClick={(event, id) => onClickWithStore(event, id, store)}
      />
    </State>
  ))
);

stories.add(
  'onClick & !isIncluded',
  withInfo(
    'This story is purely to demonstrate the oncClick and receiveing the always prop from a state'
  )(() => (
    <State store={store}>
      <VersionChip
        browser="Chrome"
        version={72}
        onClick={(event, id) => onClickWithStore(event, id, store)}
      />
    </State>
  ))
);

stories.add(
  'isIncluded',
  withInfo(
    'isIncluded:true is green and is used when a browser version is included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={true}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  '!isIncluded',
  withInfo(
    'isIncluded:false is red and is used when a browser version is not included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={false}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'isIncluded & always',
  withInfo(
    'always:true adds a border of the correct colour for the isIncluded sate and is used when a browser is always included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={true}
      always={true}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  '!isIncluded & always',
  withInfo(
    'always:true adds a border of the correct colour for the isIncluded sate and is used when a browser is always not included'
  )(() => (
    <VersionChip
      browser="Chrome"
      version={72}
      isIncluded={false}
      always={true}
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
          isIncluded={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={3}
          isIncluded={true}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={2}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={4}
          isIncluded={false}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
      </div>
      <div>
        <VersionChip
          browser="Chrome"
          version={5}
          isIncluded={false}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={6}
          onClick={(event, id) => onClick(event, id)}
        />

        <VersionChip
          browser="Chrome"
          version={7}
          isIncluded={true}
          always={true}
          onClick={(event, id) => onClick(event, id)}
        />
        <VersionChip
          browser="Chrome"
          version={8}
          isIncluded={true}
          onClick={(event, id) => onClick(event, id)}
        />
      </div>
    </div>
  ))
);
