import * as React from 'react';
import styled from 'react-emotion';
import isPropValid from '@emotion/is-prop-valid';

export const Button = styled.button`
  color: hotpink;
`;

// export const Button = styled('button', {
//   shouldForwardProp: prop => isPropValid(prop) && prop !== 'color'
// })(props => ({
//   color: 'hotpink'
// }));

export const IconButton = () => {
  return <Button as="href">button</Button>;
};

// const FooterButton = styled(({ nativeAs, ...rest }) => <Button as={nativeAs} {...rest} />)`
//   margin-top: 30px
// `

// export const IconButton = () => {
//   return <FooterButton nativeAs="a" href="/link/styled/as/Button"/>;
// };
