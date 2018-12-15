import styled from 'react-emotion';

import { font } from '../../typography';
import { colours } from '../../theme';

interface IProps {
  isIncluded: boolean;
}

const getStyleRules = isIncluded => {
  if (isIncluded) {
    return {
      backgroundColor: colours.greenLight
    };
  }

  return {
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
    textAlign: 'center',
    ':focus': {
      span: {
        display: 'block'
      }
    }
  },
  ({ isIncluded }) => ({
    ...getStyleRules(isIncluded)
  })
);

export const VersionText = styled.span<IProps>(
  {
    fontSize: '12px',
    lineHeight: '14px',
    fontFamily: `${font.fontFamily}`,
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    textTransform: 'capitalize'
  },
  ({ isIncluded }) => ({
    fontWeight: isIncluded ? 'bold' : 'normal',
    color: isIncluded ? colours.green : colours.red
  })
);

export const PopoverWrapper = styled.span({
  label: 'popover-wrapper',
  position: 'absolute',
  display: 'none',
  top: '-130px'
});
