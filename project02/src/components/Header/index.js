import React from 'react';

import logo1 from '../../assets/imagens/logo1.png';
import logo2 from '../../assets/imagens/logo2.png';
import './style.css';
export default function Header(){
  return(
   <>
    <header>
      <div className="container">
        <div className="imgs">
          <img src={logo1} alt="Imagem da logo1"/>
          <img src={logo2} alt="Imagem da logo2"/>
        </div>{/*imgs*/}
      </div>{/*container*/}
    </header>
   </>
  )



}