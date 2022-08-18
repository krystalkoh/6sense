import React, { useState } from "react";
import ReactContext from "./context/react-context";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Activity from "./Components/Activity";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <div>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <Header></Header>
      <Activity></Activity>
    </div>
  );
}

export default App;
