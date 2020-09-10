import React from 'react';

import Header from './components/Header';
import BgForm from './components/BgForm';
import Welcome from './components/Welcome';
import Mosaico from './components/Mosaico';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
  <>
   <Header/>
   <BgForm/>
   <Welcome/>
   <Mosaico/>
   <Footer/>
  </>
  );
}

export default App;
