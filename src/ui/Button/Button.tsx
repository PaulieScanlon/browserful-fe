import * as React from 'react';

import { colours } from '../../theme';

import { ButtonElement } from './styles';

interface IProps {
  fontColour?: string;
  backgroundColour?: string;
  grow?: boolean;
  type?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.SFC<IProps> = ({
  fontColour,
  backgroundColour,
  grow,
  type,
  disabled,
  children,
  onClick
}: IProps) => {
  return (
    <ButtonElement
      fontColour={fontColour}
      backgroundColour={backgroundColour}
      grow={grow}
      type={type}
      disabled={disabled}
      onClick={event => onClick(event)}
    >
      {children}
    </ButtonElement>
  );
};

Button.defaultProps = {
  fontColour: colours.white,
  backgroundColour: colours.pink,
  grow: false,
  type: 'button',
  disabled: false,
  onClick: () => {}
};
