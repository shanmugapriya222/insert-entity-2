import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-movie" element={<AddMovie />} />
    </Routes>
  );
}

export default App;