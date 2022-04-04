import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  margin: 0 auto;
`;
export const Content = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius-8);
  padding: var(--spacing-16);
  margin-top: var(--spacing-96);

  h2 {
    font-size: var(--font-size-36);
    margin: var(--spacing-16) 0;
  }

  span {
    display: inline-block;
    margin-bottom: var(--spacing-16);
  }
`;
