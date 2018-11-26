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
  const { version_list } = data;

  const versions = version_list.map((obj, i) => {
    return (
      <VersionChip
        key={i}
        browser={obj.browser}
        version={parseInt(obj.version) || 0}
        isIncluded={obj.isIncluded}
        defaultChecked={obj.always}
        onChange={event => onClick(event, obj.browser, obj.version)}
      />
    );
  });

  return <GridContent>{versions}</GridContent>;
};

VersionGrid.defaultProps = {
  onClick: () => {}
};
