import * as React from 'react';

import { colours } from '../../theme';
import { SwitchLabel, SwitchInput, SwitchSlider, SwitchText } from './styles';

interface IProps {
  id: string;
  name?: string;
  type?: string;
  defaultChecked?: boolean;
  selectColour?: string;
  children?: React.ReactChild;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSwitch: React.SFC<IProps> = ({
  id,
  name,
  type,
  defaultChecked,
  selectColour,
  onChange,
  children
}: IProps) => {
  return (
    <SwitchLabel htmlFor={id}>
      <SwitchInput
        id={id}
        name={name}
        type={type}
        defaultChecked={defaultChecked}
        selectColour={selectColour}
        onChange={event => onChange(event)}
      />
      <SwitchSlider />
      <SwitchText>{children}</SwitchText>
    </SwitchLabel>
  );
};

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  type: 'checkbox',
  selectColour: colours.pink,
  onChange: () => {}
};
