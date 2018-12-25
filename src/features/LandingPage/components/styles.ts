import styled from 'react-emotion';
import { common } from '../../../theme';

export const LandingContent = styled.div({
  label: 'landing-content',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '100vh'
});

export const LandingImage = styled.img({
  label: 'landing-image',
  width: '75%',
  height: 'auto',
  margin: '0 auto',
  boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.1)'
});

export const CopyWrapper = styled.div({
  label: 'copy-wrapper',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  padding: `${common.appBar.height} 0px`
});
