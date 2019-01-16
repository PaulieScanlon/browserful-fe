import styled from 'react-emotion';
import { colours, scaffolding, materialBuilder, mq } from '../../../theme';

interface IProps {
  alignment?: string;
  breakpoint?: number;
}

const getStyles = (breakpoint: number) => {
  if (breakpoint) {
    return {
      [mq[breakpoint]]: {
        pre: {
          display: 'flex',
          flexGrow: 1
        }
      }
    };
  }
  return;
};

// this is required because Col isn't flex enabled.
export const ReactGridStyemOverride = {
  display: 'flex'
};

export const ColContainer = styled.div<IProps>(
  {
    label: 'col-container',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: scaffolding.gutterLg,
    backgroundColor: colours.white
  },
  ({ breakpoint, alignment }) => ({
    justifyContent: alignment,
    ...getStyles(breakpoint)
  })
);

export const ChartArea = styled.div({
  label: 'chart-area',
  position: 'relative',
  padding: scaffolding.gutterLg
});

export const ChartIcon = styled.div({
  label: 'chart-icon',
  position: 'absolute',
  left: '50%',
  transform: 'translate(80%, -155%)',
  display: 'flex',
  justifyContent: 'center',
  width: '46px',
  height: '46px',
  borderRadius: '100%',
  backgroundColor: colours.pink,
  boxShadow: materialBuilder(2)
});

export const StatArea = styled.div({
  label: 'stat-area',
  position: 'relative',
  padding: scaffolding.gutterLg
});
