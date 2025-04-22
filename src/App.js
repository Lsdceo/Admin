import React from 'react';
import { ThemeProvider } from './components/context/ThemeContext';
import { Admin } from './components/pages/Admin/Admin.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Admin />
    </ThemeProvider>
  );
}

export default App;
