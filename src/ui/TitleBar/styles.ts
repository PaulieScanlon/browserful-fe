import styled from 'react-emotion';
import { scaffolding } from '../../theme';

interface IProps {
  backgrondColour?: string;
  highlightColour?: string;
}

export const TitleBarWrapper = styled.div<IProps>(
  {
    label: 'title-bar-wrapper',
    display: 'flex',
    alignItems: 'center',
    minHeight: '54px',

    padding: `${scaffolding.gutterSm} ${scaffolding.gutterLg}`,
    boxSizing: 'border-box',
    '.title-chip, .title': {
      marginRight: scaffolding.gutterSm
    }
  },
  ({ backgrondColour }) => ({
    backgroundColor: backgrondColour
  })
);

export const TitleChip = styled.div<IProps>(
  {
    label: 'title-chip',
    display: 'flex',
    justifyContent: 'center',
    width: '37px',
    height: '37px',
    borderRadius: '100%'
  },
  ({ highlightColour }) => ({
    backgroundColor: highlightColour
  })
);
