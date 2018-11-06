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
  variant?: string;
}

export const Accordion: React.SFC<IProps> = ({
  maxHeight,
  items,
  variant
}: IProps) => {
  let type = {};
  if (variant === 'radio') {
    type = {
      type: 'radio',
      name: 'accordion-group'
    };
  } else {
    type = {
      type: 'checkbox'
    };
  }

  const itemMarkup = items.map((item, i) => {
    return (
      <div key={`item-${i}`}>
        <Input
          {...type}
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
  variant: 'radio'
};
