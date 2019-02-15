import styled from 'react-emotion';
import { colours, scaffolding, transitionBuilder } from '../../theme';

interface IProps extends EProps {
  maxHeight: string;
  selectColour: string;
}

interface EProps {
  theme: string;
}

const getTheme = {
  light: {
    color: colours.greyMid,
    borderColour: colours.greyUltraLight,
    backgroundColour: colours.white,
    backgroundColourInner: colours.offWhite,
    labelColour: colours.greyUltraLight,
    dotColour: colours.greyUltraLight
  },

  dark: {
    color: colours.white,
    borderColour: colours.greyMid,
    backgroundColour: colours.greyDark,
    backgroundColourInner: colours.offBlack,
    labelColour: colours.greyMid,
    dotColour: colours.greyMid
  }
};

export const AccordionWrapper = styled.div<EProps>(
  {
    label: 'acorrdion-wrapper',
    position: 'relative',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    boxSizing: 'border-box'
  },
  ({ theme }) => ({
    borderColor: getTheme[theme].borderColour,
    backgroundColor: getTheme[theme].backgroundColour
  })
);

export const AccordionInput = styled.input<IProps>(
  {
    label: 'accordion-input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',

    transition: transitionBuilder('background-color'),

    '.accordion-label': {
      borderBottomColor: colours.transparent
    },
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
  ({ maxHeight, selectColour, theme }) => ({
    ':checked + .accordion-label + div': {
      maxHeight: maxHeight
    },
    ':checked + .accordion-label': {
      color: getTheme[theme].color,
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

export const AccordionLabel = styled.label<EProps>(
  {
    label: 'accordion-label',
    display: 'flex',
    alignItems: 'center',
    minHeight: '56px',
    padding: `0px ${scaffolding.gutterLg}`,
    cursor: 'pointer',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    boxSizing: 'border-box',
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
      transition: transitionBuilder('all')
    }
  },
  ({ theme }) => ({
    color: getTheme[theme].labelColour,
    borderBottomColor: getTheme[theme].borderColour,
    '&:after': {
      backgroundColor: getTheme[theme].dotColour
    }
  })
);

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
  ({ theme }) => ({
    backgroundColor: getTheme[theme].backgroundColourInner
  })
);
