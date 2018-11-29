import * as React from 'react';

import { HandleStyles, HandleValueStyles } from './styles';

interface IProps {
  handle: any;
  getHandleProps: any;
  showHandleValue: boolean;
  sliderColour: string;
}

export const Handle: React.SFC<IProps> = ({
  handle,
  getHandleProps,
  showHandleValue,
  sliderColour
}: IProps) => {
  const { id, value, percent } = handle;
  return (
    <HandleStyles
      sliderColour={sliderColour}
      style={{
        left: `${percent}%`
      }}
      {...getHandleProps(id)}
    >
      {showHandleValue && <HandleValueStyles>{value}</HandleValueStyles>}
    </HandleStyles>
  );
};
