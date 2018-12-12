import React from 'react';
// import {connect} from 'react-redux';
import ReactModal from 'react-modal';

export const Modal = WrappedContent => props => (
  <ReactModal
    isOpen={props.isOpen}
    contentLabel="onRequestClose Example"
    onRequestClose={props.handleCloseModal}
    shouldCloseOnOverlayClick={false}
    className="Modal"
    ariaHideApp={false}
  >
    <WrappedContent {...props} />
  </ReactModal>
);
