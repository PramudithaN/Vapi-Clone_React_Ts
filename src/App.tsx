
import "./App.css";
import React from 'react';
import SideNavbar from './Components/SideNavbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideNavbar />} />
       
      </Routes>
    </Router>
  );
}

export default App;
