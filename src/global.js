import { createGlobalStyle } from 'styled-components';
import background from './assests/images/background.jpg'; // Your existing background

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  position: relative;
  background: none; /* Don't set image directly here */
  transition: all 0.25s linear;
}

/* Background image as ::before pseudo-element */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  z-index: -2;
}

/* Dark mode overlay on top of background */
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.name === "dark" ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  z-index: -1;
}

a {
  color: ${({ theme }) => theme.link};
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  color: ${({ theme }) => theme.text};
  font-weight: 700;
}

p, span {
  color: ${({ theme }) => theme.secondaryText};
}

strong {
  color: ${({ theme }) => theme.accentColor};
}
`;