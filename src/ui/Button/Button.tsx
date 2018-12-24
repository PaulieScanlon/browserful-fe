import * as React from 'react';

import { colours } from '../../theme';

import { ButtonElement } from './styles';

interface IProps {
  fontColour?: string;
  backgroundColour?: string;
  grow?: boolean;
  children: React.ReactNode;
  // @TODO can IPRops extends HTML Button so onClick doesn't need to be defined?
  onClick?: any;
}

export const Button: React.SFC<IProps> = ({
  fontColour,
  backgroundColour,
  grow,
  children,
  onClick
}: IProps) => {
  return (
    <ButtonElement
      fontColour={fontColour}
      backgroundColour={backgroundColour}
      grow={grow}
      onClick={onClick}
    >
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = {
  fontColour: colours.white,
  backgroundColour: colours.pink,
  grow: false
};
