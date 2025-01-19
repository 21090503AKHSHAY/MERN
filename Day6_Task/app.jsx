import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Card />
      <Header/>
      <Footer />
    </div>
  );
}
export default App;