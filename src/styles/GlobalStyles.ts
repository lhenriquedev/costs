import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --body-font: 'Inter', Sans-Serif;
    --body-color: #333;
    
    --header-height: 6rem;

    --white: #fff;
    --yellow-400: #ffaa22;
    /* Font size system based on 16px */

    --font-size-10: 0.625rem;
    --font-size-12: 0.75rem;
    --font-size-14: 0.875rem;
    --font-size-16: 1rem;
    --font-size-18: 1.125rem;
    --font-size-20: 1.25rem;
    --font-size-24: 1.5rem;
    --font-size-32: 2rem;
		--font-size-36: 2.25rem;
    --font-size-44: 2.75rem;
		--font-size-52: 3.25rem;
		--font-size-62: 3.875rem;
		--font-size-74: 4.625rem;
		--font-size-86: 5.375rem;

		--font-weight-light: 300;
		--font-weight-regular: 400;
		--font-weight-medium: 500;
		--font-weight-semi-bold: 600;
		--font-weight-bold: 700;
		--font-weight-black: 900;

		--border-radius-8: 8px;

    --spacing-2: 0.125rem;
    --spacing-4: 0.25rem;
    --spacing-8: 0.5rem;
    --spacing-12: 0.75rem;
    --spacing-16: 1rem;
    --spacing-24: 1.5rem;
    --spacing-32: 2rem;
	  --spacing-48: 3rem;
		--spacing-64: 4rem;
    --spacing-96: 6rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #ddd;
    font-family: var(--body-font);
  }

  body, #root {
    height: 100vh;
  }
`;

export default GlobalStyle;
