/** @format */
import React from 'react';
import { NewBoardStyled } from './NewBoard.Styled';
import { x } from '../../images';
import UseMainContext from '../../hooks/useMainContext'; 
const NewBoard = () => {
	return (
		<NewBoardStyled className='newBoard'>
			<h2 className='newBoard__title'>Add New Board</h2>
			<label className='newBoard__label'>
				<p className='newBoard__label-title'>Name</p>
				<input className='newBoard__label-input' type='text' placeholder='e.g. Web Design' required />
			</label>

			<label className='newBoard__label'>
				<p className='newBoard__label-title'>Columns</p>
				<div className='newBoard__label-block'>
					<div className='newBoard__label-wrap'>
						<input className='newBoard__label-input' type='text' placeholder='e.g. Make coffee' required />
						<img src={x} alt='' />
					</div>
					<div className='newBoard__label-wrap'>
						<input className='newBoard__label-input' type='text' />placeholder='e.g. Make coffee' required />
						<img src={x} alt='' />
					</div>
					<button className='newBoard__label-button newBoard__btn'>+ Add New Column</button>
				</div>
			</label>

			<button className='newBoard__btn'>Create New Board</button>
		</NewBoardStyled>
	);
};

export default NewBoard;
