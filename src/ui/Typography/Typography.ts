import styled from 'react-emotion';
import { colours, scaffolding } from '../../theme';

export const fontFamily = {
  fontFamily: `Lato, sans-serif`
};

export const font = {
  color: `${colours.greyDark}`,
  display: 'block',
  ...fontFamily,
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '18px',
  textAlign: 'left',
  marginTop: 0,
  marginBottom: scaffolding.gutterLg,
  maxWidth: '100%'
};

interface IProps {
  fontColour?: string;
  fontAlign?: string | any;
  display?: string;
  bold?: boolean;

  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const P = styled.p<IProps>(
  {
    ...(font as any),
    label: 'p',
    color: colours.greyMid
  },
  ({ fontColour, fontAlign }) => ({
    color: fontColour,
    textAlign: fontAlign
  })
);

export const H1 = styled.h1<IProps>(
  {
    ...(font as any),
    label: 'h1',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '44px'
  },
  ({ fontColour, display, fontAlign }) => ({
    color: fontColour,
    display: display,
    textAlign: fontAlign
  })
);

export const H2 = styled.h2<IProps>(
  {
    ...(font as any),
    label: 'h2',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '36px'
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const H3 = styled.h3<IProps>(
  {
    ...(font as any),
    label: 'h3',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '32px'
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const H4 = styled.h4<IProps>(
  {
    ...(font as any),
    label: 'h4',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px'
  },
  ({ fontColour, display, fontAlign }) => ({
    color: fontColour,
    display: display,
    textAlign: fontAlign
  })
);

export const H5 = styled.h5<IProps>(
  {
    ...(font as any),
    label: 'h5',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: 0
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const H6 = styled.h6<IProps>(
  {
    ...(font as any),
    label: 'h6',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    marginBottom: 0
  },
  ({ fontColour, display, bold, marginLeft }) => ({
    color: fontColour,
    display: display,
    fontWeight: bold ? 700 : 400,
    marginLeft: marginLeft
  })
);

export const BrowserfulLogoText = styled.div<IProps>(
  {
    ...(font as any),
    label: 'browserful-logo-text',
    display: 'inline-flex',
    fontSize: '18px',
    lineHeight: '22px',
    marginBottom: 0
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);
