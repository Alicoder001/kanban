/** @format */

import React from 'react';
import { NewTaskStyled } from './NewTask.Styled';
import { accordion, x } from '../../images';

const NewTask = () => {
  return (
    <NewTaskStyled className='newTask'>
      <h2 className='newTask__title'>Add New Task</h2>
      <label className='newTask__label'>
        <p className='newTask__label-title'>Title</p>
        <input
          className='newTask__label-input'
          type='text'
          placeholder='e.g. Take coffee break'
          required
        />
      </label>
      <label className='newTask__label'>
        <p className='newTask__label-title'>Description</p>
        <textarea
          className='newTask__label-input newTask__label-textarea'
          type='text'
          name=''
          id=''
          cols='20'
          rows='5'
          placeholder='e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.'
          required
        ></textarea>
      </label>
      <label className='newTask__label'>
        <p className='newTask__label-title'>Subtask</p>
        <div className='newTask__label-block'>
          <div className='newTask__label-wrap'>
            <input
              className='newTask__label-input'
              type='text'
              placeholder='e.g. Make coffee'
              required
            />
            <img
              src={x}
              alt=''
            />
          </div>
          <div className='newTask__label-wrap'>
            <input
              className='newTask__label-input'
              type='text'
              placeholder='e.g. Make coffee'
              required
            />
            <img
              src={x}
              alt=''
            />
          </div>
          <button className='newTask__label-button newTask__btn'>+ Add New Subtask</button>
        </div>
      </label>
      <label className='newTask__label'>
        <p className='newTask__label-title'>Title</p>
        <div className='newTask__select'>
          <div className='newTask__select-header'>
            <p className='newTask__select-subtitle'>Doing</p>
            <img
              src={accordion}
              alt='accordion-icon'
            />
          </div>
          <ul className='newTask__select-option'>
            <li className='newTask__select-item'>
              <p className='newTask__select-subtitle option-subtitle'>Todo</p>
            </li>
            <li className='newTask__select-item'>
              <p className='newTask__select-subtitle option-subtitle'>Doing</p>
            </li>
            <li className='newTask__select-item'>
              <p className='newTask__select-subtitle option-subtitle'>Done</p>
            </li>
          </ul>
        </div>
      </label>
      <button className='newTask__btn'>Create Task</button>
    </NewTaskStyled>
  );
};

export default NewTask;
