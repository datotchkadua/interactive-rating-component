import React, { useState } from "react";
import Main from "./components/MainPage/Main";
import SuccesSubmitedPage from "./components/SubmittedPage/SuccesSubmited";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/page/ProtectedRoute";

function App() {
  const [number, setNumber] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main number={number} setNumber={setNumber} />}
        />
        <Route
          path="/submitted"
          element={
            <ProtectedRoute number={number}>
              <SuccesSubmitedPage number={number} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
