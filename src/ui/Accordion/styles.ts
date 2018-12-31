import styled from 'react-emotion';
import {
  colours,
  scaffolding,
  transitionBuilder,
  materialBuilder
} from '../../theme';

interface IProps {
  maxHeight: string;
  selectColour: string;
}

interface EProps {
  backgroundColour?: string;
}

export const AccordionWrapper = styled.div({
  label: 'acorrdion-wrapper',
  position: 'relative',
  width: '100%',
  boxShadow: `${materialBuilder(1)}`,
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
      color: colours.greyMid,
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
  minHeight: '56px',
  padding: `0px ${scaffolding.gutterLg}`,
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderBottom: `1px solid ${colours.greyLight}`,
  color: colours.greyUltraLight,
  transition: `${transitionBuilder('color')}`,
  WebkitTapHighlightColor: colours.transparent,
  '&:after': {
    content: `""`,
    position: 'absolute',
    right: scaffolding.gutterLg,
    width: '16px',
    height: '16px',
    borderRadius: '100%',
    backgroundColor: colours.greyUltraLight,
    transition: `${transitionBuilder('background-color')}`
  }
});

export const AccordionContent = styled.div<EProps>(
  {
    label: 'accordion-content',
    overflow: 'hidden',
    maxHeight: '0px',
    backgroundColor: colours.offWhite,
    transition: `${transitionBuilder('max-height')}`
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour
  })
);

export const AccordionContentInner = styled.div({
  padding: `${scaffolding.gutterLg}`,
  color: colours.greyMid
});
