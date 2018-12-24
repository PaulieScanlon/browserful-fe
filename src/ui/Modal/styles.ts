import styled from 'react-emotion';
import {
  colours,
  materialBuilder,
  breakpoints,
  common,
  scaffolding
} from '../../theme';
import { font } from '../../ui/Typography';

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

export const ModalTrigger = styled.div({
  label: 'modal-trigger',
  cursor: 'pointer',
  display: 'inline-flex'
});

export const ModalLightbox = styled.div({
  label: 'modal-lightbox',
  position: 'absolute',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  backgroundColor: colours.lightBox
});

export const ModalContent = styled.div({
  label: 'modal-content',
  position: 'relative',
  backgroundColor: colours.white,
  borderRadius: '3px',
  margin: `0px ${scaffolding.gutterLg}`,
  width: '100%',
  maxWidth: breakpoints.sm,
  boxShadow: materialBuilder(1)
});

export const ModalClose = styled.button({
  label: 'modal-close',
  position: 'absolute',
  top: '-10px',
  right: '-10px',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  width: '26px',
  height: '26px',
  outline: 'none',
  padding: '0px',
  borderColor: colours.transparent,
  backgroundColor: colours.greyUltraLight,
  color: colours.greyMid,
  WebkitTapHighlightColor: colours.transparent
});

export const CloseText = styled.span({
  label: 'close-text',
  fontSize: '14px',
  lineHeight: '16px',
  textAlign: 'center',
  fontFamily: `${font.fontFamily}`,
  fontWeight: 'normal'
});
