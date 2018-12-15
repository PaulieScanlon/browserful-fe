import styled from 'react-emotion';
import { scaffolding, materialBuilder, colours } from '../../theme';

export const SelectWrapper = styled.div({
  label: 'select-wrapper',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'column',
  boxShadow: materialBuilder(1)
});

export const InnerWrapper = styled.div({
  label: 'inner-wrapper',
  display: 'inline-flex',
  flexDirection: 'column',
  padding: scaffolding.gutterLg,
  '> label': {
    marginBottom: scaffolding.gutterSm
  }
});

const arrowStyles = {
  top: '100%',
  left: '50%',
  border: `solid ${colours.transparent}`,
  content: `" "`,
  height: '0px',
  width: '0px',
  position: 'absolute',
  pointerEvents: 'none',
  borderColor: colours.transparent,
  borderTopColor: colours.red,
  borderWidth: '10px',
  marginLeft: '-10px'
};

export const Arrow = styled.div({
  label: 'arrow',
  position: 'relative',
  backgroundColor: colours.white,

  ':before': {
    ...(arrowStyles as any),
    borderColor: colours.transparent,
    borderTopColor: colours.greyLight,
    borderWidth: '12px',
    marginLeft: '-12px'
  },

  ':after': {
    ...(arrowStyles as any),
    borderColor: colours.transparent,
    borderTopColor: colours.white,
    borderWidth: '10px',
    marginLeft: '-10px'
  }
});

export const SelectHeader = styled.div({
  label: 'select-header',
  marginBottom: scaffolding.gutterLg
});
