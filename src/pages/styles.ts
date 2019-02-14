import styled from 'react-emotion';
import { common, colours } from '../theme';

export const AppContent = styled.div({
  label: 'app-content',
  margin: `${common.appBar.height} auto 0px`,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: colours.offWhite
});
