import React, {} from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Todo from "./pages/Todo.js";
import Shop from "./pages/Shop.js";
import Timer from "./pages/Timer.js";
import Grades from "./pages/Grades.js";


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
      </div>
     </div> 
  );
}

export default App;