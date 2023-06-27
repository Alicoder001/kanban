/** @format */

import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<>
			<SideBar />
			<Outlet />
		</>
	);
};

export default RootLayout;
