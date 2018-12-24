import styled from 'react-emotion';

import { scaffolding } from '../../theme';
import { font } from '../../ui/Typography';

interface IProps {
  fontColour: string;
  backgroundColour: string;
  grow: boolean;
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
    outline: 'none',
    cursor: 'pointer'
  },
  ({ fontColour, backgroundColour, grow }) => ({
    color: fontColour,
    backgroundColor: backgroundColour,
    width: grow ? '100%' : 'auto'
  })
);
