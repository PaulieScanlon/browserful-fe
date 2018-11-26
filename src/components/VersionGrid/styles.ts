import styled from 'react-emotion';
import { spaceSm } from '../../theme';

export const GridContent = styled.div({
  label: 'gird-content',

  '> * ': {
    margin: `${spaceSm}px`
  }
});
