import styled from 'react-emotion';
import { scaffolding, colours } from '../../../theme';

export const FormWrapper = styled.div({
  label: 'form-wrapper',
  height: 'auto',
  padding: `${scaffolding.gutterXxl} ${scaffolding.gutterLg}`,
  backgroundColor: colours.white,
  borderTop: `1px solid ${colours.greyUltraLight}`
});
