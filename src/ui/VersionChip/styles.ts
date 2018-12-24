import styled from 'react-emotion';

import { font } from '../../ui/Typography';
import { colours } from '../../theme';
import { overrideTypes } from './types';
interface IProps {
  isIncluded: boolean;
  hasOverride: string;
}

const getStyleRules = (isIncluded, hasOverride) => {
  if (hasOverride && hasOverride === overrideTypes.IS_INCLUDED) {
    return {
      color: colours.green,
      borderColor: colours.green,
      backgroundColor: colours.greenLight
    };
  }

  if (hasOverride && hasOverride === overrideTypes.IS_EXCLUDED) {
    return {
      color: colours.red,
      borderColor: colours.red,
      backgroundColor: colours.redLight
    };
  }

  if (isIncluded) {
    return {
      color: colours.green,
      backgroundColor: colours.greenLight
    };
  }

  return {
    color: colours.red,
    backgroundColor: colours.redLight
  };
};

export const VersionChipWrapper = styled.span<IProps>(
  {
    label: 'version-chip-wrapper',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4px',
    borderRadius: '100%',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '14px',
    fontFamily: `${font.fontFamily}`,
    fontWeight: 'normal',
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: colours.transparent,
    backgroundColor: colours.greyUltraLight,
    ':active, :focus': {
      span: {
        display: 'block'
      }
    }
  },
  ({ isIncluded, hasOverride }) => ({
    ...getStyleRules(isIncluded, hasOverride),
    fontWeight: hasOverride ? 'bold' : 'normal'
  })
);

export const VersionText = styled.span({
  label: 'verstion-text',
  fontSize: '12px',
  lineHeight: '14px',
  fontFamily: `${font.fontFamily}`,
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  textTransform: 'capitalize',
  color: 'inherit'
});
