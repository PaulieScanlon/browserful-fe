import styled from 'react-emotion';
import { scaffolding } from '../../theme';

export const LabelWrapper = styled.div({
  label: 'label-wrapper',
  display: 'flex',
  alignItems: 'center',
  minHeight: '56px',
  width: '100%'
});

export const LabelText = styled.span({
  label: 'label-text',
  color: 'inherit',
  marginRight: scaffolding.gutterLg
});

export const BoldText = styled.span({
  label: 'bold-text',
  fontWeight: 'bold'
});
