import * as React from 'react';

import { colours } from '../../theme';
import { SwitchLabel, SwitchInput, SwitchSlider } from './styles';

interface IProps {
  id: string;
  defaultChecked?: boolean;
  selectColour?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSwitch: React.SFC<IProps> = ({
  id,
  defaultChecked,
  selectColour,
  onChange
}: IProps) => {
  return (
    <SwitchLabel>
      <SwitchInput
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        selectColour={selectColour}
        onChange={event => onChange(event)}
      />
      <SwitchSlider />
    </SwitchLabel>
  );
};

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  selectColour: colours.pink,
  onChange: () => {}
};
