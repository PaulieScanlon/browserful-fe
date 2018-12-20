import * as React from 'react';
import { createPortal } from 'react-dom';

import { ModalWrapper, ModalLightbox } from './styles';

interface IProps {
  children: React.ReactChild;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export class Modal extends React.Component<IProps, {}> {
  componentDidMount() {
    document.body.style.overflowY = 'hidden';
  }

  componentWillUnmount() {
    console.log('Modal: componentWillUnmount');
    document.body.style.overflowY = 'auto';
  }

  render() {
    const { onClick, children } = this.props;

    return createPortal(
      <ModalWrapper>
        <ModalLightbox id="modal" onClick={event => onClick(event)} />
        {children}
      </ModalWrapper>,
      document.body
    );
  }
}
