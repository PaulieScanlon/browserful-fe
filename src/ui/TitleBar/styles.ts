import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';

interface IProps {
  highlightColour: string;
}

export const TitleBarWrapper = styled.div({
  label: 'title-bar-wrapper',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colours.white,
  padding: `${scaffolding.gutterSm} ${scaffolding.gutterLg}`,
  marginBottom: scaffolding.gutterLg,
  '.title-chip, .title': {
    marginRight: scaffolding.gutterSm
  }
});

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
