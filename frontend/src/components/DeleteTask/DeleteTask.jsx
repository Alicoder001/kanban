/** @format */

import React from 'react';
import { DeleteTaskStyled } from './DeleteTask.Styled';

const DeleteTask = () => {
  return (
    <DeleteTaskStyled>
      <h2>Delete this board?</h2>
      <p>
        Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all
        columns and tasks and cannot be reversed.
      </p>
      <div className='button-block'>
        <button className='delete'>Delete</button>
        <button className='cancel'>Cancel</button>
      </div>
    </DeleteTaskStyled>
  );
};

export default DeleteTask;
