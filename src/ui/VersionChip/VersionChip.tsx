import * as React from 'react';

import { VersionChipWrapper, VersionText } from './styles';

interface IProps {
  version: number | string;
  isIncluded?: boolean;
  hasOverride?: string;
}

export const VersionChip: React.SFC<IProps> = ({
  version,
  isIncluded,
  hasOverride
}) => {
  return (
    <VersionChipWrapper isIncluded={isIncluded} hasOverride={hasOverride}>
      <VersionText>{version || 0}</VersionText>
    </VersionChipWrapper>
  );
};

VersionChip.defaultProps = {
  isIncluded: false
};
