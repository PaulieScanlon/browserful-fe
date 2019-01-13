import styled, { css } from 'react-emotion';
import { colours, scaffolding } from '../../theme';
import { font } from '../../ui/Typography';

export const EditWrapper = styled.div({
  label: 'edit-wrapper',
  height: '28px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const EditField = css`
  display: inline-flex;
  min-width: 60px;
  max-width: 240px;
  overflow: hidden;
  margin-right: ${scaffolding.gutterSm};
  font-family: ${font.fontFamily};
  font-size: ${font.fontSize};
  line-height: ${font.lineHeight};
  color: ${colours.greyMid};
  background-color: ${colours.white};
  outline: none;
  border-style: solid;
  border-width: 2px;
  border-color: ${colours.transparent};
  :focus {
    border-bottom-color: ${colours.greyUltraLight};
  }
`;
