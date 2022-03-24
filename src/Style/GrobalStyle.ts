import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "LeeSeoyun";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;

  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  
  input:focus::-webkit-input-placeholder{
    color:transparent;
  }
  button {
      cursor: pointer;
      outline: none;
  }


 font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  html {
    overflow: hidden;
    font-size: 16px;
  }

  body{
    /* cursor: none; */
    /* overflow: hidden; */
    width: 100vw;
    top: 0;
  }
  
  *{
  list-style: none;
  overflow-x: hidden;
  }
  
  body::-webkit-scrollbar{
  width: 20px;
  }
  
  body::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-image: linear-gradient(135deg, #D0368A 0%, #708AD4 85%);
  }
  
  body::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
  }
  
  .cursor{
    width: 3rem;
    height: 3rem;
    border: 2px solid black;
    border-radius: 50%;
    /* position: absolute;
    z-index: 10;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 0.3s ease;
    transition-property: background, transform;
    transform-origin: 100% 100%;
    backdrop-filter: sepia(20%);
    background-size: cover; */
  }
  


`;
