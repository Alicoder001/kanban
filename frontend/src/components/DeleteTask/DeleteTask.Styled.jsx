/** @format */

import styled from 'styled-components';

export const DeleteTaskStyled = styled.div`
  z-index: 10;
  background-color: var(--subtask-bg);
  max-width: 48rem;
  width: 100%;
  padding: 3.2rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  p {
    font-size: 1.3rem;
    line-height: 2.3rem;
  }
  .button-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
  }
  button {
    width: 20rem;
    height: 4rem;
    border-radius: 2rem;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  .delete {
    background-color: var(--delete-btn-bg);
    color: white;
    &:hover {
      background-color: var(--delete-btn-bg-hover);
    }
  }
  .cancel {
    background-color: var(--cancel-btn-bg);
    color: #635fc7;
    &:hover {
      background-color: var(--cancel-btn-bg-hover);
    }
  }
`;
