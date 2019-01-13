import styled from 'react-emotion';

import { font } from '../Typography';

interface IProps {
  as: any;
  backgroundColour: string;
}

export const IconButtonStyled = styled.button<IProps>(
  {
    label: 'icon-button',
    display: 'flex',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    fontFamily: font.fontFamily,
    border: 0,
    borderRadius: '100%',
    outline: 'none',
    cursor: 'pointer'
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour
  })
);
