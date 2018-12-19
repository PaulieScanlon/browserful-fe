import styled from 'react-emotion';

import { font } from '../../typography';
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

export const VersionButton = styled.button<IProps>(
  {
    label: 'version-button',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    outline: 'none',
    fontSize: '12px',
    lineHeight: '14px',
    fontFamily: `${font.fontFamily}`,
    fontWeight: 'normal',
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: colours.transparent,
    backgroundColor: colours.greyUltraLight,
    WebkitTapHighlightColor: colours.transparent,
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
  fontSize: '12px',
  lineHeight: '14px',
  fontFamily: `${font.fontFamily}`,
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  textTransform: 'capitalize',
  color: 'inherit'
});

export const PopoverWrapper = styled.span({
  label: 'popover-wrapper',
  position: 'absolute',
  display: 'none',
  top: '-130px',
  zIndex: 2
});
