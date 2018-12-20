import * as React from 'react';

import { GridContent } from './styles';

import { VersionChip } from '../VersionChip';

interface IProps {
  data: any;
  maxHeight?: string;
}

export const VersionGrid: React.SFC<IProps> = ({ data }: IProps) => {
  const { friendlyName, queryName, logo, versions } = data;

  const versionChips = versions.map((version, i) => {
    return (
      <VersionChip
        key={i}
        friendlyName={friendlyName}
        queryName={queryName}
        version={version.id}
        logo={logo}
        isIncluded={version.isIncluded}
        hasOverride={version.hasOverride}
      />
    );
  });

  return <GridContent>{versionChips}</GridContent>;
};
