
import "./App.css";
import React from 'react';
import SideNavbar from './Components/SideNavbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import RecordingPage from "./Components/Recordings";

const App: React.FC = () => {
    return (
        <Router>
            <SideNavbar />
            <Routes>
            <Route path="/recording" element={<RecordingPage />} />
                </Routes>
        </Router>
    );
};

export default App;
