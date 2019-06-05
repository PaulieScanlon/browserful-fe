import * as React from 'react';

import {
  AccordionWrapper,
  AccordionHeader,
  AccordionHeaderLabel,
  AccordionContent
} from './styles';

import { ToggleSwitch } from '../ToggleSwitch';
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
      <ToggleSwitch
        id={id}
        type={type}
        name={name}
        theme={theme}
        flexDirection="row-reverse"
        justifyContent="space-between"
        defaultChecked={defaultChecked}
        selectColour={selectColour}
        onChange={event => onChange(event)}
        renderContent={{
          config: {
            checked: {
              transition: '.3s ease-out',
              maxHeight: maxHeight,
              overflow: 'hidden'
            },
            unchecked: {
              transition: '.3s ease-out',
              maxHeight: '1px',
              overflow: 'hidden'
            }
          },
          component: (
            <AccordionContent theme={theme}>{children}</AccordionContent>
          )
        }}
      >
        <AccordionHeader theme={theme} className="accordion-label">
          {label && <AccordionHeaderLabel>{label}</AccordionHeaderLabel>}
          {renderLabel()}
        </AccordionHeader>
      </ToggleSwitch>
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
