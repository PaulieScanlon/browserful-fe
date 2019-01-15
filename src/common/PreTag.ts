import styled from 'react-emotion';
import { colours, scaffolding } from '../theme';

export const PreTag = styled.pre({
  label: 'pre-tag',
  margin: scaffolding.gutterLg,
  padding: scaffolding.gutterLg,
  boxSizing: 'border-box',
  whiteSpace: 'pre-wrap',
  backgroundColor: colours.offWhite
});
