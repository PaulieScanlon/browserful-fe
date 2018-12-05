import styled from 'react-emotion';
import { transitionBuilder, colours } from '../../theme';

interface IProps {
  selectColour: string;
}

export const SwitchLabel = styled.label({
  label: 'switch-label',
  position: 'relative',
  display: 'inline-block',
  width: '42px',
  height: '24px'
});

export const SwitchInput = styled.input<IProps>(
  {
    label: 'switch-input',
    opacity: 0,
    width: '0px',
    height: '0px',
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
  position: 'absolute',
  cursor: 'pointer',
  borderRadius: '32px',
  top: '0px',
  left: '0px',
  bottom: '0px',
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
