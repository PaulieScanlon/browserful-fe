import styled from 'react-emotion';

import { colours, common, appBarZindex } from '../../theme';

interface IProps {
  fixed?: boolean;
}

export const AppBarWrapper = styled.header<IProps>(
  {
    label: 'app-bar-wrapper',
    display: 'flex',
    position: 'fixed',
    width: '100%',
    zIndex: appBarZindex,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colours.white,
    boxShadow: common.materialBoxShadow1,
    minHeight: common.appBarHeight
  },
  ({ fixed }) => ({
    position: fixed ? 'fixed' : 'relative'
  })
);
