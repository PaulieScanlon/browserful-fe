import * as React from 'react';
import { ReactChild } from 'react';

import { colours } from '../../theme';

import { ButtonElement } from './styles';

interface IProps extends React.Props<ReactChild> {
  fontColour?: string;
  backgroundColour?: string;
  grow?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.SFC<IProps> = ({
  fontColour,
  backgroundColour,
  grow,
  onClick,
  children
}: IProps) => {
  return (
    <ButtonElement
      fontColour={fontColour}
      backgroundColour={backgroundColour}
      grow={grow}
      onClick={event => onClick(event)}
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
