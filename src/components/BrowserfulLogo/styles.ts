import styled from 'react-emotion';

import { common, spaceLg } from '../../theme';

export const LogoWrapper = styled.div({
  label: 'logo-wrapper',
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: `${spaceLg}px`
});

export const SvgWrapper = styled.span({
  label: 'svg-wrapper',
  display: 'inline-flex',
  marginRight: '5px'
});
