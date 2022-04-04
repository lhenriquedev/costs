import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-size-16);
    font-weight: 600;
    margin-bottom: var(--spacing-12);
  }

  input {
    padding: var(--spacing-16);
    border-radius: var(--border-radius-8);
    border: 1px solid #ccc;
    font-size: var(--font-size-16);

    &::placeholder {
      color: #7b7b7b;
    }
  }
`;
