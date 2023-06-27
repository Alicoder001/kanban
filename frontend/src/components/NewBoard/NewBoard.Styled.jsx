/** @format */

import styled from 'styled-components';

export const NewBoardStyled = styled.div`
  z-index: 10;
  background-color: var(--subtask-bg);
  max-width: 48rem;
  width: 100%;
  padding: 3.2rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  .newBoard {
    &__btn {
      padding: 0.8rem 0;
      width: 100%;
      font-size: 1.3rem;
      line-height: 2.3rem;
      font-weight: 700;
      background-color: var(--btn-primary);
      border: none;
      border-radius: 2rem;
      color: var(--btn-text-color);
      &:hover {
        background-color: var(--btn-primary-hover);
        cursor: pointer;
      }
    }
    &__label {
      &-title {
        margin-bottom: 0.8rem;
      }
      &-input {
        width: 100%;
        padding: 0.8rem 1.6rem;
        border: var(--input-border);
        font-size: 1.3rem;
        line-height: 2.3rem;
        border-radius: 0.4rem;
        font-family: 'Plus Jakarta Sans', sans-serif;
        &:focus {
          border: 1px solid var(--primary-color);
          outline: none;
        }
        &::placeholder {
          color: var(--placeholder-color);
        }
      }

      &-block {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
      &-wrap {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
      &-button {
        background-color: var(--btn-bg);
        color: var(--btn-color);
        &:hover {
          background-color: var(--btn-hover-bg);
        }
      }
    }
  }
`;
