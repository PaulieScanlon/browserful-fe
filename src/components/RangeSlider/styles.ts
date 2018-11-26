import styled, { css } from 'react-emotion';
import { colours } from '../../theme';

const colourStyles = props =>
  css`
    .rc-slider-track {
      background-color: ${props.sliderColour};
    }

    .rc-slider-handle {
      background-color: ${props.sliderColour};
    }
  `;

const coreStyles = () =>
  css`
    .rc-slider {
      height: 24px;
      padding: 10px 0px;
      width: 95%;
      position: relative;
      margin: 0 auto;
    }

    .rc-slider-rail,
    .rc-slider-track,
    .rc-slider-step {
      height: 6px;
    }

    .rc-slider-rail {
      background-color: ${colours.greyLight};
      border-radius: 0px;
    }

    .rc-slider-handle {
      width: 6px;
      height: 16px;
      margin-top: -5px;
      margin-left: -3px;
      border-radius: 0px;
      border: none;
    }

    .rc-slider-handle:active {
      border: none;
      box-shadow: none;
    }

    .rc-slider-dot {
      display: none;
    }
    .rc-slider-mark-text {
      margin-top: 10px;
    }
  `;

export const RangeSliderWrapper = styled('span')`
  ${coreStyles};
  ${colourStyles};
  position: relative;
  display: block;
  margin: 10px 0px 40px 0px;
`;
