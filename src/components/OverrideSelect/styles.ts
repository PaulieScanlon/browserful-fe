import styled from 'react-emotion';
import { scaffolding, materialBuilder, colours } from '../../theme';

export const OverrideWrapper = styled.div({
  label: 'overrid-wrapper',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',
  padding: `0px ${scaffolding.gutterLg} ${scaffolding.gutterSm}`,
  width: '300px',
  backgroundColor: colours.white,
  boxShadow: materialBuilder(1)
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
