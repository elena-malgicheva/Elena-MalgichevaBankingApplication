import React from "react";
import { Routes, Route } from "react-router-dom";
import { BalanceProvider } from './Context/BalanceContext';
import { UsersProvider } from "./Context/UsersContext";

import Home from './Pages/Home';
import Register from './Pages/Register';
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Alldata from "./Pages/Alldata";
import AppNavbar from "./Components/Navbar";
import Foot from "./Components/Foot";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <UsersProvider>
      <BalanceProvider>
          <AppNavbar/>
          <Routes>
            <Route path="Elena-MalgichevaBankingApplication/welcome" element={ <Home/> } />
            <Route path="Elena-MalgichevaBankingApplication/register" element={ <Register/> } />
            <Route path="Elena-MalgichevaBankingApplication/deposit" element={ <Deposit/> } />
            <Route path="Elena-MalgichevaBankingApplication/withdraw" element={ <Withdraw/> } />
            <Route path="Elena-MalgichevaBankingApplication/alldata" element={ <Alldata/> } />
            
          </Routes>
          <Foot />
      </BalanceProvider>
      </UsersProvider>
    </div>
    
  )
}

export default App;