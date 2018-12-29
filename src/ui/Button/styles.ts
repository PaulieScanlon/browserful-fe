import styled from 'react-emotion';

import { scaffolding, colours } from '../../theme';
import { font } from '../../ui/Typography';

interface IProps {
  fontColour: string;
  backgroundColour: string;
  grow: boolean;
  disabled: boolean;
}

export const ButtonElement = styled.button<IProps>(
  {
    label: 'button-element',
    display: 'flex',
    justifyContent: 'center',
    padding: `${scaffolding.gutterSm} ${scaffolding.gutterLg}`,
    fontSize: font.fontSize,
    fontFamily: font.fontFamily,
    border: 0,
    borderRadius: '5px',
    outline: 'none'
  },
  ({ fontColour, backgroundColour, grow, disabled }) => ({
    color: fontColour,
    backgroundColor: disabled ? colours.greyUltraLight : backgroundColour,
    width: grow ? '100%' : 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer'
  })
);
