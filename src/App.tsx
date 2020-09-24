import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import Switch from  'react-switch';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { SunIcon } from './components/NavBar/styles';
import { MoonIcon } from './components/NavBar/styles';

import GlobalStyle from './styles/global'
import NavBar from './components/NavBar';

function App() {
  const [ theme, setTheme ] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light'? dark : light);
  };

  return (
  <ThemeProvider theme={theme} >
    <Router>
      <NavBar>
        <Link to="#" onClick={toggleTheme}>
          { theme.title === 'light'? <MoonIcon /> : <SunIcon /> }
        </Link>
      </NavBar>
      <Routes />
    </Router>
    <GlobalStyle />
  </ThemeProvider>
  )
}

export default App;
