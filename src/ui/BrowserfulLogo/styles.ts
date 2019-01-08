import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

export const LogoWrapper = styled.div({
  label: 'logo-wrapper',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center'
});

export const SvgWrapper = styled.span({
  label: 'svg-wrapper',
  display: 'inline-flex',
  marginRight: '5px'
});

export const BetaBadge = styled.span({
  label: 'beta-badge',
  borderRadius: '4px',
  padding: '2px 4px',
  marginTop: '2px',
  marginLeft: scaffolding.gutterSm,
  color: colours.white,
  fontFamily: font.fontFamily,
  fontSize: '10px',
  lineHeight: '12px',
  backgroundColor: colours.pink
});
