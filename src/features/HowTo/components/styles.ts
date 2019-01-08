import styled from 'react-emotion';
import { scaffolding, colours, materialBuilder, mq } from '../../../theme';

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
