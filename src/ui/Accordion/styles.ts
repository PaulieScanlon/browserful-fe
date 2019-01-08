import styled from 'react-emotion';
import { colours, scaffolding, transitionBuilder } from '../../theme';

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
  border: `1px solid ${colours.greyUltraLight}`,
  boxSizing: 'border-box',
  backgroundColor: colours.white
});

export const AccordionInput = styled.input<IProps>(
  {
    label: 'accordion-input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',
    transition: transitionBuilder('background-color'),

    ':checked + .accordion-label': {
      color: colours.greyMid,
      div: {
        span: {
          opacity: 1
        }
      },
      '&:after': {
        content: `""`
      }
    }
  },
  ({ maxHeight, selectColour }) => ({
    ':checked + .accordion-label + div': {
      maxHeight: maxHeight
    },
    ':checked + .accordion-label': {
      color: colours.greyMid,
      '&:after': {
        backgroundColor: selectColour
      }
    },
    ':hover + .accordion-label': {
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
  padding: `0px calc(${scaffolding.gutterLg} - 2px)`,
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderBottom: `1px solid ${colours.greyLight}`,
  color: colours.greyUltraLight,

  WebkitTapHighlightColor: colours.transparent,
  div: {
    span: {
      opacity: 0.5
    }
  },
  '&:after': {
    content: `""`,
    position: 'absolute',
    right: scaffolding.gutterLg,
    width: '16px',
    height: '16px',
    borderRadius: '100%',
    backgroundColor: colours.greyUltraLight,
    transition: transitionBuilder('background-color')
  }
});

export const AccordionContent = styled.div({
  label: 'accordion-content',
  overflow: 'hidden',
  maxHeight: '0px',
  transition: 'max-height .3s ease-out'
});

export const AccordionContentInner = styled.div<EProps>(
  {
    padding: `${scaffolding.gutterLg}`,
    color: colours.greyMid
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour
  })
);
