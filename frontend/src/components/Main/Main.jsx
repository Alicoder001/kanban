/** @format */

import React from 'react';
import { MainStyled } from './Main.styled';
import Launch from '../Launch/Launch';
import SideBar from '../SideBar/SideBar';
import Modal from '../Modal/Modal';
import UseMainContext from '../../hooks/useMainContext';
import { eyeLight } from '../../images';

const Main = () => {
  const { isSideBar, changeSideBar } = UseMainContext();
  const { showModal } = UseMainContext();
  const data = [];
  return (
    <MainStyled>
      <Launch />
      {showModal && <Modal />}
      <div
        style={isSideBar ? { transform: 'translateX(-100%)' } : { transform: 'translateX(0)' }}
        onClick={() => {
          changeSideBar(true);
        }}
        className='eye'
      >
        <img
          src={eyeLight}
          alt='eye'
        />
      </div>
    </MainStyled>
  );
};

export default Main;
