import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './Components/SideNavbar';
import RecordingPage from './Components/Recordings';

const App: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    return (
        <Router>
            {showNavbar && <SideNavbar />}
            <Routes>
                <Route path="/recording" element={<RecordingPageWithNoNavbar />} />
            </Routes>
        </Router>
    );

    function RecordingPageWithNoNavbar() {
        return (
            <div>
                <RecordingPage />
            </div>
        );
    }
};

export default App;
