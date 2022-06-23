import logo from './logo.svg';
import './App.css';
import NewsContainer from './Components/Containers/NewsContainer';
import AppBar from './Components/Containers/ButtonAppBar';
import ButtonAppBar from './Components/Containers/ButtonAppBar';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import About from './Components/Containers/About';
function App() {
  
  return (
    <div className="App">
      <ButtonAppBar />
        <Routes>
          <Route path="/" element={<NewsContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
