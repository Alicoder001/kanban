/** @format */

import { useEffect } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyled } from './global.styled';
import useFetch from './hooks/useFetch';
import UseMainContext from './hooks/useMainContext';

function App() {
  const { data } = useFetch(`http://localhost:3000/boards`);
  const { changeBoardId, board_id } = UseMainContext();
  useEffect(() => {
    if (data) {
      changeBoardId(data[0].id);
    }
  }, [data]);
  console.log(board_id);
  return (
    <GlobalStyled className='App light'>
      <Navbar />
      <Main />
    </GlobalStyled>
  );
}

export default App;
