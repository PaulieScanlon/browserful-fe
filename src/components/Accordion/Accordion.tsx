import * as React from 'react';

import {
  AccordionWrapper,
  AccordionLabel,
  AccordionText,
  AccordionInput,
  AccordionContent,
  AccordionContentInner
} from './styles';

import { BrowserLogo } from '../BrowserLogo';

import { colours } from '../../theme';

interface IProps {
  maxHeight?: string;
  type?: string;
  name?: string;
  backgroundColour?: string;
  children: React.ReactNode;
}

interface EProps extends IProps {
  label: string;
  browser?: string;
  defaultChecked?: boolean;
  selectColour?: string;
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
  browser,
  defaultChecked,
  selectColour,
  backgroundColour,
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
        maxHeight={maxHeight}
        selectColour={selectColour}
      />
      <AccordionLabel htmlFor={label}>
        {browser && <BrowserLogo browser={browser} />}
        <AccordionText>{label}</AccordionText>
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
  backgroundColour: colours.offWhite
};
