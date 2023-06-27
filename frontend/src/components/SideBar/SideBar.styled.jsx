/** @format */

import styled from 'styled-components';

export const SidebarStyled = styled.section`
  max-width: 30rem;
  width: 100%;
  height: 100%;
  background-color: var(--sidebar-bg);
  z-index: 6;
  border-right: 1px solid var(--line-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  flex-shrink: 0;
  /* transform: translateX(-100%); */
  .sidebar {
    &__header {
      height: 9.6rem;
      display: flex;
      align-items: center;
      padding-left: 3.4rem;
    }
    &__boards {
      &-title {
        padding: 0 3.2rem;
        margin-bottom: 1.9rem;
      }
      &-list {
        display: flex;
        flex-direction: column;
      }
      &-item {
        margin-right: 2.4rem;
        padding: 1.6rem 3.2rem;
        display: flex;
        align-items: center;
        gap: 1.6rem;
        border-radius: 0px 100px 100px 0px;
        h3 {
          color: var(--desc-color);
        }
      }
    }
    &__footer {
      padding: 4.7rem 2.4rem 3.2rem 0;
    }
    &__mode {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 2.4rem;
      justify-content: center;
      background-color: var(--mode-bg);
      padding: 1.4rem;
      border-radius: 0.6rem;
      margin-bottom: 2.2rem;
      margin-right: 2.4rem;
      &-btn {
        width: 4rem;
        padding: 0.3rem;
        border-radius: 1.3rem;
        background-color: var(--primary-color);
      }
      &-oval {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        background-color: white;
      }
    }
    &__hide {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      border-radius: 0 2rem 2rem 0;
      padding: 1.6rem 1.8rem 1.6rem 3.2rem;

      width: 100%;
      margin-right: 2.4rem;
      h3 {
        color: var(--desc-color);
      }
      &:hover {
        cursor: pointer;
        background-color: var(--btn-primary-hover);

        h3 {
          color: white;
        }
      }
    }
  }
  .active {
    background-color: var(--primary-color);
    h3 {
      color: white;
    }
  }
  .create-item {
    h3 {
      color: var(--primary-color);
    }
  }
  .right {
    transform: translateX(0);
  }
`;
