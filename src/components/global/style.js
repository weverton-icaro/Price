import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  /* VARS */

  :root {
    --main-color: #01B7FF;
  }

  /* GENERAL */

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  .bg-fixed {
    position: fixed;
    width: 100%;
    height: 430px;
    background-image: url('https://onsurance.me/wp-content/uploads/2019/08/insurance-35.png');
    background-repeat: no-repeat; 
    background-position: left top; 
    z-index: 1;
  }

  body {
    background-color: #F7F8FC;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-weight: 700;
  }

  .font14{
    font-size: 14px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .btn {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .btn-primary {
    background: var(--main-color);
    border-color: var(--main-color);
  }

  .invisible{
    display: none;
  }

`;