import * as React from 'react';

import {
  StatList,
  StatBullet,
  StyledStatTitle,
  StyledStatSummary,
  StyledStatNumber
} from './styles';

interface IProps {
  children: React.ReactChild | React.ReactNode;
}

interface EProps {
  children: React.ReactChild | React.ReactNode;
}

enum variantTypes {
  ICON = 'Icon',
  STAT_TITLE = 'StatTitle',
  STAT_SUMMARY = 'StatSummary',
  STAT_NUMBER = 'StatNumber'
}

const initialValues = {
  [variantTypes.ICON]: [],
  [variantTypes.STAT_TITLE]: [],
  [variantTypes.STAT_SUMMARY]: [],
  [variantTypes.STAT_NUMBER]: []
};

export const StatTile: React.SFC<IProps> = ({ children }: IProps) => {
  const fosterChildren = React.Children.map(
    children,
    (child: React.ReactElement<any>) => child
  ).reduce(
    (children, child) => {
      let thing = typeof child.type === 'function' ? child.type.name : null;

      if (
        thing === variantTypes.ICON ||
        thing === variantTypes.STAT_TITLE ||
        thing === variantTypes.STAT_SUMMARY ||
        thing === variantTypes.STAT_NUMBER
      ) {
        children[thing].push(child);
      }

      return children;
    },
    { ...initialValues }
  );

  return (
    <StatList>
      <span style={{ display: 'flex' }}>{fosterChildren.Icon}</span>
      <StatBullet />
      <span style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {fosterChildren.StatTitle}
        {fosterChildren.StatSummary}
      </span>
      <span style={{ display: 'flex' }}>{fosterChildren.StatNumber}</span>
    </StatList>
  );
};

export const StatTitle: React.SFC<EProps> = ({ children }: EProps) => {
  return <StyledStatTitle>{children}</StyledStatTitle>;
};

export const StatSummary: React.SFC<EProps> = ({ children }: EProps) => {
  return <StyledStatSummary>{children}</StyledStatSummary>;
};

export const StatNumber: React.SFC<EProps> = ({ children }: EProps) => {
  return <StyledStatNumber>{children}</StyledStatNumber>;
};
