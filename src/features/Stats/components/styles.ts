import styled from 'react-emotion';
import { colours, scaffolding } from '../../../theme';

export const ChartContainer = styled.div({
  label: 'chart-container',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '370px',
  backgroundColor: colours.white
});

export const ChartArea = styled.div({
  label: 'chart-area',
  backgroundColor: colours.pink,
  padding: scaffolding.gutterLg
});

export const DetailsContainer = styled.div({
  label: 'details-container',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center'
});

export const StatsArea = styled.div({
  label: 'stats-area',
  textAlign: 'center',
  marginBottom: scaffolding.gutterSm
});

export const TotalsArea = styled.div({
  label: 'totals-area',
  textAlign: 'left'
});

export const LegendArea = styled.div({
  label: 'legend-area',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colours.pink,
  paddingTop: scaffolding.gutterLg
});

export const LegendDot = styled.span<{ backgroundColour: string }>(
  {
    label: 'legend-dot',
    display: 'inline-block',
    width: '14px',
    height: '14px',
    marginRight: scaffolding.gutterSm,
    borderRadius: '100%'
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour
  })
);
