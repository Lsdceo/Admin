import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ThemeContext  from './components/context/ThemeContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Adicione isso para sincronizar o tema com a classe do body
const themeContext = React.createContext();
document.body.classList.add('light-mode');

export const useTheme = () => {
  const context = React.useContext(themeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};