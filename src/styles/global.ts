import { createGlobalStyle } from 'styled-components';
import { MyProps } from './theme';

const GlobalStyle = createGlobalStyle<MyProps>`
  * {
    font-family: "inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({theme})  => theme.gray100};
    background: ${({theme})  => theme.gray600};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }



`

export default GlobalStyle;