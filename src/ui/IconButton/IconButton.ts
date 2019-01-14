import styled from 'react-emotion';
import tinycolor from 'tinycolor2';

import { font } from '../Typography';
import { colours, transitionBuilder } from '../../theme';

interface IProps {
  size?: string;
  backgroundColour?: string;
}

const getStyles = (size: string) => {
  const sizes = {
    sm: '28px',
    md: '36px',
    lg: '44px'
  };

  return {
    width: size ? sizes[size] : sizes.md,
    height: size ? sizes[size] : sizes.md
  };
};

const buttonStyles = {
  display: 'flex',
  justifyContent: 'center',
  fontFamily: font.fontFamily,
  padding: '0px',
  border: 0,
  borderRadius: '100%',
  backgroundColor: colours.offWhite,
  outline: 'none',
  cursor: 'pointer',
  transition: transitionBuilder('background-color')
};

export const IconButton = styled.button<IProps>(
  {
    label: 'icon-button',
    borderWidth: '1px',
    borderStyle: 'solid',
    ...buttonStyles
  },
  ({ size, backgroundColour }) => ({
    ...getStyles(size),
    backgroundColor: backgroundColour,
    ':hover': {
      backgroundColor: tinycolor(backgroundColour)
        .lighten(2)
        .desaturate()
        .toString()
    }
  })
);

export const IconLink = styled.a<IProps>(
  {
    label: 'icon-link',
    ...buttonStyles
  },
  ({ size, backgroundColour }) => ({
    ...getStyles(size),
    backgroundColor: backgroundColour,
    ':hover': {
      backgroundColor: backgroundColour
    }
  })
);
