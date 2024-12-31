import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyle";

import Home from "./Pages/Home/Home";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Aya from "./Pages/Aya/Aya";
import NotFound from "./Pages/NotFound";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Leaderboard" element={<Leaderboard />}></Route>
            <Route path="/Aya" element={<Aya />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
