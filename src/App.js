import logo from './logo.svg';
import './App.css';
import NewsContainer from './Components/Containers/NewsContainer';
import AppBar from './Components/Containers/ButtonAppBar';
import ButtonAppBar from './Components/Containers/ButtonAppBar';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import About from './Components/Containers/About';
import HskGame from './Components/Containers/HskMultiGame'
import React from 'react';
function App() {
  
  return (
    <div className="App">
      <ButtonAppBar />
        <Routes>
          <Route path="/" element={<NewsContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/multiHsk1" element={<HskGame />} />
          <Route path="/multiHsk2" element={<HskGame />} />
          <Route path="/multiHsk3" element={<HskGame />} />
          <Route path="/multiHsk4" element={<HskGame />} />
          <Route path="/multiHsk5" element={<HskGame />} />
          <Route path="/multiHsk6" element={<HskGame />} />
        </Routes>
    </div>
  );
}

export default App;
