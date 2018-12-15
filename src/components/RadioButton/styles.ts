import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';

interface IProps {
  selectColour: string;
}

export const RadioLabel = styled.label({
  label: 'radio-label',
  position: 'relative',
  display: 'inline-flex',
  flexDirecton: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none'
});

export const RadioInput = styled.input<IProps>(
  {
    label: 'radio-input',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    display: 'none',

    ':checked + span + small': {
      color: colours.greyMid
    }
  },
  ({ selectColour }) => ({
    ':checked + span': {
      backgroundColor: selectColour
    }
  })
);

export const RadioStyle = styled.span({
  label: 'radio-style',
  display: 'inline-block',
  position: 'relative',
  borderRadius: '50%',
  width: '16px',
  height: '16px',
  backgroundColor: colours.greyUltraLight
});

export const RadioText = styled.small({
  label: 'radio-text',
  fontSize: '14px',
  margin: `0px ${scaffolding.gutterSm}`,
  color: colours.greyLight
});
