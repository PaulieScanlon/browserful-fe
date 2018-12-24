import * as React from 'react';

import { paths } from './paths';
import { SVG } from './styles';
import { colours } from '../../theme';

interface IProps {
  name: string;
  size?: string;
  fill?: string;
}

const sizes = {
  sm: '16',
  md: '24',
  lg: '32',
  xl: '56',
  viewBox: '24'
};

export const Icon: React.SFC<IProps> = ({ name, size, fill }: IProps) => {
  return (
    <SVG
      width={sizes[size]}
      fill={fill}
      height="100%"
      viewBox={`0 0 ${sizes.viewBox} ${sizes.viewBox}`}
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
    >
      <title>{name}</title>
      <path d={`${paths[name]}`} />
    </SVG>
  );
};

Icon.defaultProps = {
  size: 'md',
  fill: colours.greyMid
};
