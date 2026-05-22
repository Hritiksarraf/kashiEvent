import "./App.css";
import Navbar from "./components/navbar.js";
import Endcomponent from "./components/endcomponent.js";
import * as React from "react";
import { Outlet } from "react-router-dom";


function App() {
  return (
  <>
    
      <Navbar />
        <Outlet/>
      <Endcomponent/>
    
  </>
  );
}


export default App;
