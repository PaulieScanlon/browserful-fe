import styled from 'react-emotion';
import { scaffolding } from '../../theme';

export const GridContent = styled.div({
  label: 'gird-content',

  '> * ': {
    margin: `${scaffolding.gutterXs}`
  }
});
