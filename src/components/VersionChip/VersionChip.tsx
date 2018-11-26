import * as React from 'react';

import {
  VersionLabel,
  VersionText,
  VersionInput,
  VersionStyle
} from './styles';

interface IProps {
  browser: string;
  version: number;
  onChange: (
    event: React.ChangeEventHandler<HTMLInputElement>,
    browser: string,
    version: number
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
      <VersionStyle />
      <VersionText>{version}</VersionText>
    </VersionLabel>
  );
};

VersionChip.defaultProps = {
  isIncluded: false,
  defaultChecked: false
};
