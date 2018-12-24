import styled from 'react-emotion';
import { scaffolding, colours, breakpoints } from '../../theme';

export const OverrideWrapper = styled.div({
  label: 'overrid-wrapper',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',
  padding: `0px ${scaffolding.gutterLg} ${scaffolding.gutterSm}`,
  maxWidth: breakpoints.sm,
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: colours.white
});

export const DetailsBorder = styled.div({
  label: 'details-border',
  borderBottom: `1px solid ${colours.greyLight}`,
  margin: `0px -${scaffolding.gutterLg} ${scaffolding.gutterSm}`
});

export const InputWrapper = styled.div({
  label: 'input-wrapper',
  display: 'flex',
  flexDirection: 'column'
});
