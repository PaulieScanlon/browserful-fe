import styled, { css } from 'react-emotion';
import { colours, common } from '../../theme';
import { spaceSm } from '../../theme/index';

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
      width: 22px;
      height: 22px;
      margin-top: -9px;
      margin-left: -12px;
      border-color: ${colours.offWhite};
      box-shadow: ${common.materialBoxShadow1};
    }

    .rc-slider-dot {
      display: none;
    }
    .rc-slider-mark-text {
      margin-top: ${spaceSm}px;
    }
  `;

export const RangeSliderWrapper = styled('span')`
  ${coreStyles};
  ${colourStyles};
  position: relative;
  display: block;
  margin: 10px 0px 40px 0px;
`;
