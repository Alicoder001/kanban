/** @format */

import React, { useEffect } from 'react';
import { TaskStyled } from './Task.Styled';
import useFetch from '../../hooks/useFetch';
import UseMainContext from '../../hooks/useMainContext';

const Task = ({ id }) => {
  const { setModal, setShowModal } = UseMainContext();
  const { data, error, pending } = useFetch(`http://localhost:3000/tasks/${id}`);
  let subtasks_completed = 0;
  if (data) {
    const { name, description, column_id, subtasks } = data;
    subtasks_completed = subtasks?.filter((item) => item?.completed)?.length;

    return (
      <TaskStyled
        onClick={() => {
          setModal('subtask', id);
          setShowModal(true);
        }}
        className='task'
      >
        <h3 className='task__title'>{name}</h3>
        <p className='task__subtitle'>
          {subtasks_completed} of {subtasks?.length} substasks
        </p>
      </TaskStyled>
    );
  }
};

export default Task;
