import * as React from 'react';

import { colours } from '../../theme';

import { ButtonElement } from './styles';

interface IProps {
  fontColour?: string;
  backgroundColour?: string;
  grow?: boolean;
  children: React.ReactNode;
}

export const Button: React.SFC<IProps> = ({
  fontColour,
  backgroundColour,
  grow,
  children
}: IProps) => {
  return (
    <ButtonElement
      fontColour={fontColour}
      backgroundColour={backgroundColour}
      grow={grow}
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
