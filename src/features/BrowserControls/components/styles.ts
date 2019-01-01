import styled from 'react-emotion';
import { colours, scaffolding, transitionBuilder } from '../../../theme';

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
    borderBottomStyle: 'solid',
    borderBottomWidth: '3px',
    transition: `${transitionBuilder('border-bottom-color')}`
  },
  ({ borderColour }) => ({
    borderBottomColor: borderColour
  })
);
