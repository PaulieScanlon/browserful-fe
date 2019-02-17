import * as React from 'react';

import {
  TileWrapper,
  TileStart,
  TileContent,
  TileValue,
  TileBullet
} from './styles';

interface IProps {
  renderStart?(): React.ReactNode;
  renderContent(): React.ReactNode;
  renderEnd?(): React.ReactNode;
  bulletColour?: string;
  tilePadding?: string;
}

export const Versatile: React.SFC<IProps> = ({
  renderStart,
  renderContent,
  renderEnd,
  bulletColour,
  tilePadding
}: IProps) => {
  return (
    <TileWrapper className="tile-wrapper" tilePadding={tilePadding}>
      {renderStart && <TileStart>{renderStart()}</TileStart>}

      <TileBullet
        tilePadding={tilePadding}
        className="tile-bullet"
        bulletColour={bulletColour}
      />

      <TileContent>{renderContent()}</TileContent>

      {renderEnd && <TileValue>{renderEnd()}</TileValue>}
    </TileWrapper>
  );
};
