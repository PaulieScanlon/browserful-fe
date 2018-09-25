import styled from 'react-emotion';
// https://bootstrapious.com/p/bootstrap-sidebar

import { common, colours, sideBarZindex, spaceLg, spaceSm } from '../../theme';

interface IProps {
  active: boolean;
}

export const SideBarWrapper = styled.div({
  label: 'side-bar-wrapper',
  display: 'flex',
  width: '100%'
});

export const SideBarNav = styled.nav<IProps>(
  {
    label: 'side-bar-nav',
    width: common.sideBarWidth,
    position: 'fixed',
    top: '0px',
    left: '0px',
    height: '100vh',
    zIndex: sideBarZindex,
    backgroundColor: colours.greyMid
  },
  ({ active }) => ({
    marginLeft: active ? '0px' : `-${common.sideBarWidth}`
  })
);

export const SideBarHeader = styled.div({
  label: 'side-bar-header',
  borderRadius: common.borderRadius,
  padding: `${spaceSm}px 0px`,
  backgroundColor: colours.greyDark,
  margin: `${spaceLg}px`,
  textAlign: 'center',
  // This is just to position the BrowserfulLogo
  a: {
    paddingTop: '2px',
    div: {
      marginLeft: '0px'
    }
  }
});

export const SideBarContent = styled.div({
  label: 'side-bar-content',
  marginTop: common.appBarHeight,
  width: `calc(100% - ${common.sideBarWidth})`,
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  right: '0px'
});
