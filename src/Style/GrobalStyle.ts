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


`;
