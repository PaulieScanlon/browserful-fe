import styled from 'react-emotion';
import { common, colours, spaceMd, spaceSm } from '../../theme';

interface IProps {
  maxHeight: string;
}

export const AccordionWrapper = styled.div({
  label: 'acorrdion-wrapper',
  position: 'relative',
  width: '100%',
  boxShadow: common.materialBoxShadow1
});

export const Input = styled.input<IProps>(
  {
    label: 'input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',

    ':checked + label': {
      '&:after': {
        content: `""`,
        border: `1px solid ${colours.greyLight}`,
        backgroundColor: `${colours.greyLight}`
      }
    }
  },
  ({ maxHeight }) => ({
    ':checked ~ div': {
      maxHeight: maxHeight
    }
  })
);

export const Label = styled.label({
  label: 'label',
  position: 'relative',
  display: 'block',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: `${spaceMd}px`,
  color: colours.greyDark,
  borderBottom: `1px solid ${colours.greyLight}`,
  transition: `${common.transition}`,
  ':after': {
    content: `""`,
    position: 'absolute',
    width: '16px',
    height: '16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '100%',
    right: `${spaceMd}px`,
    textAlign: 'center',
    border: `1px solid ${colours.greyLight}`,
    transition: `${common.transition}`
  }
});

export const ContentWrapper = styled.div({
  label: 'content-wrapper',
  overflow: 'hidden',
  maxHeight: '0px',
  transition: `${common.transition}`,
  padding: `0px ${spaceMd}px`,
  backgroundColor: colours.offWhite,
  color: colours.greyDark
});

export const Content = styled.div({
  label: 'content',
  padding: `${common.paddingTB} 0px`
});
