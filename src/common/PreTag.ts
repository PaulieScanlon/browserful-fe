import styled from 'react-emotion';
import { colours, scaffolding } from '../theme';

export const PreTag = styled.pre({
  label: 'pre-tag',
  fontSize: '14px',
  lineHeight: '18px',
  fontFamily: 'monospace',
  margin: scaffolding.gutterLg,
  padding: scaffolding.gutterLg,
  boxSizing: 'border-box',
  whiteSpace: 'pre-wrap',
  backgroundColor: colours.offWhite
});
