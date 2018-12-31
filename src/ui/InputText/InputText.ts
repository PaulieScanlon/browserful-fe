import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

export const InputText = styled.input({
  label: 'input-text',
  display: 'block',
  width: `calc(100% - ${scaffolding.gutterLg})`,
  fontFamily: font.fontFamily,
  fontSize: font.fontSize,
  color: colours.greyMid,
  backgroundColor: colours.white,
  outline: 'none',
  border: `1px solid ${colours.greyUltraLight}`,
  caretColor: colours.greyMid,
  padding: scaffolding.gutterSm,
  borderRadius: '3px',
  margin: `${scaffolding.gutterSm} 0px`
});
