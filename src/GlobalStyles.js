import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: url('./assets/fonts/Manrope-Regular.ttf') format('truetype'),
         url('./assets/fonts/Manrope-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    line-height: 1.6;
  }
`;
