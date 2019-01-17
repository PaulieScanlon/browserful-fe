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
  excludedTotal,
  total
}: IProps) => {
  return (
    <StatArea>
      <VersatileGroup timeline={true}>
        <Versatile
          bulletColour={colours.blue}
          renderStart={() => <Icon name="desktop" fill={colours.blue} />}
          renderContent={() => [
            <LabelTextRegular key="title">Desktop</LabelTextRegular>,
            <LabelTextItalic
              key="description"
              fontColour={colours.greyUltraLight}
            >
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
            <LabelTextRegular key="title">Mobile</LabelTextRegular>,
            <LabelTextItalic
              key="description"
              fontColour={colours.greyUltraLight}
            >
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
          tilePadding="30px"
          renderStart={() => <Icon name="bars" fill={colours.pink} />}
          renderContent={() => (
            <LabelTextBold
              fontColour={colours.pink}
              style={{ fontSize: '18px', lineHeight: '0px' }}
            >
              Total
            </LabelTextBold>
          )}
          renderEnd={() => (
            <LabelTextBold
              fontColour={colours.pink}
              style={{ fontSize: '22px' }}
            >
              {total.desktop + total.mobile}
            </LabelTextBold>
          )}
        />
      </VersatileGroup>
    </StatArea>
  );
};
