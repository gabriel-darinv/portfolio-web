import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    /* font-size:60%; */
  }

  body {
    font-size: 16px;
    background: ${props => props.theme.colors.background3};
    font-family: sans-serif;
  }
`;

