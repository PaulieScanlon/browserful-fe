import * as React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

import { RangeSliderWrapper } from './styles';
import { colours } from '../../theme';

interface IProps {
  min: number;
  max: number;
  steps: number;
  sliderColour?: string;
  onChange?: (value: number[]) => void;
}

const inclusiveRange = (min, max, steps) => {
  return Array.from(
    Array.from(Array(Math.ceil((max - min + 1) / steps)).keys()),
    x => min + x * steps
  );
};

const createMarks = (min: number, max: number, steps: number) => {
  const marks = inclusiveRange(min, max, steps).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: curr
    }),
    {}
  );

  return marks;
};

const RangeHandle: React.SFC<{}> = (props): any => {
  const { value, dragging, index }: any = props;

  return (
    <Tooltip visible={dragging} placement="top" key={index}>
      <Handle value={value} />
    </Tooltip>
  );
};

export const RangeSlider: React.SFC<IProps> = ({
  min,
  max,
  steps,
  sliderColour,
  onChange
}: IProps) => {
  return (
    <RangeSliderWrapper sliderColour={sliderColour}>
      <Range
        min={min}
        max={max}
        defaultValue={[min, max]}
        handle={RangeHandle}
        marks={createMarks(min, max, steps)}
        tipFormatter={value => value}
        onChange={onChange}
      />
    </RangeSliderWrapper>
  );
};

RangeSlider.defaultProps = {
  sliderColour: colours.pink
};
