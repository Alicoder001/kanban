/** @format */

import styled from 'styled-components';

export const MainStyled = styled.main`
  height: 100vh;
  display: flex;
  .eye {
    transition: 1s;
    bottom: 3.2rem;
    left: 0;
    position: fixed;
    padding: 1.8rem 2.2rem 1.8rem 1.8rem;
    background-color: var(--primary-color);
    border-radius: 0 50% 50% 0;
    &:hover {
      cursor: pointer;
      background-color: var(--btn-primary-hover);
    }
  }
`;
