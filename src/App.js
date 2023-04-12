import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import BasicPagination from "./components/BasicPagination";
import DarkTheme from "./components/DarkTheme";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <SearchAppBar />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>
      <BasicPagination />
      <DarkTheme />
    </div>
  );
}

export default App;
