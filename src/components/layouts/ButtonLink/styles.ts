import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  padding: var(--spacing-16) var(--spacing-32);

  background-color: var(--body-color);
  border-radius: var(--spacing-8);
  color: var(--white);
  font-size: var(--font-size-16);
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: var(--yellow-400);
  }
`;
