import * as React from 'react';

import {
  AccordionWrapper,
  AccordionLabel,
  AccordionInput,
  AccordionContent,
  AccordionContentInner
} from './styles';

import { DetailsLabel } from '../DetailsLabel';

import { colours } from '../../theme';

interface IProps {
  maxHeight?: string;
  type?: string;
  name?: string;
  backgroundColour?: string;
  children: React.ReactNode;
}

interface EProps extends IProps {
  label?: string;
  id: string;
  logo?: string;
  // value?: string | number;
  value?: {
    amount: string | number;
    suffix?: string;
  };
  showBar?: boolean;
  defaultChecked?: boolean;
  selectColour?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Accordion: React.SFC<IProps> = ({
  maxHeight,
  backgroundColour,
  type,
  name,
  children
}: IProps) => {
  const _children = React.Children.map(children, child => {
    return React.cloneElement(child as any, {
      maxHeight: maxHeight,
      backgroundColour: backgroundColour,
      type: type,
      name: name
    });
  });
  return <AccordionWrapper>{_children}</AccordionWrapper>;
};

export const AccordionItem: React.SFC<EProps> = ({
  label,
  id,
  logo,
  value,
  showBar,
  defaultChecked,
  selectColour,
  backgroundColour,
  maxHeight,
  type,
  name,
  onChange,
  children
}: EProps) => {
  return (
    <React.Fragment>
      <AccordionInput
        id={id}
        type={type}
        name={name}
        defaultChecked={defaultChecked}
        maxHeight={maxHeight}
        selectColour={selectColour}
        onChange={event => onChange(event)}
      />
      <AccordionLabel htmlFor={id}>
        <DetailsLabel
          label={label ? label : id}
          logo={logo}
          value={value}
          showBar={showBar}
        />
      </AccordionLabel>

      <AccordionContent backgroundColour={backgroundColour}>
        <AccordionContentInner>{children}</AccordionContentInner>
      </AccordionContent>
    </React.Fragment>
  );
};

AccordionItem.defaultProps = {
  maxHeight: '100px',
  defaultChecked: false,
  selectColour: colours.pink,
  backgroundColour: colours.offWhite,
  onChange: () => {}
};
