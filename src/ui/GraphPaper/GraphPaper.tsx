import * as React from 'react';

import { GraphPaperWrapper, HozLines, VertLines, ContentDiv } from './styles';

interface IProps {
  opacity?: number;
  renderContent?(): React.ReactNode | React.ReactChild;
}

export const GraphPaper: React.SFC<IProps> = ({
  opacity,
  renderContent
}: IProps) => {
  return (
    <React.Fragment>
      <GraphPaperWrapper opacity={opacity}>
        <HozLines />
        <VertLines />
      </GraphPaperWrapper>
      {renderContent && <ContentDiv>{renderContent()}</ContentDiv>}
    </React.Fragment>
  );
};

GraphPaper.defaultProps = {
  opacity: 1
};
