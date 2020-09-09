import React from 'react';

import './style.css';

import  icon from '../../assets/img/icon.png';
export default function Card(){
  return(
    <>
    <div class="item">
      <img src={icon} alt="imagem de um icone" class="img"/>
      <h3> Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum orci eget magna semper varius. Aenean sit amet interdum ipsum, ac volutpat nisl. Integer eget quam imperdiet, posuere odio et, faucibus ante.</p>
    </div>
    </>
  )
}