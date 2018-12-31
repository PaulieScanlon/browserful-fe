import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

interface IProps {
  variant?: string;
}

const getStyles = (variant: string) => {
  if (variant === 'error') {
    return colours.red;
  }
  if (variant === 'warning') {
    return colours.orange;
  }

  return colours.green;
};

export const InputAnnounce = styled.div<IProps>(
  {
    label: 'input-announce',
    display: 'flex',
    alignItems: 'center',
    fontFamily: font.fontFamily,
    fontSize: font.fontSize,
    color: colours.red,
    svg: {
      marginRight: scaffolding.gutterXs
    }
  },
  ({ variant }) => ({
    color: getStyles(variant)
  })
);
