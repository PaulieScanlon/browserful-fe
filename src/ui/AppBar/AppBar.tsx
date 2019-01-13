import * as React from 'react';
import Link from 'next/link';

import { RouterLink } from '../../common/RouterLink';
import { BrowserfulLogo } from '../BrowserfulLogo';
import { AppBarWrapper } from './styles';

interface IProps extends React.Props<ChildNode> {
  showLogo?: boolean;
  fixed?: boolean;
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
          <a className={`${RouterLink}`}>
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
  fixed: false
};
