import * as React from 'react';

import {
  AccordionWrapper,
  AccordionLabel,
  AccordionInput,
  AccordionContent,
  AccordionContentInner
} from './styles';

import { colours } from '../../theme';

interface IProps {
  maxHeight?: string;
  type?: string;
  name?: string;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}

interface EProps extends IProps {
  id: string;
  label?: string;
  defaultChecked?: boolean;
  selectColour?: string;
  renderLabel?(): React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Accordion: React.SFC<IProps> = ({
  maxHeight,
  type,
  name,
  theme,
  children
}: IProps) => {
  const _children = React.Children.map(children, child => {
    return React.cloneElement(child as any, {
      maxHeight: maxHeight,
      type: type,
      name: name,
      theme: theme
    });
  });
  return <AccordionWrapper theme={theme}>{_children}</AccordionWrapper>;
};

export const AccordionItem: React.SFC<EProps> = ({
  id,
  label,
  renderLabel,
  defaultChecked,
  selectColour,
  maxHeight,
  type,
  name,
  theme,
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
        theme={theme}
        onChange={event => onChange(event)}
      />
      <AccordionLabel theme={theme} className="accordion-label" htmlFor={id}>
        {label}
        {renderLabel()}
      </AccordionLabel>

      <AccordionContent>
        <AccordionContentInner theme={theme}>{children}</AccordionContentInner>
      </AccordionContent>
    </React.Fragment>
  );
};

Accordion.defaultProps = {
  theme: 'light'
};

AccordionItem.defaultProps = {
  maxHeight: '100px',
  defaultChecked: false,
  selectColour: colours.pink,
  theme: 'light',
  renderLabel: () => null,
  onChange: () => {}
};
