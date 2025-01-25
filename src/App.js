import logo from './logo.svg';
import './App.css';
import Weather from "./components/weather";
import SimpleMap from './components/map';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
          <Route path="/" element={<Weather />} />
          <Route path="/map" element={<SimpleMap />} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
