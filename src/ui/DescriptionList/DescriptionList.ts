import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

interface IProps {
  variant?: string;
  lastPadding?: number;
  fontColour?: string;
  bulletColour?: string;
}

export enum variantTypes {
  TIMELINE = 'timeline'
}

const commonStyles = {
  fontFamily: font.fontFamily,
  color: font.color
};

const getStyles = (variant: string) => {
  if (variant === variantTypes.TIMELINE) {
    return {
      position: 'absolute',
      left: '-12px',
      content: `""`,
      width: '1px',
      height: `calc(100% + ${scaffolding.gutterXl})`,
      backgroundColor: colours.greyUltraLight
    };
  }

  return;
};

export const DescriptionList = styled.dl<IProps>(
  {
    label: 'description-list',
    position: 'relative',
    margin: '0px',
    ...commonStyles
  },
  ({ lastPadding, variant }) => ({
    'dt:not(:first-of-type):before': {
      ...(getStyles(variant) as any)
    },
    'dt:last-of-type': {
      paddingTop: `${lastPadding}px`
    }
  })
);

export const DescriptionTerm = styled.dt<IProps>(
  {
    label: 'description-term',
    position: 'relative',
    ...commonStyles,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: '16px',
    lineHeight: '26px',
    marginTop: scaffolding.gutterLg,
    marginLeft: scaffolding.gutterLg,
    paddingLeft: scaffolding.gutterSm
  },
  ({ bulletColour, fontColour }) => ({
    color: fontColour ? fontColour : colours.greyMid,
    ':after': {
      position: 'absolute',
      left: '-16px',
      content: `""`,
      width: '9px',
      height: '9px',
      borderRadius: '100%',
      backgroundColor: bulletColour ? bulletColour : colours.pink
    }
  })
);

export const DescriptionDescription = styled.dd<IProps>({
  label: 'description-description',
  position: 'relative',
  ...commonStyles,
  fontStyle: 'italic',
  fontSize: '14px',
  lineHeight: '16px',
  color: colours.greyLight,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: scaffolding.gutterLg,
  paddingLeft: scaffolding.gutterSm
});
