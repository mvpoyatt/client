import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import NewEntryPage from './pages/new-entry-page/NewEntryPage';
import ReadEntryPage from './pages/read-entry-page/ReadEntryPage';
import LandingPage from './pages/landing-page/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing Page</Link>
            </li>
            <li>
              <Link to="/new-entry">New Entry</Link>
            </li>
            <li>
              <Link to="/read-entry">Read Entries</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/new-entry" element={<NewEntryPage />} />
          <Route path="/read-entry" element={<ReadEntryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
