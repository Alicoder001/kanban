/** @format */

import React from 'react';
import { Board_blockStyled } from './Board_block.styled';
import Column from '../Column/Column';
import useFetch from '../../hooks/useFetch';

const Board_block = () => {
  const { data, error, pending } = useFetch('http://localhost:3000/boards/4');

  if (data) {
    const columns = data.columns;
    return (
      <Board_blockStyled>
        <div className='launchWrap'>
          {columns?.map((item) => {
            if (item?.tasks !== [null]) {
              return (
                <Column
                  key={item?.id}
                  id={item?.id}
                />
              );
            }
          })}
          <div className='addColumn'>
            <h1>+ New Column</h1>
          </div>
        </div>
      </Board_blockStyled>
    );
  }
};

export default Board_block;
