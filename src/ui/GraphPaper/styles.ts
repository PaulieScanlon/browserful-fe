import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';

interface IProps {
  opacity: number;
}

export const GraphPaperWrapper = styled.div<IProps>(
  {
    label: 'graph-paper-wrapper',
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  },
  ({ opacity }) => ({
    opacity: opacity
  })
);

const commonStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  backgroundSize: `${scaffolding.gutterLg} ${scaffolding.gutterLg}`
};

export const HozLines = styled.div({
  label: 'hoz-lines',
  ...(commonStyles as any),
  width: '100%',
  backgroundImage: `linear-gradient(to right, ${
    colours.offWhite
  } 1px, transparent 1px)`
});

export const VertLines = styled.div({
  label: 'vert-lines',
  ...(commonStyles as any),
  height: '100%',
  backgroundImage: `linear-gradient(to bottom, ${
    colours.greyUltraLight
  } 1px, transparent 1px)`
});

export const ContentDiv = styled.div({
  label: 'container-div',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
