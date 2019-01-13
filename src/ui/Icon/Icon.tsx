import * as React from 'react';

import { paths } from './paths';
import { SVG } from './styles';
import { colours } from '../../theme';

interface IProps {
  name: string;
  size?: string;
  fill?: string;
  onClick?: () => void;
}

const sizes = {
  sm: '16',
  md: '24',
  lg: '32',
  xl: '56',
  viewBox: '24'
};

export const Icon: React.SFC<IProps> = ({
  name,
  size,
  fill,
  onClick
}: IProps) => {
  return (
    <SVG
      onClick={() => onClick()}
      width={sizes[size]}
      height="100%"
      fill={fill}
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
  fill: colours.greyMid,
  onClick: () => {}
};
