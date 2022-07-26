import React from 'react';
import './App.css';
import Featured from './component/Featured';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Signup from './component/Signup';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Featured />
     <Signup />
     <Footer />
    </div>
  );
}

export default App;
