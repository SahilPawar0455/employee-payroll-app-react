import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Payrollform from "./components/payroll-form/Payrollform";
import Header from "./Header";
import Home from "./components/Home/Home"
import React from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Switch>
          <Route path="/employee"><Payrollform/></Route>
          <Route path="/home"><Home/></Route>
          <Route exact path="/PayrollForm/:employeeId"><Payrollform/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
