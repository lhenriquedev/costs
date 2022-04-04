import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-16);
`;

export const Content = styled.section`
  margin-top: var(--spacing-96);
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--spacing-48);

  img {
    max-width: 40%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-16);
  text-align: left;

  h1 {
    font-size: var(--font-size-62);
    font-weight: 900;
    text-transform: uppercase;

    span {
      font-weight: 600;
      color: var(--yellow-400);
      border-radius: var(--spacing-2);
    }
  }

  p {
    font-size: var(--font-size-18);
    color: #777;
  }

  a {
    align-self: baseline;
  }
`;
