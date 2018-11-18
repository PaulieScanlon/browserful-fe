import * as React from 'react';

import { BrowserfulLogo } from '../BrowserfulLogo';
import { AppBarWrapper } from './styles';
import Link from 'next/link';

interface IProps extends React.Props<ChildNode> {
  showLogo?: boolean;
  fixed?: boolean;
  disableLink?: boolean;
}

export const AppBar: React.SFC<IProps> = ({
  showLogo,
  fixed,
  children
}: IProps) => {
  return (
    <AppBarWrapper fixed={fixed}>
      {showLogo && (
        <Link href="/">
          <a>
            <BrowserfulLogo />
          </a>
        </Link>
      )}
      {children}
    </AppBarWrapper>
  );
};

AppBar.defaultProps = {
  showLogo: true,
  fixed: false,
  disableLink: false
};
