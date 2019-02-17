import * as React from 'react';

import { IProps } from '../types';

import { VersatileGroup } from '../../../ui/VersatileGroup';
import { Versatile } from '../../../ui/Versatile';
import { Icon } from '../../../ui/Icon/Icon';
import {
  LabelTextRegular,
  LabelTextItalic,
  LabelTextBold
} from '../../../ui/Typography';

import { StatArea } from './styles';

import { colours } from '../../../theme';

export const Stats: React.SFC<IProps> = ({
  includedTotal,
  excludedTotal
}: IProps) => {
  return (
    <StatArea>
      <VersatileGroup timeline={true}>
        <Versatile
          bulletColour={colours.blue}
          renderStart={() => <Icon name="desktop" fill={colours.blue} />}
          renderContent={() => [
            <LabelTextRegular key="title" fontColour={colours.greyLight}>
              Desktop
            </LabelTextRegular>,
            <LabelTextItalic key="description" fontColour={colours.greyMid}>
              {excludedTotal.desktop} excluded
            </LabelTextItalic>
          ]}
          renderEnd={() => (
            <LabelTextBold fontColour={colours.blue}>
              {includedTotal.desktop}
            </LabelTextBold>
          )}
        />
        <Versatile
          bulletColour={colours.teal}
          renderStart={() => <Icon name="mobile" fill={colours.teal} />}
          renderContent={() => [
            <LabelTextRegular key="title" fontColour={colours.greyLight}>
              Mobile
            </LabelTextRegular>,
            <LabelTextItalic key="description" fontColour={colours.greyMid}>
              {excludedTotal.mobile} excluded
            </LabelTextItalic>
          ]}
          renderEnd={() => (
            <LabelTextBold fontColour={colours.teal}>
              {includedTotal.mobile}
            </LabelTextBold>
          )}
        />
        <Versatile
          bulletColour={colours.greyLight}
          renderStart={() => <Icon name="bars" fill={colours.greyLight} />}
          renderContent={() => (
            <LabelTextBold
              fontColour={colours.greyLight}
              style={{ fontSize: '18px', lineHeight: '0px' }}
            >
              Total
            </LabelTextBold>
          )}
          renderEnd={() => (
            <LabelTextBold
              fontColour={colours.greyLight}
              style={{ fontSize: '22px' }}
            >
              {includedTotal.desktop + includedTotal.mobile}
            </LabelTextBold>
          )}
        />
      </VersatileGroup>
    </StatArea>
  );
};
