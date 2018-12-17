import * as React from 'react';

import { VersionButton, VersionText, PopoverWrapper } from './styles';
import { SelectPopover } from '../SelectPopover';

import { SelectPopoverChangeProps } from '../SelectPopover';

interface IProps extends SelectPopoverChangeProps {
  browser: string;
  version: number | string;
  isIncluded?: boolean;
  hasOverride?: string;
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
      <VersionText>{version || 0}</VersionText>
    </VersionButton>
  );
};

VersionChip.defaultProps = {
  isIncluded: false,
  onAutoChange: () => {},
  onIncludeChange: () => {},
  onExcludeChange: () => {}
};
