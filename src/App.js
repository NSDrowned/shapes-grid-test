// @flow
import React from "react";

import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";
import { GlobalStyles } from "./theme/Global";

import Header from "./components/header/header";
import Filters from "./components/filters/filters";
import Title from './components/title/title';
import Items from './components/items/items';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Header />
        <Filters />
        <Title />
        <Items />
      </>
    </ThemeProvider>
  );
}

export default App;
