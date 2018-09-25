import styled from 'react-emotion';
import { colours } from '../../theme';

interface IProps {
  isExpaned: boolean;
}

export const ExpandChipWrapper = styled.span<IProps>(
  {
    label: 'expand-chip-wrapper',
    display: 'inline-flex',
    borderRadius: '50%',
    backgroundColor: colours.offWhite,
    cursor: 'pointer',
    svg: {
      fill: colours.greyMid
    }
  },
  ({ isExpaned }) => ({
    transform: isExpaned ? `rotate(0deg)` : `rotate(180deg)`
  })
);
