import styled from 'react-emotion';
import { transitionBuilder, colours, scaffolding } from '../../theme';
import { font } from '../../ui/Typography';
interface IProps {
  selectColour?: string;
  flexDirection?: string;
}

export const SwitchLabel = styled.label<IProps>(
  {
    label: 'switch-label',
    position: 'relative',
    display: 'inline-flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    ':checked + span': {
      ':before': {
        transform: 'translateX(14px)'
      }
    }
  },
  ({ selectColour }) => ({
    ':checked + span': {
      backgroundColor: selectColour
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
  label: 'radio-text',
  fontSize: '14px',
  lineHeight: '16px',
  fontFamily: `${font.fontFamily}`,
  fontWeight: 'normal',
  textAlign: 'center',
  margin: `0px ${scaffolding.gutterSm}`,
  color: colours.greyLight
});
