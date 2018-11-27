import * as React from 'react';

import { GridContent } from './styles';

import { VersionChip } from '../VersionChip';

interface IProps {
  data: any;
  maxHeight?: string;
  defaultChecked?: boolean;
  onClick?: (
    event: React.ChangeEventHandler<HTMLInputElement>,
    browser: string,
    version: number
  ) => void;
}

export const VersionGrid: React.SFC<IProps> = ({ data, onClick }: IProps) => {
  const { name, versions } = data;

  const versionChips = versions.map((obj, i) => {
    return (
      <VersionChip
        key={i}
        browser={`${name}-${obj.id}`}
        version={parseInt(obj.id)}
        isIncluded={obj.isIncluded}
        defaultChecked={obj.defaultChecked}
        onChange={event => onClick(event, name, parseInt(obj.id))}
      />
    );
  });

  return <GridContent>{versionChips}</GridContent>;
};

VersionGrid.defaultProps = {
  onClick: () => {}
};
