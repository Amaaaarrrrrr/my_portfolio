import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Your Name | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;