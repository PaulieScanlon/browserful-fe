import * as React from 'react';
import { BrowserImage } from './styles';

interface IProps {
  logo: string;
}

export const BrowserLogo: React.SFC<IProps> = ({ logo }: IProps) => {
  return <BrowserImage alt={logo} src={require(`./images/${logo}.png`)} />;
};
