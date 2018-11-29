import * as React from 'react';
import { BrowserLogoImage } from './styles';

interface IProps {
  browser: string;
}

export const BrowserLogo: React.SFC<IProps> = ({ browser }: IProps) => {
  return (
    <BrowserLogoImage alt={browser} src={require(`./images/${browser}.png`)} />
  );
};
