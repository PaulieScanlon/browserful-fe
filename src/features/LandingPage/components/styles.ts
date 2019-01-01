import styled from 'react-emotion';
import { mq } from '../../../theme';

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
  margin: `${common.appBar.height} 0px`,
  height: `calc(100% - ${common.appBar.height})`,
  minHeight: `calc(100vh - ${common.appBar.height})`,
  justifyContent: 'center',
  [mq[0]]: {
    margin: '0px'
  }
});

export const LandingImage = styled.div({
  label: 'landing-image',
  position: 'absolute',
  margin: `${common.appBar.height} 0px`,
  width: '100%',
  height: `calc(100% - ${common.appBar.height})`,
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
