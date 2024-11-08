import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
// https://mui.com/material-ui/customization/dark-mode/
// Your users should be able to:

// - See all countries from the API on the homepage
// - Search for a country using an `input` field
// - Filter countries by region
// - Click on a country to see more detailed information on a separate page
// - Click through to the border countries on the detail page
// - Toggle the color scheme between light and dark mode *(optional)*
