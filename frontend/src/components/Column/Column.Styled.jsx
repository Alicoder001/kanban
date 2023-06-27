/** @format */

import styled from 'styled-components';

export const ColumnStyled = styled.div`
  .column {
    &__header {
      display: flex;
      gap: 1.2rem;
      margin-bottom: 2.4rem;
      &-oval {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    &__task-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-bottom: 4rem;
    }
  }
`;
