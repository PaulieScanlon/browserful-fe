import styled from 'react-emotion';
import { common, colours, spaceMd } from '../../theme';

interface IProps {
  isExpanded?: boolean;
}

export const BrowserCardWrapper = styled.div({
  label: 'browser-card-wrapper',
  backgroundColor: colours.white,
  boxShadow: common.materialBoxShadow1
});

export const BrowserCardHeader = styled.div<IProps>(
  {
    label: 'browser-card-header',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `0 ${spaceMd}px`,
    padding: `${spaceMd}px 0px`,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid'
  },
  ({ isExpanded }) => ({
    borderBottomColor: isExpanded ? colours.greyLight : colours.white
  })
);

export const BrowserCardHeaderSection = styled.div({
  label: 'browser-card-header-section',
  display: 'inline-flex',
  alignItems: 'center'
});

export const BrowserCardBody = styled.div<IProps>(
  {
    label: 'browser-card-body',
    overflow: 'hidden'
  },
  ({ isExpanded }) => ({
    height: isExpanded ? '100%' : '0px',
    padding: isExpanded ? `${spaceMd}px ${spaceMd}px` : `0px ${spaceMd}px`
  })
);
