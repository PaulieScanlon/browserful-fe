import * as React from 'react';

import { IProps } from '../types';

import { TitleBar } from '../../../ui/TitleBar';
import { PreTag } from '../../../common/PreTag';

import { colours } from '../../../theme';

export const PostCss: React.SFC<IProps> = ({ browserQuery }: IProps) => {
  return (
    <React.Fragment>
      <TitleBar
        backgrondColour={colours.greyDark}
        highlightColour={colours.greyDark}
        fontColour={colours.greyLight}
        fill={colours.pink}
        icon="code"
        title="PostCSS"
      />
      <PreTag>{browserQuery}</PreTag>
    </React.Fragment>
  );
};
