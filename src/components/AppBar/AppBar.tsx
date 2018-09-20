import * as React from 'react';

import { BrowserfulLogo } from '../BrowserfulLogo';
import { AppBarWrapper } from './styles';

interface IProps extends React.Props<ChildNode> {
  showLogo?: boolean;
}

export const AppBar: React.SFC<IProps> = ({ showLogo, children }: IProps) => {
  return (
    <AppBarWrapper>
      {showLogo && <BrowserfulLogo />}
      {children}
    </AppBarWrapper>
  );
};

AppBar.defaultProps = {
  showLogo: true
};
