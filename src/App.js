import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<h1 className="text-center text-yellow-600">This is just for testing</h1>
}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
