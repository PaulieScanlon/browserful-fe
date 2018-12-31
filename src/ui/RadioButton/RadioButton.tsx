import * as React from 'react';

import { RadioLabel, RadioInput, RadioStyle, RadioText } from './styles';
import { colours } from '../../theme';

interface IProps {
  id: string;
  name?: string;
  defaultChecked?: boolean;
  selectColour?: string;
  flexDirection?: string;
  children?: React.ReactChild;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.SFC<IProps> = ({
  id,
  name,
  defaultChecked,
  selectColour,
  flexDirection,
  onChange,
  children
}: IProps) => {
  return (
    <RadioLabel htmlFor={id} flexDirection={flexDirection}>
      <RadioInput
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        type="radio"
        selectColour={selectColour}
        onChange={event => onChange(event)}
      />
      <RadioStyle className="radio-style" />
      <RadioText className="radio-text">{children}</RadioText>
    </RadioLabel>
  );
};

RadioButton.defaultProps = {
  selectColour: colours.pink,
  flexDirection: 'row',
  defaultChecked: false,
  onChange: () => {}
};
