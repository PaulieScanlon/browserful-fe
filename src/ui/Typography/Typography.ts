import styled from 'react-emotion';
import { colours, scaffolding, mq, transitionBuilder } from '../../theme';

export const fontFamily = {
  fontFamily: `Lato, sans-serif`
};

export const font = {
  color: `${colours.greyMid}`,
  display: 'block',
  ...fontFamily,
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
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
    color: colours.greyDark,
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '34px',
    [mq[0]]: {
      fontSize: '40px',
      lineHeight: '44px'
    }
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
    color: colours.greyDark,
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
    color: colours.greyDark,
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
    color: colours.greyDark,
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '26px'
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
    color: colours.greyDark,
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
    color: colours.greyDark,
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

export const LabelTextRegular = styled.span<IProps>(
  {
    label: 'label-text-regular',
    ...(font as any),
    display: 'inline-block',
    marginBottom: '0px',
    transition: transitionBuilder('opacity')
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);

export const LabelTextItalic = styled.span<IProps>(
  {
    label: 'label-text-bold',
    ...(font as any),
    display: 'inline-block',
    marginBottom: '0px',
    fontStyle: 'italic',
    transition: transitionBuilder('opacity')
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);

export const LabelTextBold = styled.span<IProps>(
  {
    label: 'label-text-bold',
    ...(font as any),
    display: 'inline-block',
    marginBottom: '0px',
    fontWeight: 'bold',
    transition: transitionBuilder('opacity')
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);
