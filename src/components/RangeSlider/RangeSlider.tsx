import * as React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
const d3 = require('d3-scale');

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
  sliderColour?: string;
  onChange: (value: number[]) => void;
}

const marks = {
  1970: '1970',
  2018: 'now'
};

const createMarks = (min: number, max: number) => {
  const x = d3
    .scaleLinear()
    .domain([min, max])
    .range([min, max]);

  return x.ticks(9);
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
  sliderColour,
  onChange
}: IProps) => {
  createMarks(min, max);

  return (
    <RangeSliderWrapper sliderColour={sliderColour}>
      <Range
        min={min}
        max={max}
        defaultValue={[min, max]}
        handle={RangeHandle}
        marks={marks}
        // tipFormatter={value => `${value}%`}
        tipFormatter={value => value}
        // tipProps={{
        //   visible: true
        // }}
        onChange={onChange}
      />
    </RangeSliderWrapper>
  );
};

RangeSlider.defaultProps = {
  sliderColour: colours.pink
};
