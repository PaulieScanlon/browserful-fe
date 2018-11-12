import * as React from 'react';

import {
  BrowserCardWrapper,
  Label,
  Input,
  ContentWrapper,
  Content
} from './styles';

import { BrowserLogo } from '../BrowserLogo';
import { VersionChip } from '../VersionChip';

interface IProps {
  data: any;
  maxHeight?: string;
  defaultChecked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export const BrowserCard: React.SFC<IProps> = ({
  data,
  maxHeight,
  defaultChecked,
  onClick
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
        onClick={(event, id) => onClick(event, id)}
      />
    );
  });

  return (
    <BrowserCardWrapper>
      <Input
        type="checkbox"
        defaultChecked={defaultChecked}
        id={`panel-${browser}`}
        maxHeight={maxHeight}
      />

      <Label htmlFor={`panel-${browser}`}>
        <BrowserLogo browser={browser} />
        {browser}
      </Label>
      <ContentWrapper>
        <Content>{versions}</Content>
      </ContentWrapper>
    </BrowserCardWrapper>
  );
};

BrowserCard.defaultProps = {
  maxHeight: '400px',
  defaultChecked: false,
  onClick: () => {}
};
