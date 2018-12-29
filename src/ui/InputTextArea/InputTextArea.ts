import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

export const InputTextArea = styled.textarea({
  label: 'input-text-area',
  display: 'block',
  width: `calc(100% - ${scaffolding.gutterLg})`,
  fontFamily: font.fontFamily,
  fontSize: font.fontSize,
  color: colours.greyMid,
  outline: 'none',
  border: `1px solid ${colours.greyUltraLight}`,
  padding: scaffolding.gutterSm,
  borderRadius: '3px',
  margin: `${scaffolding.gutterSm} 0px`,
  resize: 'none',
  minHeight: '100px'
});
