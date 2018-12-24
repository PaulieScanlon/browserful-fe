import styled, { css } from 'react-emotion';
import { fontFamily } from '../../ui/Typography/';
import { colours, materialBuilder, scaffolding } from '../../theme';

interface IProps {
  sliderColour: string;
}

export const SliderWrapper = styled.div({
  label: 'slider-wrapper',
  marginBottom: scaffolding.gutterLg
});

export const HandlesWrapper = styled.div({
  label: 'handles-wrapper'
});

export const TracksWrapper = styled.div({
  label: 'tracks-wrapper'
});

export const TicksWrapper = styled.div({
  label: 'ticks-wrapper'
});

export const TickMarksWrapper = styled.div({
  label: 'tick-marks-wrapper'
});

export const SliderStyles = css`
  position: relative;
  width: calc(100% - ${scaffolding.gutterXl});
  height: 80px;
  margin: 0px auto;
`;

export const RailStyles = styled.div({
  position: 'absolute',
  width: '100%',
  height: '10px',
  marginTop: '35px',
  borderRadius: '5px',
  backgroundColor: colours.greyUltraLight
});

export const TrackStyles = styled.div<IProps>(
  {
    label: 'track-styles',
    position: 'absolute',
    height: '10px',
    zIndex: 1,
    marginTop: '35px',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  ({ sliderColour }) => ({
    backgroundColor: sliderColour
  })
);

export const HandleStyles = styled.button<IProps>(
  {
    label: 'handle-styles',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-12px',
    marginTop: '25px',
    zIndex: 2,
    width: '26px',
    height: '26px',
    border: '0px',
    cursor: 'pointer',
    borderRadius: '50%',
    boxShadow: materialBuilder(2),
    ...fontFamily,
    outline: 'none',
    ':active': {
      span: {
        display: 'block'
      }
    }
  },
  ({ sliderColour }) => ({
    backgroundColor: sliderColour
  })
);

export const HandleValueStyles = styled.span({
  label: 'handle-value-styles',
  position: 'absolute',
  display: 'none',
  top: '-35px',
  textAlign: 'center',
  padding: scaffolding.gutterSm,
  borderRadius: '6px',
  color: colours.white,
  backgroundColor: colours.greyDark,
  opacity: 0.8,
  fontSize: '12px'
});

export const TickMarksStyles = styled.div({
  label: 'tick-marks-styles',
  position: 'absolute',
  marginTop: '50px',
  marginLeft: '-0.5px',
  width: '1px',
  height: '8px',
  backgroundColor: colours.greyLight
});

export const TickNumbersStyles = styled.div({
  label: 'tick-numbers-styles',
  position: 'absolute',
  marginTop: '60px',
  fontSize: '10px',
  textAlign: 'center',
  color: colours.greyMid
});
