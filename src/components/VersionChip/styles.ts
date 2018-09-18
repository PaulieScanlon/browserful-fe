import styled from 'react-emotion';

import { font } from '../../typography';
import { colours } from '../../theme';

interface IProps {
  variant: string;
  isSelected?: boolean;
}

export const ChipButton = styled.button<IProps>(
  {
    label: 'chip-body',
    display: 'inline-flex',
    width: '40px',
    height: '40px',
    fontSize: '12px',
    fontFamily: `${font.fontFamily}`,
    color: `${colours.greyDark}`,
    borderRadius: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5px',
    marginRight: '5px',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    outline: 'none'
  },
  ({ variant, isSelected }) => ({
    backgroundColor:
      variant === 'included' ? `${colours.greenLight}` : `${colours.redLight}`,
    borderColor: variant === 'included' ? `${colours.green}` : `${colours.red}`,
    borderWidth: isSelected ? '2px' : '0px'
  })
);
