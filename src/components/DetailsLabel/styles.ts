import styled from 'react-emotion';
import { scaffolding, colours, transitionBuilder } from '../../theme';
import { font } from '../../typography';

interface IProps {
  width?: number | string;
}

export const LabelWrapper = styled.div({
  label: 'label-wrapper',
  display: 'flex',
  alignItems: 'center',
  minHeight: '56px',
  width: '100%'
});

export const LabelText = styled.span({
  label: 'label-text',
  fontFamily: font.fontFamily,
  fontSize: '16px',
  lineHeight: '18px',
  marginRight: scaffolding.gutterLg
});

export const BoldText = styled.span({
  label: 'bold-text',
  fontWeight: 'bold',
  marginRight: scaffolding.gutterLg
});

export const BarChartWrapper = styled.div({
  label: 'bar-chart-wrapper',
  position: 'relative',
  height: '6px',
  width: '10%',
  maxWidth: '100px',
  backgroundColor: colours.offWhite
});

export const BarChart = styled.div<IProps>(
  {
    label: 'bar-chart',
    position: 'absolute',
    height: '100%',
    backgroundColor: colours.green,
    transition: transitionBuilder('width')
  },
  ({ width }) => ({
    width: `${width}%`
  })
);
