import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';

interface EProps {
  theme: string;
}

const getTheme = {
  light: {
    color: colours.greyMid,
    borderColour: colours.greyUltraLight,
    borderBottomColour: colours.greyUltraLight,
    borderTopColour: colours.greyUltraLight,
    backgroundColour: colours.white,
    backgroundColourInner: colours.white,
    labelColour: colours.greyUltraLight,
    dotColour: colours.greyUltraLight
  },

  dark: {
    color: colours.white,
    borderColour: colours.greyDark,
    borderBottomColour: colours.greyDark,
    borderTopColour: colours.greyDark,
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
    boxSizing: 'border-box',
    '.switch-controls': {
      padding: `0px ${scaffolding.gutterLg}`
    }
  },
  ({ theme }) => ({
    borderColor: getTheme[theme].borderColour,
    backgroundColor: getTheme[theme].backgroundColour
  })
);

export const AccordionHeader = styled.div({
  label: 'accordion-label',
  WebkitTapHighlightColor: colours.transparent
});

export const AccordionHeaderLabel = styled.div({
  label: 'accordion-header-label',
  padding: `${scaffolding.gutterLg} 0px`
});

export const AccordionContent = styled.div<EProps>(
  {
    label: 'accordion-content',
    width: '100%',
    borderWidth: '1px 0px',
    borderStyle: 'solid none',
    boxSizing: 'border-box',
    color: colours.greyMid,
    padding: `${scaffolding.gutterLg}`
  },
  ({ theme }) => ({
    color: getTheme[theme].labelColour,
    backgroundColor: getTheme[theme].backgroundColourInner,
    borderTopColor: getTheme[theme].borderTopColour,
    borderBottomColor: getTheme[theme].borderBottomColour
  })
);
