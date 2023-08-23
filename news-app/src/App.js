import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

const App =()=> {
  const pageSize = 15;
  const apiKey=process.env.REACT_APP_NEWS_API;

  const [progress,setProgress]= useState(0)
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#212529'
      // showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'White'
      // showAlert("Light Mode has been enabled", "success");
    }
  }

  
    return (
      <div>
        <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="general"country={"in"} pageSize={pageSize} category="general" />} />
            <Route exact path="/business" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="business" country={"in"} pageSize={pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="entertainment" country={"in"} pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/general" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="general" country={"in"} pageSize={pageSize} category="general" />} />
            <Route exact path="/technology" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="technology" country={"in"} pageSize={pageSize} category="technology" />} />
            <Route exact path="/health" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="healthcare" country={"in"} pageSize={pageSize} category="healthcare" />} />
            <Route exact path="/science" element={<News  mode={mode} setProgress = {setProgress} apiKey={apiKey} key="science" country={"in"} pageSize={pageSize} category="science" />} />
            <Route exact path="/sports" element={<News mode={mode} setProgress = {setProgress} apiKey={apiKey} key="sports" country={"in"} pageSize={pageSize} category="sports" />} />
          </Routes>
        </BrowserRouter>
        
        
      </div>
    )
}

export default App

