import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/movies" element={<Home />}>
        <Route path=":movieId" element={<Movie />} />
        <Route
          path="*"
          element={
            <main>
              <p>There is nothing here</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
