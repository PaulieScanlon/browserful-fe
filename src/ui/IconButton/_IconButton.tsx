import * as React from 'react';
import { Icon } from '../Icon/Icon';
import { colours } from '../../theme';

import { IconButtonStyled } from './styles';

interface IProps {
  backgroundColour?: string;

  type?: string;
  onClick?: (event: React.MouseEvent) => void;
  href?: string;
  target?: string;

  name: string;
  size?: string;
  fill?: string;
}

export const IconButton: React.SFC<IProps> = ({
  name,
  size,
  fill,
  backgroundColour,
  type,
  onClick,
  href,
  target
}) => {
  const getAttributes = (
    type: string,
    onClick: Function,
    href: string,
    target: string
  ) => {
    if (onClick) {
      return {
        type: type,
        onClick: event => onClick(event)
      };
    }

    if (href) {
      return {
        type: type,
        href: href,
        target: target
      };
    }

    return {
      type: type
    };
  };

  return (
    <IconButtonStyled
      as="a"
      // {...getAttributes(type, onClick, href, target)}
      backgroundColour={backgroundColour}
    >
      <Icon name={name} size={size} fill={fill} />
    </IconButtonStyled>
  );
};

IconButton.defaultProps = {
  size: 'md',
  fill: colours.greyLight,
  backgroundColour: colours.offWhite,
  type: 'button'
};
