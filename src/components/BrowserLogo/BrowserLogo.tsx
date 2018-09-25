import * as React from 'react';
const changeCase = require('change-case');
import { BrowserLogoImage } from './styles';

interface IProps {
  browser: string;
}

export const BrowserLogo: React.SFC<IProps> = ({ browser }: IProps) => {
  return (
    <BrowserLogoImage
      alt={`${changeCase.paramCase(browser)}`}
      src={require(`./images/${changeCase.paramCase(browser)}.png`)}
    />
  );
};
