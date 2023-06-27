/** @format */

import styled from 'styled-components';

export const Board_blockStyled = styled.div`
  width: 100%;
  padding-top: 9.6rem;
  overflow-x: scroll;
  .launchWrap {
    padding: 2.4rem;
    gap: 2.4rem;
    display: flex;
    height: 100%;
  }
  .addColumn {
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    background-color: var(--column-bg);
    flex-shrink: 0;
    margin-top: 4rem;
    border-radius: 6px;
    &:hover {
      cursor: pointer;
      h1 {
        color: var(--primary-color);
      }
    }
  }
`;
