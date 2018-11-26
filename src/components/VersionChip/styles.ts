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
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center'
});

export const VersionText = styled.span({
  fontSize: '12px',
  position: 'absolute',
  fontFamily: `${font.fontFamily}`,
  color: colours.greyDark
});

export const VersionInput = styled.input<IProps>(
  {
    label: 'verion-input',
    position: 'absolute',
    display: 'none'
  },
  ({ isIncluded }: IProps) => ({
    ':checked + span': {
      ...getStyleRules(isIncluded, true)
    },
    '+ span': {
      ...getStyleRules(isIncluded, false)
    }
  })
);

export const VersionStyle = styled.span({
  label: 'version-style',
  width: '40px',
  height: '40px',
  borderRadius: '20px',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  outline: 'none'
});
