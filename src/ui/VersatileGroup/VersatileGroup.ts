import styled from 'react-emotion';
import { scaffolding } from '../../theme';

import { colours } from '../../theme';

interface IProps {
  timeline?: boolean;
}

const getStyles = (timeline: boolean) => {
  if (timeline) {
    return {
      position: 'absolute',
      left: '45px',
      transform: 'translateX(-50%)',
      content: `""`,
      width: '1px',
      height: '100%',
      backgroundColor: colours.greyUltraLight,
      zIndex: -1
    };
  }
};

export const VersatileGroup = styled.div<IProps>(
  {
    label: 'versatile-group',
    '.tile-wrapper:last-child': {
      '.tile-bullet:before': {
        bottom: '20px'
      }
    },
    '.tile-wrapper:not(:last-child)': {
      paddingBottom: scaffolding.gutterLg
    }
  },
  ({ timeline }) => ({
    '.tile-wrapper': {
      '.tile-bullet:before': {
        ...(getStyles(timeline) as any)
      }
    }
  })
);
