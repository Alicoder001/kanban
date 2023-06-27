/** @format */

import React, { useEffect, useState } from 'react';
import { SubtaskStyled } from './Subtask.Styled';
import { accordion, check, property } from '../../images';
import useFetch from '../../hooks/useFetch';
import useUpdateFetch from '../../hooks/useUpdateFetch';
import UseMainContext from '../../hooks/useMainContext';

const Subtask = (props) => {
  const { id } = props.data;
  const { board_id } = UseMainContext();
  const doc = useFetch(`http://localhost:3000/boards/${board_id}`);
  let columns = [];
  if (doc) {
    columns = doc.data?.columns;
  }
  console.log(columns);
  const { data, error, pending } = useFetch(`http://localhost:3000/tasks/${id}`);
  const { updateData } = useUpdateFetch();

  const [checkData, setCheckData] = useState(data && data.subtasks);
  useEffect(() => {
    if (data) {
      setCheckData(data.subtasks);
    }
  }, [data]);
  if (pending) {
    return <h1 style={{ color: 'blue' }}>Loading...</h1>;
  } else if (data && !pending) {
    const { name, description } = data;
   
    function checkedF(id) {
      setCheckData((data) => {
        return data.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        });
      });
    }
    return (
      <SubtaskStyled className='subtask'>
        <div className='subtask__header'>
          <h2>{name}</h2>
          <div className='subtask__img'>
            <img
              src={property}
              alt='property'
            />
            <ul className='subtask__img-option'>
              <li className='subtask__img-item'>
                <p className='subtask__img-subtitle option-subtitle'>Edit Task</p>
              </li>
              <li className='subtask__img-item'>
                <p className='subtask__img-subtitle option-subtitle'>Delete Task</p>
              </li>
            </ul>
          </div>
        </div>
        <p className='subtask__subtitle'>{description}</p>
        <form action='subtask__form'>
          <p className='subtask__form-title'>Subtasks (2 of 3)</p>
          <ul className='subtask__form-block'>
            {checkData &&
              checkData.map((item) => {
                if (item) {
                  const { name, completed } = item;
                  return (
                    <li
                      onClick={async () => {
                        const { pending, error } = await updateData(
                          `http://localhost:3000/subtasks/${item.id}`,
                          { name: item.name, completed: !item.completed },
                        );

                        checkedF(item.id);
                      }}
                      key={item.id}
                      className={`subtask__check ${completed ? 'active' : ''}`}
                    >
                      <div className='subtask__check-icon'>
                        <img
                          src={check}
                          alt='checked-icon'
                        />
                      </div>
                      <p className='subtask__check-subtitle'>{name}</p>
                    </li>
                  );
                }
              })}
          </ul>
          <p className='subtask__form-title'>Current Status</p>
          <div className='subtask__select'>
            <div className='subtask__select-header'>
              <p className='subtask__select-subtitle'>Doing</p>
              <img
                src={accordion}
                alt='accordion-icon'
              />
            </div>
            <ul className='subtask__select-option'>
              {columns &&
                columns.map((column) => {
                  return (
                    <li
                      key={column.id}
                      className='subtask__select-item'
                    >
                      <p className='subtask__select-subtitle option-subtitle'>{column.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </form>
      </SubtaskStyled>
    );
  }
};

export default Subtask;
