import styled from 'react-emotion';
import { transitionBuilder, colours, scaffolding } from '../../theme';
import { font } from '../../ui/Typography';
interface IProps {
  selectColour?: string;
  flexDirection?: string;
  justifyContent?: string;
  config?: {
    checked: any;
    unchecked: any;
  };
}

export const SwitchLabel = styled.label<IProps>(
  {
    label: 'switch-label',
    margin: `${scaffolding.gutterSm} 0px`,
    cursor: 'pointer',
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

    ':checked + .switch-controls': {
      '.switch-slider': {
        ':before': {
          transform: 'translateX(14px)'
        }
      }
    }
  },
  ({ selectColour, config }) => ({
    ':checked + .switch-controls': {
      '.switch-slider': {
        '+ .switch-text': {
          color: colours.greyMid
        },
        backgroundColor: selectColour
      }
    },
    ':checked ~ .switch-content': {
      ...config.checked
    },
    ' ~ .switch-content': {
      ...config.unchecked
    },
    ':hover + .switch-controls': {
      '.switch-slider': {
        backgroundColor: selectColour
      }
    }
  })
);

export const SwitchSlider = styled.span({
  label: 'switch-slider',
  position: 'relative',
  display: 'inline-block',
  borderRadius: '32px',
  width: '32px',
  height: '18px',
  right: '0px',
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
});

export const SwitchText = styled.small({
  label: 'switch-text',
  fontSize: `${font.fontSize}`,
  lineHeight: `${font.lineHeight}`,
  fontFamily: `${font.fontFamily}`,
  fontWeight: 'normal',
  textAlign: 'center',
  margin: `0px ${scaffolding.gutterSm}`,
  color: colours.greyLight,
  transition: transitionBuilder('all')
});

export const SwitchControls = styled.div<IProps>(
  {
    label: 'switch-controls',
    display: 'flex',
    alignItems: 'center'
  },
  ({ justifyContent }) => ({
    justifyContent: justifyContent
  })
);

export const SwitchContent = styled.div({
  label: 'switch-content',
  display: 'flex'
});
