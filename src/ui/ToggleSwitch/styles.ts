import styled from 'react-emotion';
import { transitionBuilder, colours } from '../../theme';
import { font } from '../../ui/Typography';
interface IProps {
  theme?: 'light' | 'dark';
  selectColour?: string;
  flexDirection?: string;
  justifyContent?: string;
  config?: {
    checked: any;
    unchecked: any;
  };
  id?: string;
}

const getTheme = {
  light: {
    switchBackgroundColour: colours.greyUltraLight
  },

  dark: {
    switchBackgroundColour: colours.offBlack
  }
};

export const SwitchLabel = styled.label<IProps>(
  {
    label: 'switch-label',
    cursor: 'pointer',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: colours.transparent
  },
  ({ flexDirection }: any) => ({
    flexDirection: flexDirection
  })
);

export const SwitchInput = styled.input<IProps>(
  {
    label: 'switch-input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',
    transition: transitionBuilder('background-color'),

    ':checked + .switch-label': {
      '.switch-slider': {
        ':before': {
          transform: 'translateX(14px)'
        }
      }
    }
  },
  ({ selectColour, config, id }) => ({
    ':checked + .switch-label': {
      '.switch-slider': {
        backgroundColor: selectColour
      }
    },

    [`:checked ~ .switch-content-${id}`]: {
      ...config.checked
    },

    [`~ .switch-content-${id}`]: {
      ...config.unchecked
    },

    ':hover + .switch-label': {
      '.switch-slider': {
        backgroundColor: selectColour
      }
    }
  })
);

export const SwitchSlider = styled.span<IProps>(
  {
    label: 'switch-slider',
    position: 'relative',
    display: 'inline-block',
    borderRadius: '32px',
    width: '32px',
    height: '18px',
    right: '0px',
    cursor: 'pointer',
    backgroundColor: colours.greyUltraLight,
    transition: transitionBuilder('all'),
    ':before': {
      position: 'absolute',
      content: `""`,
      borderRadius: '50%',
      width: '12px',
      height: '12px',
      left: '3px',
      bottom: '3px',
      backgroundColor: colours.white,
      transition: transitionBuilder('all')
    }
  },
  ({ theme }) => ({
    backgroundColor: getTheme[theme].switchBackgroundColour
  })
);

export const SwitchText = styled.span({
  label: 'switch-text',
  fontSize: `${font.fontSize}`,
  lineHeight: `${font.lineHeight}`,
  fontFamily: `${font.fontFamily}`,
  fontWeight: 'normal',
  textAlign: 'center',
  color: colours.greyLight,
  transition: transitionBuilder('all')
});

export const SwitchControls = styled.div<IProps>(
  {
    label: 'switch-controls',
    display: 'flex',
    alignItems: 'center'
    // border: '1px solid red'
  },
  ({ justifyContent, flexDirection }: any) => ({
    justifyContent: justifyContent,
    flexDirection: flexDirection
  })
);

export const SwitchContent = styled.div({
  label: 'switch-content',
  display: 'flex'
  // border: '1px solid blue'
});
