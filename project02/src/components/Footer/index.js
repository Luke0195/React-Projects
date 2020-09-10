import React from 'react';

import logo1 from '../../assets/imagens/logo1.png';
import './style.css';

export default function Footer(){
 return(
   <footer>
     <div className="container">
       <div className="footer-content">
         <img src={logo1} alt="Imagem de uma logo"/>
       </div>
     </div>
   </footer>
 )
}