import styled from 'react-emotion';
import { colours, scaffolding, materialBuilder } from '../../../theme';

export const ChartContainer = styled.div({
  label: 'chart-container',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '370px',
  backgroundColor: colours.white,
  marginBottom: scaffolding.gutterXxl
});

export const ChartArea = styled.div({
  label: 'chart-area',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'flex-end',
  paddingTop: scaffolding.gutterLg
});

export const ChartIcon = styled.div({
  label: 'chart-icon',
  position: 'absolute',
  left: '50%',
  transform: 'translate(80%, -55%)',
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
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'flex-end',
  padding: scaffolding.gutterLg,
  '.stat-box:not(:last-child)': {
    borderTopColor: colours.offWhite,
    borderLeftColor: colours.offWhite,
    borderRightColor: colours.offWhite,
    marginBottom: scaffolding.gutterMd
  }
});

export const StatBox = styled.div({
  label: 'stat-box',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderTopColor: colours.white,
  borderLeftColor: colours.white,
  borderRightColor: colours.white,
  borderBottomColor: colours.offWhite,
  padding: scaffolding.gutterSm
});

export const StatDot = styled.span<{ dotColour: string }>(
  {
    label: 'label-dot',
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '100%',
    marginRight: scaffolding.gutterSm
  },
  ({ dotColour }) => ({
    backgroundColor: dotColour
  })
);
