import * as React from 'react';

import { Icon } from '../Icon';
import { LabelTextRegular } from '../Typography';

import { TitleBarWrapper, TitleChip } from './styles';

import { colours } from '../../theme';

interface IProps {
  highlightColour?: string;
  icon?: string;
  fill?: string;
  title?: string;
  renderStats?(): React.ReactNode;
}

export const TitleBar: React.SFC<IProps> = ({
  highlightColour,
  icon,
  fill,
  title,
  renderStats
}: IProps) => {
  return (
    <TitleBarWrapper>
      {icon && (
        <TitleChip className="title-chip" highlightColour={highlightColour}>
          <Icon name={icon} fill={fill} size="md" />
        </TitleChip>
      )}
      {title && <LabelTextRegular className="title">{title}</LabelTextRegular>}
      {renderStats()}
    </TitleBarWrapper>
  );
};

TitleBar.defaultProps = {
  highlightColour: colours.pink,
  fill: colours.white,
  renderStats: () => null
};
