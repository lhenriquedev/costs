import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--body-color);
  padding: var(--spacing-16) var(--spacing-32);

  border: none;
  border-radius: var(--border-radius-8);
  color: var(--white);
  cursor: pointer;

  font-size: var(--font-size-16);

  &:hover {
    filter: brightness(0.8);
  }
`;
