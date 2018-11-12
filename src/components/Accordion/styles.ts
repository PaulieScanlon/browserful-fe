import styled from 'react-emotion';
import { common, colours, spaceMd } from '../../theme';

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
        width: '14px',
        height: '14px',
        borderWidth: '4px',
        borderColor: `${colours.pink}`,
        backgroundColor: `${colours.white}`,
        color: colours.pink
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
  boxSizing: 'border-box',
  ':after': {
    content: `""`,
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '100%',
    right: `${spaceMd}px`,
    textAlign: 'center',
    borderColor: `${colours.greyLight}`,
    transition: `${common.transition}`,
    color: colours.greyLight
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
