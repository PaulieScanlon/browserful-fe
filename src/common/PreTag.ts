import styled from 'react-emotion';
import { colours, scaffolding } from '../theme';

export const PreTag = styled.pre({
  label: 'pre-tag',
  fontSize: '14px',
  lineHeight: '18px',
  fontFamily: 'monospace',
  margin: scaffolding.gutterLg,
  padding: scaffolding.gutterLg,
  borderRadius: '3px',
  boxSizing: 'border-box',
  whiteSpace: 'pre-wrap',
  color: colours.greyLight,
  backgroundColor: colours.greyDark
});
