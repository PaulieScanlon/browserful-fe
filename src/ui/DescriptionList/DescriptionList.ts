import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../Typography';

interface IProps {
  bulletColour?: string;
}

export const DescriptionList = styled.dl({
  label: 'description-list',
  position: 'relative',
  fontFamily: font.fontFamily,
  color: font.color
});

export const DescriptionTerm = styled.dt<IProps>(
  {
    label: 'description-term',
    display: 'flex',
    fontSize: '16px',
    lineHeight: '26px',
    alignItems: 'center',
    marginLeft: scaffolding.gutterXl,
    ':before': {
      position: 'absolute',
      marginTop: '10px',
      left: '0px',
      content: `""`,
      width: '12px',
      height: '12px',
      borderRadius: '100%',
      backgroundColor: colours.pink
    }
  },
  ({ bulletColour }) => ({
    ':before': {
      backgroundColor: bulletColour
    }
  })
);

export const DescriptionDescription = styled.dd({
  label: 'description-description',
  fontSize: '14px',
  lineHeight: '16px',
  color: colours.greyLight,
  fontStyle: 'italic',
  marginLeft: scaffolding.gutterXl,
  marginBottom: scaffolding.gutterLg
});
