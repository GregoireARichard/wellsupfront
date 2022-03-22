import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SwipperPage from './Components/SwipperPage/SwipperPage';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Parameters from './Components/Parameters/Parameters';
import Explanations from './Components/Explanations/Explanations';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/swipper-page" element={<SwipperPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/explanations" element={<Explanations/>}/>
          <Route path="/parametres" element={<Parameters/>}/>
        </Routes>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
