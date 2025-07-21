import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authors from './pages/Authors';
import AuthorDetail from './pages/AuthorDetail';
import User from './pages/User';
import Write from './pages/Write';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:id" element={<AuthorDetail />} />
        <Route path= "/user" element={<User />} />
        <Route path= "/write" element={<Write/>}/>
      </Routes>
    </Router>
  );
}

export default App;
