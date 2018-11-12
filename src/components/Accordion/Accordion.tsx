import * as React from 'react';

import {
  AccordionWrapper,
  Label,
  Input,
  ContentWrapper,
  Content
} from './styles';

interface IProps {
  maxHeight?: string;
  items: any;
  name?: string;
  defaultChecked?: string | number;
}

export const Accordion: React.SFC<IProps> = ({
  maxHeight,
  items,
  name,
  defaultChecked
}: IProps) => {
  const itemMarkup = items.map((item, i) => {
    return (
      <div key={`item-${i}`}>
        <Input
          type="radio"
          name={name}
          defaultChecked={i === defaultChecked}
          id={`panel-${item.title}-${i}`}
          maxHeight={maxHeight}
        />
        <Label htmlFor={`panel-${item.title}-${i}`}>{item.title}</Label>
        <ContentWrapper>
          <Content>{item.component()}</Content>
        </ContentWrapper>
      </div>
    );
  });

  return <AccordionWrapper>{itemMarkup}</AccordionWrapper>;
};

Accordion.defaultProps = {
  maxHeight: '100px',
  defaultChecked: ''
};
