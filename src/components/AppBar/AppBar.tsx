import * as React from 'react';

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
      {showLogo && <BrowserfulLogo />}
      {children}
    </AppBarWrapper>
  );
};

AppBar.defaultProps = {
  showLogo: true,
  fixed: false
};
