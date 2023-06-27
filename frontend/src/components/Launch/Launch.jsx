/** @format */

import React from 'react';
import { LaunchStyled } from './Launch.styled';
import Column from '../Column/Column';
import SideBar from '../SideBar/SideBar';
import { Link, Routes, BrowserRouter, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Board_block from '../Board_block/Board_block';
import RootLayout from '../../layout/RootLayout';
const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route path='board/:id' element={<Board_block />} />
			<Route path='modal/:id' element={<Board_block />} />
		</Route>,
	),
);
const Launch = () => {
	return (
		<LaunchStyled className=' launch'>
			{/* <BrowserRouter>
				<SideBar />
				<Routes>
					<Route path='board/:id' element={<Board_block />} />
					<Route path='modal/:id' element={<Board_block />} />
				</Routes>
			</BrowserRouter> */}
			<RouterProvider router={routes} />
		</LaunchStyled>
	);
};

export default Launch;
