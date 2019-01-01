import styled from 'react-emotion';
import {
  common,
  colours,
  scaffolding,
  materialBuilder,
  breakpoints
} from '../../../theme';

export const LandingContent = styled.div({
  label: 'landing-content',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '100vh',
  justifyContent: 'center'
});

export const LandingImage = styled.div({
  label: 'landing-image',
  position: 'absolute',
  marginTop: common.appBar.height,
  width: '100%',
  height: `calc(100vh - ${common.appBar.height})`,
  minHeight: `calc(100vh - ${common.appBar.height})`,

  backgroundImage: `url("/static/images/landing-page-lg.jpg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
});

export const CopyPanel = styled.div({
  label: 'copy-panel',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: breakpoints.md,
  margin: '0 auto',
  padding: scaffolding.gutterXxl,
  backgroundColor: colours.white,
  boxShadow: materialBuilder(6)
});
