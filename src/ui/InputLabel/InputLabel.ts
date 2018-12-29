import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

export const InputLabel = styled.label({
  label: 'input-label',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 auto',
  fontFamily: font.fontFamily,
  fontSize: font.fontSize,
  color: colours.greyMid,
  marginBottom: scaffolding.gutterLg
});
