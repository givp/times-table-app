// App.js
import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import TimesTableGame from './TimesTableGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <TimesTableGame />
      <Analytics />
    </div>
  );
}

export default App;