import styled from 'react-emotion';

import { font } from '../../typography';
import { colours } from '../../theme';

interface IProps {
  isIncluded: boolean;
}

const getStyleRules = (isIncluded, checked) => {
  if (isIncluded) {
    return {
      borderColor: checked ? colours.green : colours.transparent,
      backgroundColor: colours.greenLight
    };
  } else {
    return {
      borderColor: checked ? colours.red : colours.transparent,
      backgroundColor: colours.redLight
    };
  }
};

export const VersionLabel = styled.label({
  label: 'version-label',
  position: 'relative',
  display: 'inline-flex',
  alignSelf: 'center',
  cursor: 'pointer'
});

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

export const VersionInput = styled.input<IProps>(
  {
    label: 'verion-input',
    display: 'none'
  },
  ({ isIncluded }: IProps) => ({
    ':checked + div': {
      ...getStyleRules(isIncluded, true)
    },
    '+ div': {
      ...getStyleRules(isIncluded, false)
    }
  })
);

export const VersionStyle = styled.div({
  label: 'version-style',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '100%',
  width: '40px',
  height: '40px',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  outline: 'none'
});
