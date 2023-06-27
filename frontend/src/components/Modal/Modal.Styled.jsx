/** @format */

import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .overflow {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
`;
