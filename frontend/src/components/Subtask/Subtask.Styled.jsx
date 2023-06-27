/** @format */

import styled from 'styled-components';

export const SubtaskStyled = styled.div`
z-index: 10;
  background-color: var(--subtask-bg);
  max-width: 48rem;
  width: 100%;
  padding: 3.2rem 3.2rem 0;
  border-radius: 0.6rem;
  .subtask {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2.4rem;
      margin-bottom: 2.4rem;
    }
    &__img {
      position: relative;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
      }
      position: relative;
      padding-bottom: 3.2rem;
      &-subtitle {
        font-size: 1.3rem;
        line-height: 2.3rem;
        color: var(--title-color);
        font-weight: 500;
      }
      &-option {
        display: none;
        position: absolute;
        top: 5rem;
        width: 19.2rem;
        background-color: var(--subtask-bg);
        border-radius: 0.8rem;
        padding: 1.6rem;
        flex-direction: column;
        gap: 0.8rem;
        .option-subtitle {
          color: var(--desc-color);
          &:hover {
            color: #ea5555;
          }
        }
      }
      &:hover {
        cursor: pointer;
        .subtask__img-option {
          display: flex;
        }
      }
    }
    &__subtitle {
      font-size: 1.3rem;
      line-height: 1.76;
      font-weight: 500;
      margin-bottom: 2.4rem;
    }
    &__form {
      &-block {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 2.4rem;
      }
      &-title {
        margin-bottom: 1.6rem;
      }
    }
    &__check {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding: 1.2rem;
      border-radius: 0.4rem;
      background-color: var(--check-bg);
      &-icon {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 0.2rem;
        border: var(--check-icon-border);
        flex-shrink: 0;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          display: none;
        }
      }
      &-subtitle {
        color: var(--title-color);
      }
      &:hover {
        background-color: var(--check-hover-bg);
        cursor: pointer;
      }
    }
    &__select {
      position: relative;
      padding-bottom: 3.2rem;
      &-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6rem 2.4rem;
        border: 1px solid var(--primary-color);
        border-radius: 4px;
      }
      &-subtitle {
        font-size: 1.3rem;
        line-height: 2.3rem;
        color: var(--title-color);
        font-weight: 500;
      }
      &-option {
        display: none;
        position: absolute;
        top: 5rem;
        width: 100%;
        background-color: var(--subtask-bg);
        border-radius: 0.8rem;
        padding: 1.6rem;
        flex-direction: column;
        gap: 0.8rem;
        .option-subtitle {
          color: var(--desc-color);
          &:hover {
            color: var(--title-color);
          }
        }
      }
      &:hover {
        cursor: pointer;
        .subtask__select-option {
          display: flex;
        }
      }
    }
  }

  .active {
    .subtask__check-icon {
      background-color: var(--checked-bg);
      img {
        display: block;
      }
    }
    .subtask__check-subtitle {
      color: var(--checked-subtitle-color);
      text-decoration: line-through;
      text-decoration-color: var(--checked-subtitle-color);
    }
    &:hover {
      background-color: var(--check-bg);
      cursor: pointer;
    }
  }
`;
