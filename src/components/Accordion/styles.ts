import styled from 'react-emotion';
import { common, colours, spaceMd } from '../../theme';

interface IProps {
  maxHeight: string;
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
        content: `""`,
        backgroundColor: colours.pink
      }
    }
  },
  ({ maxHeight }) => ({
    ':checked + label + div': {
      maxHeight: maxHeight
    }
  })
);

export const AccordionLabel = styled.label({
  label: 'accordion-label',
  display: 'flex',
  justifyContent: 'space-between',
  padding: `${spaceMd}px`,
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderBottom: `1px solid ${colours.greyLight}`,
  color: colours.greyLight,
  transition: `${common.transition}`,
  '&:after': {
    content: `""`,
    width: '14px',
    height: '14px',
    borderRadius: '100%',
    backgroundColor: colours.greyUltraLight,
    transition: `${common.transition}`
  }
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
