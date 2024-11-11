import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CountryDetails from "./pages/countryDetails";
import Layout from "./components/layout";

const App = () => {

  return (
    <Layout className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:numericCode" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
// https://mui.com/material-ui/customization/dark-mode/
