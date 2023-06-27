/** @format */

import styled from 'styled-components';

export const TaskStyled = styled.li`
  background-color: var(--task-bg);
  border-radius: 0.8rem;
  box-shadow: 0px 4px 6px var(--task-shadow-color);
  padding: 2.3rem 1.6rem;
  width: 28rem;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 6px 6px var(--task-shadow-color);
  }
  .task {
    &__title {
      margin-bottom: 0.8rem;
    }
  }
`;
