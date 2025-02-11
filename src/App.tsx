import React from 'react';
import './App.css'
import LoginImage from './assests/images/blogLoginWallPaper.jpg';
import { DashBoard } from "./components/Dashboard";


const App: React.FC = () => {

  return (
    <div className="App">
      <DashBoard/>
    </div>
  );
};

export default App;
