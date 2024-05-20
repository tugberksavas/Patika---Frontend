import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ClassesSection from './Components/ClassesSection';
import Box from './Components/Box';
import TrainerSection from './Components/TrainerSection';
import ReviewSection from './Components/ReviewSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import BmiSection from './Components/BmiSection';
import Equipment from './Components/Equipment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Box />
      <ClassesSection />
      <BmiSection />
      <TrainerSection />
      <Equipment />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
