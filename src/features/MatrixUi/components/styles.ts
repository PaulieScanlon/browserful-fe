import styled from 'react-emotion';
import { colours, scaffolding, materialBuilder } from '../../../theme';

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
  display: 'flex',
  padding: `${scaffolding.gutterSm} ${scaffolding.gutterXl} ${
    scaffolding.gutterLg
  } ${scaffolding.gutterLg}`
});

export const StatDetails = styled.div({
  label: 'stat-details',
  flexDirection: 'column',
  flexGrow: 1
});

export const StatIcons = styled.div({
  label: 'stat-icons',
  display: 'flex',
  flexDirection: 'column',
  marginTop: scaffolding.gutterSm
});

export const StatIconWrapper = styled.div({
  label: 'stat-icon-wrapper',
  margin: `${scaffolding.gutterLg} ${scaffolding.gutterLg} ${
    scaffolding.gutterLg
  } 0px`
});
