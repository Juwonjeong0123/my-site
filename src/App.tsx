import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyle";

import Home from "./Pages/Home/Home";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import NotFound from "./Pages/NotFound";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div>
        <BrowserRouter>
			    <Routes>
			    <Route path="/" element={<Home />}></Route>
			    <Route path="/Leaderboard" element={<Leaderboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
			  </Routes>
			</BrowserRouter>
    </div>
    </ThemeProvider>
  );
};

export default App;
