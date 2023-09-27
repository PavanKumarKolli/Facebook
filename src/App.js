import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />

                {/* <Home /> */}
              </>
            }
          />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
