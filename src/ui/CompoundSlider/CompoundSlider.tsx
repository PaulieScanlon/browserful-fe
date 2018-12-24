import * as React from 'react';
import { Slider, Rail, Handles, Ticks, Tracks } from 'react-compound-slider';

import { colours } from '../../theme';

import { Handle } from './Handle';
import { Track } from './Track';
import { Tick } from './Tick';

import {
  SliderWrapper,
  HandlesWrapper,
  TracksWrapper,
  TicksWrapper,
  SliderStyles,
  RailStyles
} from './styles';

interface IProps {
  domain: Array<number>;
  step: number;
  values: Array<number>;
  tickCount: number;
  mode?: number;
  reversed?: boolean;
  showHandleValue?: boolean;
  sliderColour?: string;
  onChange?: (values: any) => void;
  onUpdate?: (values: any) => void;
}

export const CompoundSlider: React.SFC<IProps> = ({
  domain,
  step,
  values,
  tickCount,
  mode,
  reversed,
  showHandleValue,
  sliderColour,
  onChange,
  onUpdate
}: IProps) => {
  return (
    <SliderWrapper>
      <Slider
        className={`${SliderStyles}`}
        domain={domain}
        step={step}
        mode={mode}
        reversed={reversed}
        values={values}
        onChange={values => onChange(values)}
        onUpdate={values => onUpdate(values)}
      >
        <Rail>{({ getRailProps }) => <RailStyles {...getRailProps()} />}</Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <HandlesWrapper>
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  showHandleValue={showHandleValue}
                  sliderColour={sliderColour}
                  getHandleProps={getHandleProps}
                />
              ))}
            </HandlesWrapper>
          )}
        </Handles>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <TracksWrapper>
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                  sliderColour={sliderColour}
                />
              ))}
            </TracksWrapper>
          )}
        </Tracks>
        <Ticks count={tickCount}>
          {({ ticks }) => (
            <TicksWrapper>
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </TicksWrapper>
          )}
        </Ticks>
      </Slider>
    </SliderWrapper>
  );
};

CompoundSlider.defaultProps = {
  reversed: false,
  showHandleValue: false,
  sliderColour: colours.pink,
  mode: 1,
  onChange: () => {},
  onUpdate: () => {}
};
