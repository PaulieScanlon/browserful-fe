import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { VersatileGroup } from './VersatileGroup';
import { Versatile } from '../Versatile';
import { Icon } from '../Icon/Icon';
import {
  LabelTextRegular,
  LabelTextItalic,
  LabelTextBold
} from '../Typography';

import { colours } from '../../theme';

const stories = storiesOf('VersatileGroup', module);

const versatiles = (tilePadding: string) => (
  <React.Fragment>
    <Versatile
      bulletColour={colours.blue}
      renderStart={() => <Icon name="desktop" fill={colours.blue} />}
      renderContent={() => [
        <LabelTextRegular key="title">Desktop</LabelTextRegular>,
        <LabelTextItalic key="description" fontColour={colours.greyLight}>
          x included
        </LabelTextItalic>
      ]}
      renderEnd={() => (
        <LabelTextBold fontColour={colours.blue}>10</LabelTextBold>
      )}
    />
    <Versatile
      bulletColour={colours.teal}
      renderStart={() => <Icon name="mobile" fill={colours.teal} />}
      renderContent={() => [
        <LabelTextRegular key="title">Mobile</LabelTextRegular>,
        <LabelTextItalic key="description" fontColour={colours.greyLight}>
          x included
        </LabelTextItalic>
      ]}
      renderEnd={() => (
        <LabelTextBold fontColour={colours.teal}>5</LabelTextBold>
      )}
    />
    <Versatile
      tilePadding={tilePadding}
      renderStart={() => <Icon name="bars" fill={colours.pink} />}
      renderContent={() => [
        <LabelTextRegular key="title">Total</LabelTextRegular>,
        <LabelTextItalic key="description" fontColour={colours.greyLight}>
          desktop + mobile
        </LabelTextItalic>
      ]}
      renderEnd={() => (
        <LabelTextBold fontColour={colours.pink}>15</LabelTextBold>
      )}
    />
  </React.Fragment>
);

stories.add(
  'default usage',
  withInfo(
    'VersatileGroup can be used to dispaly multiple Versatile components'
  )(() => <VersatileGroup>{versatiles('')}</VersatileGroup>)
);

stories.add(
  'timeline',
  withInfo('The timeline prop adds a grey line between the bullets')(() => (
    <VersatileGroup timeline={true}>{versatiles('')}</VersatileGroup>
  ))
);

stories.add(
  'tilePadding',
  withInfo('The tilePadding prop adds padding to the top of the Versatile')(
    () => <VersatileGroup timeline={true}>{versatiles('30px')}</VersatileGroup>
  )
);
