import * as React from 'react';

import { TrackStyles } from './styles';

interface IProps {
  source: any;
  target: any;
  getTrackProps: any;
  sliderColour: string;
}

export const Track: React.SFC<IProps> = ({
  source,
  target,
  getTrackProps,
  sliderColour
}: IProps) => {
  return (
    <TrackStyles
      sliderColour={sliderColour}
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
};
