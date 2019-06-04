import * as React from 'react';

import { colours } from '../../theme';
import {
  SwitchLabel,
  SwitchInput,
  SwitchSlider,
  SwitchControls,
  SwitchText,
  SwitchContent
} from './styles';

interface IProps {
  id: string;
  name?: string;
  type?: string;
  defaultChecked?: boolean;
  selectColour?: string;
  flexDirection?: string;
  justifyContent?: string;
  children?: React.ReactChild;
  renderContent?: {
    config: {
      checked: Object;
      unchecked: Object;
    };
    component: React.ReactNode;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSwitch: React.SFC<IProps> = ({
  id,
  name,
  type,
  defaultChecked,
  selectColour,
  flexDirection,
  justifyContent,
  onChange,
  children,
  renderContent
}: IProps) => {
  console.log('renderContent: ', renderContent);
  // @TODO get at the config object pass along with renderContent
  return (
    <SwitchLabel htmlFor={id} flexDirection={flexDirection}>
      <SwitchInput
        id={id}
        name={name}
        type={type}
        defaultChecked={defaultChecked}
        selectColour={selectColour}
        onChange={event => onChange(event)}
        config={renderContent.config}
      />
      <SwitchControls
        className="switch-controls"
        justifyContent={justifyContent}
      >
        <SwitchSlider className="switch-slider" />
        <SwitchText className="switch-text">{children}</SwitchText>
      </SwitchControls>
      <SwitchContent className="switch-content">
        {renderContent ? renderContent.component : null}
      </SwitchContent>
    </SwitchLabel>
  );
};

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  type: 'checkbox',
  selectColour: colours.pink,
  flexDirection: 'column',
  onChange: () => {}
};
