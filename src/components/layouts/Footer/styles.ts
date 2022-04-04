import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--bg-color);
  color: var(--white);
  padding: var(--spacing-48);
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 var(--spacing-16);

  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    li {
      margin-right: var(--spacing-16);

      svg {
        font-size: var(--font-size-24);
      }

      &:hover {
        cursor: pointer;
        color: var(--yellow-400);
      }
    }
  }

  p {
    span {
      font-weight: var(--font-weight-600);
    }
  }
`;
