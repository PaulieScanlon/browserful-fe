import styled from 'react-emotion';
import { colours, common } from '../../theme';

export const ModalWrapper = styled.div({
  label: 'modal-wrapper',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: common.modal.zIndex
});

export const ModalLightbox = styled.div({
  label: 'modal-lightbox',
  position: 'absolute',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  backgroundColor: colours.lightBox
});
