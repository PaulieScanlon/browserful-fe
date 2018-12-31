import styled from 'react-emotion';
import { colours } from '../../theme';

export const SVG = styled.svg({
  label: 'svg'
});

export const DemoDiv = styled.div({
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',

  width: '100px',
  height: '100px',
  margin: '10px',

  textAlign: 'center',
  border: `1px solid ${colours.greyUltraLight}`
});

export const DemoIcon = styled.div({
  margin: '10px 0px'
});
