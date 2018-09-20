import * as React from 'react';

import { colours } from '../../theme';

import { H5 } from '../../typography';
import { LogoWrapper, SvgWrapper } from './styles';

interface IProps {
  showText?: boolean;
  fontColour?: string;
  logoColour?: string;
}

export const BrowserfulLogo: React.SFC<IProps> = ({
  showText,
  fontColour,
  logoColour
}: IProps) => {
  return (
    <LogoWrapper>
      <SvgWrapper>
        <svg
          style={{ fill: `${logoColour}` }}
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
      </SvgWrapper>

      {showText && (
        <H5 display="inline-flex" fontColour={fontColour}>
          Browserful
        </H5>
      )}
    </LogoWrapper>
  );
};

BrowserfulLogo.defaultProps = {
  showText: true,
  logoColour: `${colours.pink}`,
  fontColour: `${colours.greyMid}`
};
