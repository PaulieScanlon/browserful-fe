import * as React from 'react';

import { IProps } from '../types';

import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDescription
} from '../../../ui/DescriptionList';
import { variantTypes } from '../../../ui/DescriptionList/enums';
import { LabelTextBold } from '../../../ui/Typography';

import { StatArea, StatDetails, StatIcons, StatIconWrapper } from './styles';

import { colours, scaffolding } from '../../../theme';
import { Icon } from '../../../ui/Icon';

export const Stats: React.SFC<IProps> = ({  }: IProps) => {
  return (
    <React.Fragment>
      <StatArea>
        <StatIcons>
          <StatIconWrapper>
            <Icon name="desktop" fill={colours.blue} />
          </StatIconWrapper>

          <StatIconWrapper>
            <Icon name="mobile" fill={colours.teal} />
          </StatIconWrapper>

          <StatIconWrapper style={{ marginTop: 30 }}>
            <Icon name="bars" fill={colours.pink} />
          </StatIconWrapper>
        </StatIcons>
        <StatDetails>
          <DescriptionList lastPadding={20} variant={variantTypes.TIMELINE}>
            <DescriptionTerm bulletColour={colours.blue}>
              Desktop
            </DescriptionTerm>
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

            <DescriptionTerm bulletColour={colours.teal}>
              Mobile
            </DescriptionTerm>
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
        </StatDetails>
      </StatArea>
    </React.Fragment>
  );
};
