import styled from 'react-emotion';
import { scaffolding } from '../../theme';

export const LabelWrapper = styled.div({
  label: 'label-wrapper',
  display: 'flex',
  alignItems: 'center',
  minHeight: '56px',
  width: '100%',
  '.label': {
    marginRight: scaffolding.gutterSm
  }
});
