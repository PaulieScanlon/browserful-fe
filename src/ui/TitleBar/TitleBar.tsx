import * as React from 'react';

import { Icon } from '../Icon';

import { colours } from '../../theme';

import { TitleBarWrapper, TitleChip } from './styles';
import { LabelTextRegular } from '../Typography';

interface IProps {
  highlightColour?: string;
  icon: string;
  title: string;
  renderStats?(): React.ReactNode;
}

export const TitleBar: React.SFC<IProps> = ({
  highlightColour,
  icon,
  title,
  renderStats
}: IProps) => {
  return (
    <TitleBarWrapper>
      <TitleChip className="title-chip" highlightColour={highlightColour}>
        <Icon name={icon} size="md" fill={colours.white} />
      </TitleChip>
      <LabelTextRegular className="title">{title}</LabelTextRegular>
      {renderStats()}
    </TitleBarWrapper>
  );
};

TitleBar.defaultProps = {
  highlightColour: colours.pink,
  renderStats: () => null
};
