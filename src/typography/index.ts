import styled from 'react-emotion';
import { colours } from '../theme';

export const font = {
  color: `${colours.greyDark}`,
  display: 'block',
  fontFamily: `Lato, sans-serif`,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '16px',
  textAlign: 'left',
  marginTop: 0,
  marginBottom: 20,
  maxWidth: '100%'
};

interface IProps {
  /**
   * css color prop
   *
   * @default colours.greyDark
   **/
  fontColour?: string;
  /**
   * css display prop
   *
   * @default "block"
   **/
  display?: string;
}

export const P = styled.p<IProps>(
  {
    ...(font as any),
    label: 'p'
  },
  ({ fontColour }) => ({
    color: fontColour
  })
);

export const H1 = styled.h1<IProps>(
  {
    ...(font as any),
    label: 'h1',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '32px'
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const H2 = styled.h2<IProps>(
  {
    ...(font as any),
    label: 'h2',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '28px'
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
    fontSize: '24px',
    lineHeight: '24px'
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
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '20px'
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);

export const H5 = styled.h5<IProps>(
  {
    ...(font as any),
    label: 'h5',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '18px',
    marginBottom: 0
  },
  ({ fontColour, display }) => ({
    color: fontColour,
    display: display
  })
);
