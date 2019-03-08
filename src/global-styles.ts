import {createGlobalStyle} from 'styled-components';

import colors from './constants/colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

  html,
  body {
    height: 100vh;
    width: 100vw;
    background: ${colors.white};
    background-size: cover;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;

    * {
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    }

    *::-webkit-scrollbar {
    display: none !important;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${colors.black};
    font-weight: 400;
    font-size: 14px;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
