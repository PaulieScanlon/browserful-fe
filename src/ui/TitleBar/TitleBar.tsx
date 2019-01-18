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
  style?: any;
}

export const TitleBar: React.SFC<IProps> = ({
  highlightColour,
  icon,
  fill,
  title,
  renderStats,
  style
}: IProps) => {
  return (
    <TitleBarWrapper style={{ ...style }}>
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
