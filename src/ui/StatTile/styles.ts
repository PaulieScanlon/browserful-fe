import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

interface IProps {
  variant?: string;
  lastPadding?: number;
  fontColour?: string;
  bulletColour?: string;
}

const commonStyles = {
  fontFamily: font.fontFamily,
  color: font.color
};

export const StatList = styled.dl<IProps>(
  {
    label: 'icon-list',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    ...commonStyles
  }
  // ({ lastPadding, variant }) => ({
  //   'dt:first-of-type': {
  //     marginTop: '0px'
  //   },
  //   'dt:not(:first-of-type):before': {
  //     ...(getStyles(variant) as any)
  //   },
  //   'dt:last-of-type': {
  //     paddingTop: `${lastPadding}px`
  //   }
  // })
);

export const StyledStatTitle = styled.dt({
  label: 'stat-title',
  position: 'relative',
  ...commonStyles,
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '16px',
  lineHeight: '26px',
  marginLeft: scaffolding.gutterLg
});

export const StatBullet = styled.div({
  label: 'stat-bullet',
  width: '9px',
  height: '9px',
  borderRadius: '100%',
  backgroundColor: colours.pink,
  marginLeft: scaffolding.gutterLg
});

export const StyledStatSummary = styled.dd({
  label: 'stat-summary',
  position: 'relative',
  ...commonStyles,
  display: 'inline-flex',
  fontStyle: 'italic',
  fontSize: '14px',
  lineHeight: '16px',
  color: colours.greyLight,
  marginLeft: scaffolding.gutterLg
});

export const StyledStatNumber = styled.dt({
  label: 'stat-number',
  position: 'relative',
  ...commonStyles,
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '20px',
  lineHeight: '26px',
  marginLeft: scaffolding.gutterLg
});
