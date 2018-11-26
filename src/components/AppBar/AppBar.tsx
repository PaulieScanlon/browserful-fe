import * as React from 'react';

import { BrowserfulLogo } from '../BrowserfulLogo';
import { AppBarWrapper } from './styles';
import Link from 'next/link';

interface IProps extends React.Props<ChildNode> {
  showLogo?: boolean;
  fixed?: boolean;
  width?: string | null;
}

export const AppBar: React.SFC<IProps> = ({
  showLogo,
  fixed,
  width,
  children
}: IProps) => {
  return (
    <AppBarWrapper fixed={fixed} width={width}>
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
  width: null
};
