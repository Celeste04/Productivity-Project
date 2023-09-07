import React, {} from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Todo from "./pages/Todo.js";
import Shop from "./pages/Shop.js";
import Timer from "./pages/Timer.js";


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
     </div> 
  );
}

export default App;