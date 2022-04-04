import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: var(--spacing-16);

  label {
    font-size: var(--font-size-16);
    font-weight: 600;
    margin-bottom: var(--spacing-12);
  }

  select {
    font-size: var(--font-size-16);

    padding: var(--spacing-16);
    border-radius: var(--border-radius-8);
    border: 1px solid #ccc;
  }
`;
