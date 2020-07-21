import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
:root {
font-size: 1em;

--blue: #6892D5;
--red: #FA4659;
--dark-green: #79D1C3;
--light-green: #C9FDD7;
--light-grey: #F8FCFB; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Roboto';
  background: var(--light-grey);
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}
`;
