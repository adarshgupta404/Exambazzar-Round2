import React from "react";
import Navbar from "./components/Navbar";
import BankDetails from "./components/BankDetails";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="sidebank md:flex md:w-full">
        <Sidebar/>
        <BankDetails />
      </div>
    </div>
  );
}

export default App;
