import styled from 'react-emotion';
import { colours } from '../../theme';
import { font } from '../Typography';

export const InputError = styled.div({
  label: 'input-error',
  fontFamily: font.fontFamily,
  fontSize: font.fontSize,
  color: colours.red
});
