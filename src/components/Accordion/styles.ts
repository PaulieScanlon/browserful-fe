import styled from 'react-emotion';
import { common, colours, spaceMd, spaceSm } from '../../theme';

interface IProps {
  maxHeight: string;
  selectColour: string;
}

export const AccordionWrapper = styled.div({
  label: 'acorrdion-wrapper',
  position: 'relative',
  width: '100%',
  boxShadow: common.materialBoxShadow1,
  backgroundColor: colours.white
});

export const AccordionInput = styled.input<IProps>(
  {
    label: 'accordion-input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',

    ':checked + label': {
      color: colours.greyMid,
      '&:after': {
        content: `""`
      }
    }
  },
  ({ maxHeight, selectColour }) => ({
    ':checked + label + div': {
      maxHeight: maxHeight
    },
    ':checked + label': {
      '&:after': {
        backgroundColor: selectColour
      }
    }
  })
);

export const AccordionLabel = styled.label({
  label: 'accordion-label',
  display: 'flex',
  alignItems: 'center',
  padding: `0px ${spaceMd}px`,
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderBottom: `1px solid ${colours.greyLight}`,
  color: colours.greyLight,
  transition: `${common.transition}`,
  '&:after': {
    content: `""`,
    width: '20px',
    height: '20px',
    borderRadius: '100%',
    backgroundColor: colours.greyUltraLight,
    transition: `${common.transition}`
  }
});

export const AccordionText = styled.span({
  label: 'accordion-text',
  padding: `${spaceMd}px 0px`,
  display: 'flex',
  flexGrow: 1
});

export const AccordionContent = styled.div({
  label: 'accordion-content',
  overflow: 'hidden',
  maxHeight: '0px',
  backgroundColor: colours.offWhite,
  transition: `${common.transition}`
});

export const AccordionContentInner = styled.div({
  padding: `${spaceMd}px`,
  color: colours.greyMid
});
