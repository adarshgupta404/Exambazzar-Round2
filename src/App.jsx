import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BankDetails from "./components/BankDetails";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <BankDetails />
      </div>
    </div>
  );
}

export default App;
