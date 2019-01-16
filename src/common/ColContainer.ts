import styled from 'react-emotion';

import { colours } from '../theme';

interface IProps {
  minHeight?: string;
  alignment?: string;
}

const getStyles = (minHeight: string) => {
  if (minHeight) {
    return {
      minHeight: minHeight
    };
  }

  return;
};

export const ColContainer = styled.div<IProps>(
  {
    label: 'col-container',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colours.white
  },
  ({ minHeight, alignment }) => ({
    justifyContent: alignment,
    ...getStyles(minHeight)
  })
);
