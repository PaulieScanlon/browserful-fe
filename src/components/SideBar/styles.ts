import styled from 'react-emotion';

import { common, colours, scaffolding } from '../../theme';

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
    width: common.sideBar.width,
    position: 'fixed',
    top: '0px',
    left: '0px',
    height: '100vh',
    zIndex: common.sideBar.zIndex,
    backgroundColor: colours.greyMid
  },
  ({ active }) => ({
    marginLeft: active ? '0px' : `-${common.sideBar.width}`
  })
);

export const SideBarHeader = styled.div({
  label: 'side-bar-header',
  borderRadius: '5px',
  padding: `${scaffolding.gutterSm} 0px`,
  backgroundColor: colours.greyDark,
  margin: `${scaffolding.gutterLg}`,
  textAlign: 'center',
  // This is just to position the BrowserfulLogo
  'a, div': {
    paddingTop: '2px',
    marginLeft: '0px'
  }
});

export const SideBarContent = styled.div({
  label: 'side-bar-content',
  marginTop: common.appBar.height,
  width: `calc(100% - ${common.sideBar.width})`,
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  right: '0px'
});
