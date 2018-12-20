import * as React from 'react';

import { Modal } from '../Modal';
import { OverrideSelect } from '../OverrideSelect/';

import { VersionButton, VersionText } from './styles';

interface IProps {
  friendlyName: string;
  queryName: string;
  version: number | string;
  logo: string;
  isIncluded?: boolean;
  hasOverride?: string;
}

interface IState {
  isModalOpen: boolean;
}

export class VersionChip extends React.Component<IProps, IState> {
  static defauptProps = {
    isIncluded: false
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  showModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    this.setState({
      isModalOpen: true
    });
  }

  lightboxClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    if (event.currentTarget.id === 'modal') {
      this.setState({
        isModalOpen: false
      });
      console.log('was the modal');
    }
  }

  hideModal(event: React.MouseEvent<HTMLDivElement>) {}

  render() {
    const {
      friendlyName,
      queryName,
      version,
      logo,
      isIncluded,
      hasOverride
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <React.Fragment>
        {isModalOpen && (
          <Modal onClick={event => this.lightboxClick(event)}>
            <OverrideSelect
              friendlyName={friendlyName}
              queryName={queryName}
              version={version}
              logo={logo}
              name={queryName}
            />
          </Modal>
        )}

        <VersionButton
          isIncluded={isIncluded}
          hasOverride={hasOverride}
          onClick={event => this.showModal(event)}
        >
          <VersionText>{version || 0}</VersionText>
        </VersionButton>
      </React.Fragment>
    );
  }
}

// import * as React from 'react';

// import { VersionButton, VersionText } from './styles';

// interface IProps {
//   browser: string;
//   version: number | string;
//   isIncluded?: boolean;
//   hasOverride?: string;
// }

// export const VersionChip: React.SFC<IProps> = ({
//   browser,
//   version,
//   isIncluded,
//   hasOverride
// }) => {
//   return (
//     <VersionButton isIncluded={isIncluded} hasOverride={hasOverride}>
//       <VersionText>{version || 0}</VersionText>
//     </VersionButton>
//   );
// };

// VersionChip.defaultProps = {
//   isIncluded: false
// };
