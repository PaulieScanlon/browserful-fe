import * as React from 'react';

import {
  AccordionWrapper,
  AccordionLabel,
  AccordionInput,
  AccordionContent,
  AccordionContentInner
} from './styles';

interface IProps {
  maxHeight?: string;
  type?: string;
  name?: string;
  children: React.ReactNode;
}

interface EProps extends IProps {
  label: string;
  defaultChecked?: boolean;
}

export const Accordion: React.SFC<IProps> = ({
  type,
  name,
  children
}: IProps) => {
  const _children = React.Children.map(children, child => {
    return React.cloneElement(child as any, {
      type: type,
      name: name
    });
  });
  return <AccordionWrapper>{_children}</AccordionWrapper>;
};

export const AccordionItem: React.SFC<EProps> = ({
  label,
  defaultChecked,
  maxHeight,
  type,
  name,
  children
}: EProps) => {
  return (
    <React.Fragment>
      <AccordionInput
        id={label}
        type={type}
        name={name}
        defaultChecked={defaultChecked}
        maxHeight={maxHeight ? maxHeight : '100px'}
      />
      <AccordionLabel htmlFor={label}>{label}</AccordionLabel>

      <AccordionContent>
        <AccordionContentInner>{children}</AccordionContentInner>
      </AccordionContent>
    </React.Fragment>
  );
};

// Accordion.defaultProps = {
//   maxHeight: '100px'
//   // defaultChecked: false
// };
