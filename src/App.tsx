import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from './Components/SideNavbar';
import Dashboard from './Components/Dashboard';
import SubContainer from './Components/SubContainer';
import RecordingPage from './Components/Recordings';
import "./App.css";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SideNavbar />}>
                    <Route index element={<Dashboard />} />
                    <Route path="real-estate" element={<div>Real Estate Content</div>} />
                    <Route path="mortgage" element={<SubContainer />} />
                    <Route path="solar" element={<div>Solar Content</div>} />
                    <Route path="insurance" element={<div>Insurance Content</div>} />
                    <Route path="steel" element={<div>Steel Content</div>} />
                    <Route path="automotive" element={<div>Automotive Content</div>} />
                </Route>
                <Route path="/recording" element={<RecordingPage />} />
            </Routes>
        </Router>
    );
};

export default App;
