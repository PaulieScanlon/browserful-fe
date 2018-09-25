import * as React from 'react';

import {
  BrowserCardWrapper,
  BrowserCardHeader,
  BrowserCardHeaderSection,
  BrowserCardBody,
  BrowserCardFooter
} from './styles';

import { H6 } from '../../typography';
import { spaceSm } from '../../theme';

import { BrowserLogo } from '../BrowserLogo';
import { VersionChip } from '../VersionChip';
import { ExpandChip } from '../ExpandChip';

interface IProps {
  data: any;
  onExpandClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onVersionClick?: (
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
          <ExpandChip
            isExpanded={isExpanded}
            onClick={event => onExpandClick(event)}
          />
        </BrowserCardHeaderSection>
      </BrowserCardHeader>
      <BrowserCardBody isExpanded={isExpanded}>
        {versions}

        <BrowserCardFooter>BrowserCardFooter</BrowserCardFooter>
      </BrowserCardBody>
    </BrowserCardWrapper>
  );
};

BrowserCard.defaultProps = {
  isExpanded: true,
  onExpandClick: () => {},
  onVersionClick: () => {}
};
