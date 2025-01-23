import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";


function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

          <Route
            path="/"
            element={
              <SignIn setUser={setUser}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <SignIn setUser={setUser}
              />
            }
          />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
