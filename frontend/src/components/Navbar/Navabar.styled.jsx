/** @format */

import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--line-color);
  background-color: var(--navbar-bg);
  z-index: 5;
  .nav {
    padding: 0 2.4rem;
    display: flex;
    justify-content: space-between;
    .logo {
      &:hover {
        cursor: pointer;
      }
    }
    &__block {
      display: flex;
      align-items: center;
    }

    .left-block {
      gap: 3.2rem;
    }
    .right-block {
      gap: 2.4rem;
    }
    hr {
      height: 9.6rem;
      width: 0.1rem;
      border: none;
      background-color: var(--line-color);
    }
    button {
      width: 16.4rem;
      color: var(--btn-text-color);
      background-color: var(--btn-primary);
      height: 4.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 2.4rem;
      font-size: 1.5rem;
      font-weight: 700;
      transition: 0.3s;
      &:hover {
        background-color: var(--btn-primary-hover);
        cursor: pointer;
      }
    }
    &__property {
      width: 2rem;
      border-radius: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .board-name {
    transition: margin 0.7s;
  }
  .right {
    margin-left: 8.2rem;
  }
`;
