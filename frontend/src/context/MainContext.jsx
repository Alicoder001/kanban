/** @format */

import { createContext, useReducer } from 'react';
import NewTask from '../components/NewTask/NewTask';
import NewBoard from '../components/NewBoard/NewBoard';
import DeleteTask from '../components/DeleteTask/DeleteTask';
import Subtask from '../components/Subtask/Subtask';
import useFetch from '../hooks/useFetch';
export const MainContext = createContext();
function contextF(state, action) {
  switch (action.type) {
    case 'changeMode':
      return { ...state, isLight: action.payload };
    case 'changeSideBar':
      return { ...state, isSideBar: action.payload };
    case 'changeModalType':
      return { ...state, modal: action.payload };
    case 'changeModal':
      return { ...state, showModal: action.payload };
    case 'changeBoardId':
      return { ...state, board_id: action.payload };
  }
}
export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextF, {
    board_id: 0,
    isLight: true,
    isSideBar: false,
    modal: {},
    showModal: false,
    changeBoardId(id) {
      dispatch({ type: 'changeBoardId', payload: id });
    },
    setShowModal(is) {
      dispatch({ type: 'changeModal', payload: is });
    },

    setModal(name, id) {
      switch (name) {
        case 'new_task':
          dispatch({
            type: 'changeModalType',
            payload: (
              <NewTask
                data={{
                  title: 'Add New Task',
                  placeholderInput: 'e.g. Take coffee break',
                  description:
                    'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
                  buttonText: 'Create Task',
                  id,
                }}
              />
            ),
          });
          break;
        case 'edit_task':
          dispatch({
            type: 'changeModalType',
            payload: (
              <NewTask
                data={{
                  title: 'Edit Task',
                  placeholderInput: 'e.g. Take coffee break',
                  description:
                    'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
                  buttonText: 'Save Changes',
                  id,
                }}
              />
            ),
          });
          break;
        case 'new_board':
          dispatch({
            type: 'changeModalType',
            payload: (
              <NewBoard
                data={{
                  title: 'Add New Board',
                  placeholderInput: 'e.g. Web Design',
                  buttonText: 'Create New Board',
                  id,
                }}
              />
            ),
          });
          break;
        case 'edit_board':
          dispatch({
            type: 'changeModalType',
            payload: (
              <NewBoard
                data={{
                  title: 'Edit Board',
                  placeholderInput: 'e.g. Web Design',
                  buttonText: 'Save Changes',
                  id,
                }}
              />
            ),
          });
          break;
        case 'delete_board':
          dispatch({
            type: 'changeModalType',
            payload: (
              <DeleteTask
                data={{
                  title: 'Delete this board?',
                  description:
                    'Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.',
                  id,
                }}
              />
            ),
          });
          break;
        case 'delete_task':
          dispatch({
            type: 'changeModalType',
            payload: (
              <DeleteTask
                data={{
                  title: 'Delete this task?',
                  description:
                    'Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.',
                  id,
                }}
              />
            ),
          });
          break;
        case 'subtask':
          dispatch({
            type: 'changeModalType',
            payload: (
              <Subtask
                data={{
                  id,
                }}
              />
            ),
          });
          break;
      }
    },
    changeSideBar(i) {
      dispatch({ type: 'changeSideBar', payload: i });
    },

    changeMode(mode) {
      dispatch({ type: 'changeMode', payload: mode });
    },
  });
  
  return <MainContext.Provider value={{ ...state }}>{children}</MainContext.Provider>;
};
