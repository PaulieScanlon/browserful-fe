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
  padding: `0px ${scaffolding.gutterLg}`,
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderBottom: `1px solid ${colours.greyLight}`,
  color: colours.greyLight,
  transition: `${transitionBuilder('color')}`,
  '&:after': {
    content: `""`,
    width: '20px',
    height: '20px',
    borderRadius: '100%',
    backgroundColor: colours.greyUltraLight,
    transition: `${transitionBuilder('background-color')}`
  }
});

export const AccordionText = styled.span({
  label: 'accordion-text',
  padding: `${scaffolding.gutterLg} 0px`,
  display: 'flex',
  flexGrow: 1
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
