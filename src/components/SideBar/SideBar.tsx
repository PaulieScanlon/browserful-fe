import * as React from 'react';

import { BrowserfulLogo } from '../BrowserfulLogo';
import {
  SideBarWrapper,
  SideBarNav,
  SideBarHeader,
  SideBarContent
} from './styles';

import { colours } from '../../theme';

// import routes from 'routes';
// const { Link } = routes;

interface IProps extends React.Props<ChildNode> {
  active?: boolean;
}

export const SideBar: React.SFC<IProps> = ({ active, children }: IProps) => {
  return (
    <SideBarWrapper>
      <SideBarNav active={active}>
        {/* @TODO make Link it's own LinkTag component which renders children so the a can be styled with text-decoration one */}
        <SideBarHeader>
          {/* <Link route="/">
            <a
              style={{
                border: '1px solid red',
                display: 'block',
                textDecoration: 'none'
              }}
            >
              
            </a>
          </Link> */}
          <BrowserfulLogo fontColour={colours.white} />
        </SideBarHeader>
      </SideBarNav>
      <SideBarContent>{children}</SideBarContent>
    </SideBarWrapper>
  );
};

SideBar.defaultProps = {
  active: true
};
