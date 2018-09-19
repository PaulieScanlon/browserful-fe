import * as React from 'react';

import { colours } from '../../theme';

import { LogoWrapper } from './styles';

interface IProps {
  theme?: 'pink' | 'teal';
}

export const BrowserfulLogo: React.SFC<IProps> = ({ theme }: IProps) => {
  return (
    <LogoWrapper>
      <div>BrowserfulLogo {theme}</div>

      <svg
        style={{ fill: `${colours[theme]}` }}
        x="0px"
        y="0px"
        width="23.5"
        height="23.5"
      >
        <circle cx="9.6" cy="9.6" r="9.6" />
        <g>
          <circle cx="20.3" cy="20.3" r="3.2" />
        </g>
      </svg>
    </LogoWrapper>
  );
};

BrowserfulLogo.defaultProps = { theme: 'pink' };
