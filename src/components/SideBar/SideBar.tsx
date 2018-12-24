import * as React from 'react';
import Link from 'next/link';
import { RouterLink } from '../../common/RouterLink';
import { BrowserfulLogo } from '../BrowserfulLogo';
import {
  SideBarWrapper,
  SideBarNav,
  SideBarHeader,
  SideBarContent
} from './styles';

import { colours } from '../../theme';

interface IProps extends React.Props<ChildNode> {
  active?: boolean;
}

export const SideBar: React.SFC<IProps> = ({ active, children }: IProps) => {
  return (
    <SideBarWrapper>
      <SideBarNav active={active}>
        <SideBarHeader>
          <Link href="/">
            <a className={`${RouterLink}`}>
              <BrowserfulLogo fontColour={colours.white} />
            </a>
          </Link>
        </SideBarHeader>
      </SideBarNav>
      <SideBarContent>{children}</SideBarContent>
    </SideBarWrapper>
  );
};

SideBar.defaultProps = {
  active: true
};
