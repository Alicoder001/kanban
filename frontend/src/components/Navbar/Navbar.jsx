/** @format */

import React from 'react';
import { NavbarStyled } from './Navabar.styled';
import { logoLight, property } from '../../images';
import UseMainContext from '../../hooks/useMainContext';

const Navbar = () => {
	const { isSideBar } = UseMainContext();
	return (
		<NavbarStyled>
			<div className=' nav'>
				<div className='nav__block left-block'>
					<img className='logo' src={logoLight} alt='logo' />
					<hr />
					<h1 className={`${isSideBar && 'right'} board-name`}>Platform Launch</h1>
				</div>
				<div className='nav__block right-block'>
					<button>+ Add New Task</button>
					<div className='nav__property'>
						<img src={property} alt='property' />
					</div>
				</div>
			</div>
		</NavbarStyled>
	);
};

export default Navbar;
