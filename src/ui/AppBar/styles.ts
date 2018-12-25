import styled from 'react-emotion';

import { colours, common, scaffolding, materialBuilder } from '../../theme';
interface IProps {
  fixed?: boolean;
  width?: string | null;
}

export const AppBarWrapper = styled.header<IProps>(
  {
    label: 'app-bar-wrapper',
    display: 'flex',
    position: 'fixed',
    top: '0px',
    zIndex: common.appBar.zIndex,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colours.white,
    boxShadow: `${materialBuilder(1)}`,
    minHeight: common.appBar.height,
    padding: `0px ${scaffolding.gutterLg}`
  },
  ({ fixed, width }) => ({
    position: fixed ? 'fixed' : 'relative',
    width: width
  })
);
