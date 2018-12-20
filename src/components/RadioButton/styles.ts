import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../../typography';

interface IProps {
  selectColour?: string;
  flexDirection?: string;
}

export const RadioLabel = styled.label<IProps>(
  {
    label: 'radio-label',
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
  lineHeight: '16px',
  fontFamily: `${font.fontFamily}`,
  fontWeight: 'normal',
  textAlign: 'center',
  margin: `0px ${scaffolding.gutterSm}`,
  color: colours.greyLight
});
