import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SwipperPage from './Components/SwipperPage/SwipperPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/swipper-page" element={<SwipperPage/>}/>
        </Routes>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
