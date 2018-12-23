import * as React from 'react';
import { createPortal } from 'react-dom';

import {
  ModalWrapper,
  ModalTrigger,
  ModalContent,
  ModalClose,
  ModalLightbox,
  CloseText
} from './styles';

interface IProps {
  renderTrigger(): React.ReactNode;
  renderContent(): React.ReactNode;
}
interface IState {
  isModalOpen: boolean;
}

enum controlTypes {
  LIGHTBOX = 'lightbox',
  CLOSE = 'close'
}

export class Modal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  showModal() {
    document.body.style.overflow = 'hidden';

    this.setState({
      isModalOpen: true
    });
  }

  hideModal(
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.stopPropagation();
    document.body.style.overflow = 'auto';

    if (
      event.currentTarget.id === controlTypes.LIGHTBOX ||
      event.currentTarget.id === controlTypes.CLOSE
    ) {
      this.setState({
        isModalOpen: false
      });
    }
  }

  render() {
    const { renderTrigger, renderContent } = this.props;
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <ModalTrigger onClick={() => this.showModal()}>
          {renderTrigger()}
        </ModalTrigger>
        {isModalOpen &&
          createPortal(
            <ModalWrapper>
              <ModalLightbox
                id={controlTypes.LIGHTBOX}
                onClick={event => this.hideModal(event)}
              />
              <ModalContent>
                {renderContent()}
                <ModalClose
                  id={controlTypes.CLOSE}
                  onClick={event => this.hideModal(event)}
                >
                  <CloseText>X</CloseText>
                </ModalClose>
              </ModalContent>
            </ModalWrapper>,
            document.body
          )}
      </React.Fragment>
    );
  }
}
