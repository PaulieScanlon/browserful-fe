import * as React from 'react';

import { VersionButton, VersionText, PopoverWrapper } from './styles';
import { SelectPopover } from '../SelectPopover';

import { SelectPopoverChangeProps } from '../SelectPopover';

interface IProps extends SelectPopoverChangeProps {
  browser: string;
  version: any;
  isIncluded?: boolean;
  hasOverride?: boolean;
}

export const VersionChip: React.SFC<IProps> = ({
  browser,
  version,
  isIncluded,
  hasOverride,
  onAutoChange,
  onIncludeChange,
  onExcludeChange
}) => {
  return (
    <VersionButton isIncluded={isIncluded} hasOverride={hasOverride}>
      <PopoverWrapper>
        <SelectPopover
          browser={browser}
          version={version}
          isIncluded={isIncluded}
          hasOverride={hasOverride}
          name={`popover-${browser}-${version}`}
          onAutoChange={(browser, version, event) =>
            onAutoChange(browser, version, event)
          }
          onIncludeChange={(browser, version, event) =>
            onIncludeChange(browser, version, event)
          }
          onExcludeChange={(browser, version, event) =>
            onExcludeChange(browser, version, event)
          }
        />
      </PopoverWrapper>
      <VersionText isIncluded={isIncluded}>{version || 0}</VersionText>
    </VersionButton>
  );
};

VersionChip.defaultProps = {
  isIncluded: false,
  hasOverride: false,
  onAutoChange: () => {},
  onIncludeChange: () => {},
  onExcludeChange: () => {}
};
