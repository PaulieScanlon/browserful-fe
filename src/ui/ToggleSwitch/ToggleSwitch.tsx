import * as React from 'react';

import { colours } from '../../theme';
import { SwitchLabel, SwitchInput, SwitchSlider, SwitchText } from './styles';

interface IProps {
  id: string;
  name?: string;
  type?: string;
  defaultChecked?: boolean;
  selectColour?: string;
  flexDirection?: string;
  children?: React.ReactChild;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSwitch: React.SFC<IProps> = ({
  id,
  name,
  type,
  defaultChecked,
  selectColour,
  flexDirection,
  onChange,
  children
}: IProps) => {
  return (
    <SwitchLabel htmlFor={id} flexDirection={flexDirection}>
      <SwitchInput
        id={id}
        name={name}
        type={type}
        defaultChecked={defaultChecked}
        selectColour={selectColour}
        onChange={event => onChange(event)}
      />
      <SwitchSlider className="switch-slider" />
      <SwitchText className="switch-text">{children}</SwitchText>
    </SwitchLabel>
  );
};

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  type: 'checkbox',
  selectColour: colours.pink,
  flexDirection: 'row',
  onChange: () => {}
};
