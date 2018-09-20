import styled from 'react-emotion';

import { common, spaceMd, spaceLg } from '../../theme';
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
    padding: `${spaceMd}px ${spaceLg}px`,
    fontSize: font.fontSize,
    fontFamily: font.fontFamily,
    border: 0,
    borderRadius: common.borderRadius,
    outline: 'none',
    cursor: 'pointer'
  },
  ({ fontColour, backgroundColour, grow }) => ({
    color: fontColour,
    backgroundColor: backgroundColour,
    flexGrow: grow ? 1 : 0
  })
);
