import React from 'react'
import './App.css';

import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="content-container">
          <About/>
          <Projects/>
          <Contact/>
        </div>
        
      </div>
    
  );
}

export default App;
