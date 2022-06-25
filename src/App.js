import './App.css';
import HomeContainer from './Components/Containers/HomeContainer';
import ButtonAppBar from './Components/Containers/ButtonAppBar';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import About from './Components/Containers/About';
import HskGame from './Components/Containers/HskMultiGame';
import Dictionary from './Components/Containers/Dictionary';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/multiHsk1" element={<HskGame />} />
          <Route path="/multiHsk2" element={<HskGame />} />
          <Route path="/multiHsk3" element={<HskGame />} />
          <Route path="/multiHsk4" element={<HskGame />} />
          <Route path="/multiHsk5" element={<HskGame />} />
          <Route path="/multiHsk6" element={<HskGame />} />
          <Route path="/dictionary1" element={<Dictionary />} />
          <Route path="/dictionary2" element={<Dictionary />} />
          <Route path="/dictionary3" element={<Dictionary />} />
          <Route path="/dictionary4" element={<Dictionary />} />
          <Route path="/dictionary5" element={<Dictionary />} />
          <Route path="/dictionary6" element={<Dictionary />} />
        </Routes>
    </div>
  );
}

export default App;
