import * as React from 'react';

import { BrowserLogoImage } from './styles';

interface IProps {
  browser: string;
}

export const BrowserLogo: React.SFC<IProps> = ({ browser }: IProps) => {
  return (
    <BrowserLogoImage src={require(`./images/${browser.toLowerCase()}.png`)} />
  );
};
