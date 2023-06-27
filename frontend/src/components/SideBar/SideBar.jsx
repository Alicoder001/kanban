/** @format */

import React from 'react';
import { SidebarStyled } from './SideBar.styled';
import { boardIconLight, eyeHideLight, logoLight, moonLight, sunLight } from '../../images';
import UseMainContext from '../../hooks/useMainContext';

const SideBar = () => {
  const { changeSideBar, isSideBar } = UseMainContext();
  return (
    <SidebarStyled
      style={isSideBar ? { marginLeft: '0' } : { marginLeft: '-30rem' }}
      className={`sidebar ${isSideBar ? 'right' : ''}`}
    >
      <div className='sidebar__block'>
        <div className='sidebar__header'>
          <img
            src={logoLight}
            alt=''
            className='sidebar__header-img'
          />
        </div>
        <div className='sidebar__boards'>
          <h4 className='sidebar__boards-title'>ALL BOARDS (3)</h4>
          <ul className='sidebar__boards-list'>
            <li className='sidebar__boards-item active'>
              <img
                src={boardIconLight}
                alt='icon'
              />
              <h3>Platform Launch</h3>
            </li>
            <li className='sidebar__boards-item'>
              <img
                src={boardIconLight}
                alt='icon'
              />
              <h3>Marketing Plan</h3>
            </li>
            <li className='sidebar__boards-item'>
              <img
                src={boardIconLight}
                alt='icon'
              />
              <h3>Roadmap</h3>
            </li>
            <li className='sidebar__boards-item create-item'>
              <img
                src={boardIconLight}
                alt='icon'
              />
              <h3>+ Create New Board</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebar__block sidebar__footer'>
        <div className='sidebar__mode'>
          <img
            src={sunLight}
            alt='light-icon'
          />
          <div className='sidebar__mode-btn'>
            <div className='sidebar__mode-oval'></div>
          </div>
          <img
            src={moonLight}
            alt='dark-icon'
          />
        </div>
        <div
          onClick={() => {
            changeSideBar(false);
          }}
          className='sidebar__hide'
        >
          <img
            src={eyeHideLight}
            alt=''
          />
          <h3>Hide Sidebar</h3>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default SideBar;
