import * as React from 'react';

import { colours, scaffolding } from '../../theme';
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
  theme?: 'light' | 'dark';
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
  renderContent,
  theme
}: IProps) => {
  return (
    <SwitchLabel htmlFor={id} className="switch-label">
      <SwitchInput
        id={id}
        name={name}
        type={type}
        defaultChecked={defaultChecked}
        selectColour={selectColour}
        onChange={event => onChange(event)}
        config={
          renderContent ? renderContent.config : { checked: {}, unchecked: {} }
        }
      />
      <SwitchControls
        className="switch-controls"
        justifyContent={justifyContent}
        flexDirection={flexDirection}
      >
        <SwitchSlider className="switch-slider" theme={theme} />
        <span style={{ width: scaffolding.gutterMd }} />
        <SwitchText className="switch-text">{children}</SwitchText>
      </SwitchControls>
      {renderContent && (
        <SwitchContent className="switch-content">
          {renderContent.component}
        </SwitchContent>
      )}
    </SwitchLabel>
  );
};

ToggleSwitch.defaultProps = {
  defaultChecked: false,
  theme: 'light',
  type: 'checkbox',
  selectColour: colours.pink,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  onChange: () => {}
};
