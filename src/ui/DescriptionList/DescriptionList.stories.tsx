import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DescriptionList, DescriptionTerm, DescriptionDescription } from './';
import { variantTypes } from './DescriptionList';

import { LabelTextBold } from '../Typography';
import { colours, scaffolding } from '../../theme';
import { Icon } from '../Icon';

const stories = storiesOf('DescriptionList', module);

stories.add(
  'default usage',
  withInfo('DescriptionList renders an HTML Description List')(() => (
    <DescriptionList>
      <DescriptionTerm>Lorem Ipsum</DescriptionTerm>
      <DescriptionDescription>Dolor sit</DescriptionDescription>
    </DescriptionList>
  ))
);

stories.add(
  'bulletColour',
  withInfo('The bulletColour prop controls the colour of the bullet')(() => (
    <DescriptionList>
      <DescriptionTerm bulletColour={colours.teal}>Lorem Ipsum</DescriptionTerm>
      <DescriptionDescription>Dolor sit</DescriptionDescription>
    </DescriptionList>
  ))
);

stories.add(
  'variant:timeline',
  withInfo(
    `The variant prop accepts 'timeline' to add vertical lines between the bullets, defaults to bullet`
  )(() => (
    <DescriptionList variant={variantTypes.TIMELINE}>
      <DescriptionTerm>Lorem Ipsum 1</DescriptionTerm>
      <DescriptionDescription>Dolor sit 1</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 2</DescriptionTerm>
      <DescriptionDescription>Dolor sit 1</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 3</DescriptionTerm>
      <DescriptionDescription>Dolor sit 3</DescriptionDescription>
    </DescriptionList>
  ))
);

stories.add(
  'lastPadding',
  withInfo(
    'The lastPadding prop adds (x) padding-top to the last item in the list'
  )(() => (
    <DescriptionList lastPadding={50}>
      <DescriptionTerm>Lorem Ipsum 1</DescriptionTerm>
      <DescriptionDescription>Dolor sit 1</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 2</DescriptionTerm>
      <DescriptionDescription>Dolor sit 2</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 3</DescriptionTerm>
      <DescriptionDescription>Dolor sit 3</DescriptionDescription>
    </DescriptionList>
  ))
);

stories.add(
  'functional test',
  withInfo('Funtional test using LabelTextBold and Icon')(() => (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            marginTop: '22px',
            marginRight: scaffolding.gutterSm,
            marginBottom: '10px'
          }}
        >
          <Icon name="desktop" fill={colours.blue} />
        </div>

        <div
          style={{
            marginTop: '22px',
            marginRight: scaffolding.gutterSm,
            marginBottom: '10px'
          }}
        >
          <Icon name="mobile" fill={colours.teal} />
        </div>

        <div
          style={{
            marginTop: '22px',
            marginRight: scaffolding.gutterSm,
            marginBottom: '10px',
            paddingTop: '34px'
          }}
        >
          <Icon name="bars" fill={colours.pink} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          paddingRight: scaffolding.gutterLg
        }}
      >
        <DescriptionList lastPadding={40} variant={variantTypes.TIMELINE}>
          <DescriptionTerm bulletColour={colours.blue}>Desktop</DescriptionTerm>
          <DescriptionDescription>
            Dolor sit
            <LabelTextBold
              style={{
                position: 'absolute',
                right: '0px',
                top: `-${scaffolding.gutterMd}`
              }}
              fontColour={colours.blue}
            >
              1
            </LabelTextBold>
          </DescriptionDescription>

          <DescriptionTerm bulletColour={colours.teal}>Mobile</DescriptionTerm>
          <DescriptionDescription>
            Dolor sit
            <LabelTextBold
              style={{
                position: 'absolute',
                right: '0px',
                top: `-${scaffolding.gutterMd}`
              }}
              fontColour={colours.teal}
            >
              2
            </LabelTextBold>
          </DescriptionDescription>

          <DescriptionTerm
            bulletColour={colours.pink}
            fontColour={colours.pink}
          >
            <LabelTextBold fontColour={colours.pink}>Total</LabelTextBold>{' '}
          </DescriptionTerm>
          <DescriptionDescription>
            Dolor sit
            <LabelTextBold
              style={{
                position: 'absolute',
                right: '0px',
                top: `-${scaffolding.gutterMd}`
              }}
              fontColour={colours.pink}
            >
              3
            </LabelTextBold>
          </DescriptionDescription>
        </DescriptionList>
      </div>
    </div>
  ))
);
