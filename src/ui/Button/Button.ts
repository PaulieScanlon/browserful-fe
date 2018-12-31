import styled from 'react-emotion';

import { scaffolding, colours } from '../../theme';
import { font } from '../Typography';

interface IProps {
  fontColour?: string;
  backgroundColour?: string;
  disabled?: boolean;
  size?: string;
}

const getStyles = (size: string) => {
  if (size === 'sm') {
    return {
      padding: `${scaffolding.gutterXs} ${scaffolding.gutterMd}`,
      fontSize: '12px',
      lineHeight: '16px'
    };
  }
  if (size === 'lg') {
    return {
      padding: `${scaffolding.gutterMd} ${scaffolding.gutterXl}`,
      fontSize: '18px',
      lineHeight: '22px'
    };
  }
  return {
    padding: `${scaffolding.gutterSm} ${scaffolding.gutterLg}`,
    fontSize: font.fontSize,
    lineHeight: font.lineHeight
  };
};

export const Button = styled.button<IProps>(
  {
    label: 'button',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: font.fontFamily,
    border: 0,
    borderRadius: '5px',
    outline: 'none',
    color: colours.white,
    backgroundColor: colours.pink
  },
  ({ fontColour, backgroundColour, disabled, size }) => ({
    color: fontColour,
    backgroundColor: disabled ? colours.greyUltraLight : backgroundColour,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...getStyles(size)
  })
);

// ({ backgroundColour, grow, disabled }) => ({
//
//   backgroundColor: disabled ? colours.greyUltraLight : backgroundColour,
//   width: grow ? '100%' : 'auto',
//   cursor: disabled ? 'not-allowed' : 'pointer'
// })
