import styled from 'react-emotion';

import {
  common,
  colours,
  scaffolding,
  materialBuilder,
  breakpoints,
  mq
} from '../../../theme';

export const LandingContent = styled.div({
  label: 'landing-content',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: '100vh',
  justifyContent: 'center',
  [mq[0]]: {
    marginBottom: '0px'
  }
});

export const LandingImage = styled.div({
  label: 'landing-image',
  position: 'absolute',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundImage: `url("/static/images/landing-page-lg.jpg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderBottom: `1px solid ${colours.greyUltraLight}`
});

export const CopyPanel = styled.div({
  label: 'copy-panel',
  maxWidth: breakpoints.md,
  margin: '0 auto',
  padding: scaffolding.gutterXxl,
  backgroundColor: colours.white,
  boxShadow: materialBuilder(6),
  marginTop: common.appBar.height,
  [mq[0]]: {
    marginTop: '0px',
    padding: scaffolding.gutterXxl
  }
});

export const HowToWrapper = styled.div({
  label: 'how-to-wrapper',
  height: 'auto',
  padding: scaffolding.gutterLg,
  backgroundColor: colours.white
});

export const HowToSection = styled.div({
  label: 'how-to-section',
  position: 'relative',
  marginBottom: '0px',
  [mq[1]]: {
    marginBottom: '140px'
  }
});

export const HowToImage = styled.img({
  label: 'how-to-image',
  display: 'block',
  width: '100%',
  height: 'auto',
  margin: `${scaffolding.gutterXxl} auto`,
  boxShadow: materialBuilder(6),
  [mq[1]]: {
    width: '60%',
    margin: '0 auto'
  }
});

export const DeviderLine = styled.div({
  label: 'devider-line',
  border: `1px solid ${colours.greyLight}`
});

export const FormWrapper = styled.div({
  label: 'form-wrapper',
  height: 'auto',
  padding: scaffolding.gutterLg,
  backgroundColor: colours.white
});
