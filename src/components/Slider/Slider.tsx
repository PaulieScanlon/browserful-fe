import * as React from 'react';

import { SliderWrapper } from './styles';

interface IProps {
  thing?: any;
}

export const Slider: React.SFC<IProps> = ({ thing }: IProps) => {
  return <SliderWrapper />;
};
