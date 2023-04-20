import React from 'react';
import './App.css';

import VerificationPage from './componenets/verificationpage';
import HomePage from './componenets/home';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<VerificationPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;