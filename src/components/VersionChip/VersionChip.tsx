import * as React from 'react';

import { VersionButton, VersionText } from './styles';

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
    <VersionButton isIncluded={isIncluded} hasOverride={hasOverride}>
      <VersionText>{version || 0}</VersionText>
    </VersionButton>
  );
};

VersionChip.defaultProps = {
  isIncluded: false
};
