import React from 'react';

import logo from '../../assets/img/logo.png'
import './style.css';

export default function Header(){
  return( 
    <>
     <header>
       <div class="container">
         <img src={logo} alt="logo da danki code" class="img"/>
         

       </div>{/* container*/}
     </header>
    </>
  )
}