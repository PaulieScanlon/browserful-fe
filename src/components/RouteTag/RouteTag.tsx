import * as React from 'react';

import routes from '../../../routes';
const { Link } = routes;

import { RouteTagLink } from './styles';

interface IProps extends React.Props<ChildNode> {
  route: string;
  params?: {
    id?: string | number;
  };
  disableLink?: boolean;
}

export const RouteTag: React.SFC<IProps> = ({
  route,
  params,
  disableLink,
  children
}: IProps) => {
  return disableLink ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Link route={route} params={params}>
      <a className={RouteTagLink}>{children}</a>
    </Link>
  );
};

RouteTag.defaultProps = {
  disableLink: false
};
