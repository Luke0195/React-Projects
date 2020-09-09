import React from 'react';

import Header from './components/Header';
import BgForm from './components/BgForm';
import  Intro from './components/Intro';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';

export default function App(){
  return(
  <>
    <Header/>
    <BgForm/>
    <Intro/>
    <Cards/>
    <Footer/>
  </>
  )
}
