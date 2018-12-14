import * as React from 'react';

import {
  VersionLabel,
  VersionText,
  VersionInput,
  VersionStyle
} from './styles';

interface IProps {
  browser: string;
  version: any;
  onChange: (
    event: React.ChangeEventHandler<HTMLInputElement>,
    browser: string,
    version: number | string
  ) => void;
  isIncluded?: boolean;
  defaultChecked?: boolean;
}

export const VersionChip: React.SFC<IProps> = ({
  version,
  browser,
  onChange,
  isIncluded,
  defaultChecked
}: IProps) => {
  return (
    <VersionLabel htmlFor={browser}>
      <VersionInput
        defaultChecked={defaultChecked}
        type="checkbox"
        id={browser}
        onChange={event => onChange(event as any, browser, version)}
        isIncluded={isIncluded}
      />
      <VersionStyle>
        <VersionText isIncluded={isIncluded}>{version || 0}</VersionText>
      </VersionStyle>
    </VersionLabel>
  );
};

VersionChip.defaultProps = {
  isIncluded: false,
  defaultChecked: false
};
