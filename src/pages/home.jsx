import React, { useState } from 'react';
import About from '../components/About/About';
import Banners from '../components/Banner/Banner';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Contact from '../components/Contact/contact';
import Gaps from '../components/gaps/gaps';
import Footer from '../components/Footer/Footer';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id='home' style={{ width: '100%' }}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Banners />
      <Menu />
      <Gaps />
      <About />
      <Gaps />
      <Contact />
      <Gaps />
      <Footer />
    </div>
  );
};

export default Home;
