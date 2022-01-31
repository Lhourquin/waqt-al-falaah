import React, { Component } from "react";
import Calendar from "./components/Calendar";
import Day from "./components/Day";
import NavBar from "./components/NavBar";
import { Routes, Route} from "react-router-dom";
//import { HorairesList } from "./components/day-list/horaires.list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        
          <NavBar />
          <Routes>
            <Route path="/" element={<Day/>} />
            <Route path="/calendar" element={<Calendar/>}/>
          </Routes>
      </div>
    );
  }
}

export default App;
