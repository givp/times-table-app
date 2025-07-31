// App.js
import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimesTableGame from './TimesTableGame';
import Privacy from './components/Privacy';
import Support from './components/Support';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <TimesTableGame />
              <Footer />
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;