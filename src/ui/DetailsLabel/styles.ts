import styled from 'react-emotion';
import { scaffolding } from '../../theme';
import { font } from '../../ui/Typography';

export const LabelWrapper = styled.div({
  label: 'label-wrapper',
  display: 'flex',
  alignItems: 'center',
  minHeight: '56px',
  width: '100%'
});

const commonStyles = {
  fontFamily: font.fontFamily,
  color: 'inherit',
  fontSize: '16px',
  lineHeight: '18px',
  marginRight: scaffolding.gutterLg
};

export const LabelText = styled.span({
  label: 'label-text',
  ...commonStyles
});

export const BoldText = styled.span({
  label: 'bold-text',
  ...commonStyles,
  fontWeight: 'bold'
});
