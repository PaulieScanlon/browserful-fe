import { css } from 'react-emotion';

// This had to be styled as a css property or next-routes got confused
export const RouteTagLink = css`
  text-decoration: none;
  display: inline-block;
  &:active {
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;
