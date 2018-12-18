import styled from 'react-emotion';
import { transitionBuilder, colours, scaffolding } from '../../theme';
import { font } from '../../typography';
interface IProps {
  selectColour: string;
}

export const SwitchLabel = styled.label({
  label: 'switch-label',
  position: 'relative',
  display: 'inline-flex',
  flexDirecton: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none'
});

export const SwitchInput = styled.input<IProps>(
  {
    label: 'switch-input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',
    ':checked + span': {
      ':before': {
        transform: 'translateX(16px)'
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
  width: '42px',
  height: '24px',
  right: '0px',
  backgroundColor: colours.greyUltraLight,
  transition: transitionBuilder('all'),
  ':before': {
    position: 'absolute',
    content: `""`,
    borderRadius: '50%',
    width: '16px',
    height: '16px',
    left: '4px',
    bottom: '4px',
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
