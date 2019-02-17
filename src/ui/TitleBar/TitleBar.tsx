import * as React from 'react';

import { Icon } from '../Icon';
import { LabelTextRegular } from '../Typography';

import { TitleBarWrapper, TitleChip } from './styles';

import { colours } from '../../theme';

interface IProps {
  backgrondColour?: string;
  highlightColour?: string;
  fontColour?: string;
  icon?: string;
  fill?: string;
  title?: string;
  renderStats?(): React.ReactNode;
  style?: any;
}

export const TitleBar: React.SFC<IProps> = ({
  backgrondColour,
  highlightColour,
  fontColour,
  icon,
  fill,
  title,
  renderStats,
  style
}: IProps) => {
  return (
    <TitleBarWrapper backgrondColour={backgrondColour} style={{ ...style }}>
      {icon && (
        <TitleChip className="title-chip" highlightColour={highlightColour}>
          <Icon name={icon} fill={fill} size="md" />
        </TitleChip>
      )}
      {title && (
        <LabelTextRegular className="title" fontColour={fontColour}>
          {title}
        </LabelTextRegular>
      )}
      {renderStats()}
    </TitleBarWrapper>
  );
};

TitleBar.defaultProps = {
  backgrondColour: colours.white,
  highlightColour: colours.pink,
  fontColour: colours.greyDark,
  fill: colours.white,
  renderStats: () => null
};
