import styled from 'react-emotion';

import { colours, common } from '../../theme';

export const AppBarWrapper = styled.header({
  label: 'app-bar-wrapper',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: colours.white,
  boxShadow: common.materialBoxShadow1,
  minHeight: common.appBarHeight
});
