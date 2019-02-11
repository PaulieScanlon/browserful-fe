import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';

export const StateWrapper = styled.div({
  label: 'state-wrapper',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const StateEllipse = styled.div({
  label: 'state-ellipse',
  display: 'flex',
  justifyContent: 'center',
  width: '120px',
  height: '120px',
  borderRadius: '100%',
  backgroundColor: colours.greyUltraLight,
  marginBottom: scaffolding.gutterMd,
  div: {
    transform: 'scale(2)',
    marginLeft: '8px'
  }
});
