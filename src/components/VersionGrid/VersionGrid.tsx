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
        // @TODO, this string replace should probs happen in the util function
        version={obj.id.replace('-', '\n')}
        isIncluded={obj.isIncluded}
        defaultChecked={obj.defaultChecked}
        onChange={event => onClick(event, name, obj.id)}
      />
    );
  });

  return <GridContent>{versionChips}</GridContent>;
};

VersionGrid.defaultProps = {
  onClick: () => {}
};
