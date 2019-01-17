import styled from 'react-emotion';
import { font } from '../Typography';
import { scaffolding, colours } from '../../theme';

interface IProps {
  bulletColour?: string;
  tilePadding?: string;
}

const commonStyles = {
  fontFamily: font.fontFamily,
  color: font.color
};

export const TileWrapper = styled.div<IProps>(
  {
    label: 'versa-tile',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    zIndex: 1,
    ...commonStyles
  },
  ({ tilePadding }) => ({
    paddingTop: tilePadding ? tilePadding : '0px'
  })
);

export const TileStart = styled.span({
  label: 'tile-start',
  display: 'flex',
  marginRight: scaffolding.gutterLg,
  ...commonStyles
});

export const TileContent = styled.span({
  label: 'tile-content',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  ...commonStyles
});

export const TileValue = styled.div({
  label: 'tile-value',
  display: 'flex',
  ...commonStyles
});

export const TileBullet = styled.div<IProps>(
  {
    label: 'tile-bullet',
    display: 'inline-flex',
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    marginRight: scaffolding.gutterLg,
    backgroundColor: colours.greyUltraLight,
    ':before': {
      content: `""`
    }
  },
  ({ bulletColour }) => ({
    backgroundColor: bulletColour ? bulletColour : colours.pink
  })
);

export const TileLine = styled.div({
  label: 'tile-line',
  ':after': {
    position: 'absolute',
    top: '0px',
    left: '4px',
    content: `""`,
    width: '1px',
    height: '100%',
    backgroundColor: colours.greyUltraLight
  }
});
