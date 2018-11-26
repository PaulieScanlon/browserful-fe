import styled from 'react-emotion';

import { scaffolding } from '../../theme';
import { font } from '../../typography';

interface IProps {
  fontColour: string;
  backgroundColour: string;
  grow: boolean;
}

export const ButtonElement = styled.button<IProps>(
  {
    label: 'button-element',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: `${scaffolding.gutterLg} ${scaffolding.gutterXl}`,
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
    flexGrow: grow ? 1 : 0
  })
);
