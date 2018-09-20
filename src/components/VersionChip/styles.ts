import styled from 'react-emotion';

import { font } from '../../typography';
import { colours } from '../../theme';

interface IProps {
  isIncluded: boolean;
  always: boolean;
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
    outline: 'none',
    cursor: 'pointer'
  },
  ({ isIncluded, always }) => ({
    backgroundColor: isIncluded
      ? `${colours.greenLight}`
      : `${colours.redLight}`,
    borderColor:
      always === true
        ? isIncluded
          ? `${colours.green}`
          : `${colours.red}`
        : null,
    borderWidth: always ? '2px' : '0px'
  })
);
