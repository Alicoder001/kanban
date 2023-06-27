/** @format */

import React from 'react';
import { ModalStyled } from './Modal.Styled';
import ReactDOM from 'react-dom';
import Subtask from '../Subtask/Subtask';
import NewTask from '../NewTask/NewTask';
import DeleteTask from '../DeleteTask/DeleteTask';
import NewBoard from '../NewBoard/NewBoard';
import UseMainContext from '../../hooks/useMainContext';
const Modal = () => {
  const { modal, setShowModal } = UseMainContext();

  return ReactDOM.createPortal(
    <ModalStyled className='modal light'>
      {modal}
      <div
        onClick={() => {
          setShowModal(false);
        }}
        className='overflow'
      ></div>
      {/* <Subtask /> */}
      {/* <NewTask /> */}
      {/* <DeleteTask /> */}
      {/* <NewBoard /> */}
    </ModalStyled>,
    document.body,
  );
};
export default Modal;
