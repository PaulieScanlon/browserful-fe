import * as React from 'react';

import { IProps } from '../types';

// import {
//   DescriptionList,
//   DescriptionTerm,
//   DescriptionDescription
// } from '../../../ui/DescriptionList';
// import { variantTypes } from '../../../ui/DescriptionList/enums';
import {
  StatTile,
  StatTitle,
  StatSummary,
  StatNumber
} from '../../../ui/StatTile';
import { Icon } from '../../../ui/Icon';

import { StatArea } from './styles';

import { colours } from '../../../theme';

export const Stats: React.SFC<IProps> = ({
  includedTotal,
  excludedTotal,
  total
}: IProps) => {
  console.log('includedTotal: ', includedTotal);
  console.log('excludedTotal: ', excludedTotal);
  console.log('total: ', total);

  return (
    <React.Fragment>
      <StatArea>
        <StatTile>
          <Icon name="desktop" fill={colours.pink} />
          <StatTitle>Lorem Ipsum</StatTitle>
          <StatSummary>Dolor sit</StatSummary>
          <StatNumber>3</StatNumber>
        </StatTile>
        {/* <DescriptionList lastPadding={20} variant={variantTypes.TIMELINE}>
          <DescriptionTerm bulletColour={colours.blue}>Desktop</DescriptionTerm>
          <DescriptionDescription>Dolor sit 1</DescriptionDescription>

          <DescriptionTerm bulletColour={colours.teal}>Mobile</DescriptionTerm>
          <DescriptionDescription>Dolor sit 2</DescriptionDescription>

          <DescriptionTerm
            bulletColour={colours.pink}
            fontColour={colours.pink}
          >
            Total
          </DescriptionTerm>
          <DescriptionDescription>Dolor sit 3</DescriptionDescription>
        </DescriptionList> */}
      </StatArea>
    </React.Fragment>
  );
};
