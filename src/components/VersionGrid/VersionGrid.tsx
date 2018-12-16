import * as React from 'react';

import { GridContent } from './styles';

import { VersionChip } from '../VersionChip';

import { SelectPopoverChangeProps } from '../SelectPopover';

interface IProps extends SelectPopoverChangeProps {
  data: any;
  maxHeight?: string;
}

export const VersionGrid: React.SFC<IProps> = ({
  data,
  onAutoChange,
  onIncludeChange,
  onExcludeChange
}: IProps) => {
  const { queryName, versions } = data;

  const versionChips = versions.map((obj, i) => {
    return (
      <VersionChip
        key={i}
        browser={queryName}
        // @TODO, this string replace should probs happen in the util function
        version={obj.id}
        isIncluded={obj.isIncluded}
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
    );
  });

  return <GridContent>{versionChips}</GridContent>;
};

VersionGrid.defaultProps = {
  onAutoChange: () => {},
  onIncludeChange: () => {},
  onExcludeChange: () => {}
};
