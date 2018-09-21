import * as React from 'react';

import { BrowserfulLogo } from '../BrowserfulLogo';
import { AppBarWrapper } from './styles';
import { RouteTag } from '../RouteTag';

interface IProps extends React.Props<ChildNode> {
  showLogo?: boolean;
  fixed?: boolean;
  disableLink?: boolean;
}

export const AppBar: React.SFC<IProps> = ({
  showLogo,
  fixed,
  disableLink,
  children
}: IProps) => {
  return (
    <AppBarWrapper fixed={fixed}>
      {showLogo && (
        <RouteTag route="/" disableLink={disableLink}>
          <BrowserfulLogo />
        </RouteTag>
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
