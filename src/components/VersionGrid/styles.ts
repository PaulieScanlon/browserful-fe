import styled from 'react-emotion';
import { scaffolding } from '../../theme';

export const GridContent = styled.div({
  label: 'gird-content',
  display: 'inline-flex',
  flexWrap: 'wrap',
  '> * ': {
    margin: `${scaffolding.gutterXs}`
  }
});
