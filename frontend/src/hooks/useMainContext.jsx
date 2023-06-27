/** @format */

import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
const UseMainContext = () => {
  const context = useContext(MainContext);
  return context;
};
export default UseMainContext;
