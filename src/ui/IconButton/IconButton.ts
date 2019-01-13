import styled from 'react-emotion';
import tinycolor from 'tinycolor2';

import { font } from '../Typography';
import { colours, transitionBuilder } from '../../theme';

interface IProps {
  backgroundColour?: string;
}

const buttonStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  fontFamily: font.fontFamily,
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
  ({ backgroundColour }) => ({
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
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour,
    ':hover': {
      backgroundColor: backgroundColour
    }
  })
);
