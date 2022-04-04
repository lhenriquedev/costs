import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--body-color);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-16);
  height: var(--header-height);

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    column-gap: var(--spacing-32);

    list-style: none;

    li {
      a {
        font-size: var(--font-size-18);
        text-decoration: none;
        color: var(--white);
        transition: all 0.3s;

        &:hover {
          color: var(--yellow-400);
        }
      }
    }
  }
`;

export const SLink = styled(Link)`
  font-size: var(--font-size-32);
  text-decoration: none;
  color: var(--white);
`;
