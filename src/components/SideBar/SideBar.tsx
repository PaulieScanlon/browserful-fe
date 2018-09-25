import * as React from 'react';

import { BrowserfulLogo } from '../BrowserfulLogo';
import {
  SideBarWrapper,
  SideBarNav,
  SideBarHeader,
  SideBarContent
} from './styles';

import { colours } from '../../theme';
import { RouteTag } from '../RouteTag';

interface IProps extends React.Props<ChildNode> {
  active?: boolean;
  disableLink?: boolean;
}

export const SideBar: React.SFC<IProps> = ({
  active,
  disableLink,
  children
}: IProps) => {
  return (
    <SideBarWrapper>
      <SideBarNav active={active}>
        <SideBarHeader>
          <RouteTag route="/" disableLink={disableLink}>
            <BrowserfulLogo fontColour={colours.white} />
          </RouteTag>
        </SideBarHeader>
      </SideBarNav>
      <SideBarContent>{children}</SideBarContent>
    </SideBarWrapper>
  );
};

SideBar.defaultProps = {
  active: true,
  disableLink: false
};
