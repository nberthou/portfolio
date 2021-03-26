import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HomePage from './Pages/HomePage';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  font-family: "Mukta", "Arial", sans-serif;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
