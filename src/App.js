import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";

// import DarkTheme from "./components/DarkTheme";
import NavigationBar from "./components/NavigationBar";
import BasicPagination from "./components/BasicPagination";

function App() {
  return (
    <div>
      <SearchAppBar />
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomePage />
              <BasicPagination />
            </div>
          }
        />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>

      {/* <DarkTheme /> */}
    </div>
  );
}

export default App;
