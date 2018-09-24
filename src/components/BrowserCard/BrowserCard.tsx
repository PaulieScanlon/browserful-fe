import * as React from 'react';

import { browserfulData2 } from '../../types/mainData.types';
import { H6 } from '../../typography';

import {
  BrowserCardWrapper,
  BrowserCardHeader,
  BrowserCardBody,
  BrowserCardHeaderSection
} from './styles';
import { BrowserLogo } from '../BrowserLogo';
import { VersionChip } from '../VersionChip';
import { spaceSm, colours } from '../../theme';
import { Button } from '../Button';

interface IProps {
  data: browserfulData2;
  onExpandClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onVersionClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
  isExpanded?: boolean;
}

export const BrowserCard: React.SFC<IProps> = ({
  data,
  onExpandClick,
  onVersionClick,
  isExpanded
}: IProps) => {
  const { browser, version_list } = data;
  const tempButtonText = isExpanded ? 'Collapse' : 'Expand';

  const versions = version_list.map((obj, i) => {
    return (
      <VersionChip
        key={i}
        browser={browser}
        version={parseInt(obj.version) || 0}
        isIncluded={obj.isIncluded}
        always={obj.always}
        onClick={(event, id) => onVersionClick(event, id)}
      />
    );
  });

  return (
    <BrowserCardWrapper>
      <BrowserCardHeader isExpanded={isExpanded}>
        <BrowserCardHeaderSection>
          <BrowserLogo browser={browser} />
          <H6 marginLeft={`${spaceSm}px`} display="inline-flex">
            {browser}
          </H6>
        </BrowserCardHeaderSection>

        <BrowserCardHeaderSection>
          <Button
            fontColour={colours.greyDark}
            backgroundColour={colours.offWhite}
            onClick={event => onExpandClick(event)}
          >
            {tempButtonText}
          </Button>
        </BrowserCardHeaderSection>
      </BrowserCardHeader>
      <BrowserCardBody isExpanded={isExpanded}>{versions}</BrowserCardBody>
    </BrowserCardWrapper>
  );
};

BrowserCard.defaultProps = {
  isExpanded: true,
  onExpandClick: () => {},
  onVersionClick: () => {}
};
