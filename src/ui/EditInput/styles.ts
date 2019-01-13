import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../../ui/Typography';

export const EditWrapper = styled.div({
  label: 'edit-wrapper',
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const EditField = styled.div({
  label: 'edit-field',
  display: 'inline-flex',
  minWidth: '40px',
  marginRight: scaffolding.gutterSm,
  fontFamily: font.fontFamily,
  fontSize: font.fontSize,
  color: colours.greyMid,
  backgroundColor: colours.white,
  outline: 'none',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: colours.transparent,
  ':focus': {
    borderBottomColor: colours.greyUltraLight
  }
});
