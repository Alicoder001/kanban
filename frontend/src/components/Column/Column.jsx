/** @format */

import React from 'react';
import { ColumnStyled } from './Column.Styled';
import Task from '../Task/Task';
import useFetch from '../../hooks/useFetch';

const Column = ({ id }) => {
  const { data, error, pending } = useFetch(`http://localhost:3000/columns/${id}`);

  if (data) {
    const { name, board_id, tasks } = data;
    return (
      <ColumnStyled className='column'>
        <div className='column__header'>
          <div
            style={{ backgroundColor: '#49C4E5' }}
            className='column__header-oval'
          ></div>
          <h4 className='column__header-title'>
            {name.toUpperCase()} {tasks.length}
          </h4>
        </div>
        <ul className='column__task-list'>
          {tasks?.map((item) => {
           
            if (item) {
              return (
                <Task
                  key={item?.id}
                  id={item?.id}
                />
              );
            }
          })}
        </ul>
      </ColumnStyled>
    );
  }
};

export default Column;
