import * as React from 'react';

import { colours } from '../../theme';
import { H4, H5 } from '../Typography';
import { BrowserfulLogo } from '../BrowserfulLogo';

import { StateWrapper, StateEllipse } from './styles';

interface IProps {
  mainMessage: string;
  subMessage?: string;
}

export const EmptyState: React.SFC<IProps> = ({
  mainMessage,
  subMessage
}: IProps) => {
  return (
    <StateWrapper>
      <StateEllipse>
        <BrowserfulLogo showText={false} logoColour={colours.offWhite} />
      </StateEllipse>
      <H4 fontAlign="center">{mainMessage}</H4>
      {subMessage && (
        <H5 fontAlign="center" fontColour={colours.greyLight}>
          {subMessage}
        </H5>
      )}
    </StateWrapper>
  );
};
