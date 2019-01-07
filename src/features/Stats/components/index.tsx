import * as React from 'react';

import { TitleBar } from '../../../ui/TitleBar';
import { scaffolding } from '../../../theme';

export class Stats extends React.Component<null, null> {
  render() {
    return (
      <React.Fragment>
        <TitleBar icon="data" title="Data" />
        <div
          style={{
            marginTop: scaffolding.gutterLg
          }}
        />
      </React.Fragment>
    );
  }
}
