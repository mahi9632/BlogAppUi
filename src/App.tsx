import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogPost } from './utils/types';
import BlogCard from './components/BlogCard';
import './App.css'
import LoginImage from './assests/images/blogLoginWallPaper.jpg';
import { DashBoard } from "./components/Dashboard";


const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);

 


  return (
    <div className="App">
      <DashBoard/>
    </div>
  );
};

export default App;
