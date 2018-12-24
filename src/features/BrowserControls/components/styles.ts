import styled from 'react-emotion';
import {
  materialBuilder,
  colours,
  scaffolding,
  transitionBuilder
} from '../../../theme';

interface IProps {
  borderColour: string;
}

export const TitleBar = styled.div<IProps>(
  {
    label: 'title-bar',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colours.white,
    padding: scaffolding.gutterLg,
    boxShadow: materialBuilder(1),
    borderLeftStyle: 'solid',
    borderLeftWidth: '5px',
    transition: `${transitionBuilder('border-left-color')}`
  },
  ({ borderColour }) => ({
    borderLeftColor: borderColour
  })
);
