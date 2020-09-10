import React from 'react';


import mosaico1  from '../../assets/imagens/mosaico1.jpg';
import mosaico2  from '../../assets/imagens/mosaico2.jpg';
import mosaico3  from '../../assets/imagens/mosaico3.jpg';
import mosaico4  from '../../assets/imagens/mosaico4.jpg';


import './style.css';


export default function Mosaico(){
  return(
  <>
   <section className="mosaico">
     <div className="container">
      <div className="mosaico-item">
        <div className="img">
          <img src={mosaico1} alt="imagem do mosaico1"/>
        </div>
        <div className="mosaico-content">
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .</p>
        </div>
      </div>{/*mosaico-item*/}

      <div className="mosaico-item item2">
        <div className="img ">
          <img src={mosaico2} alt="imagem do mosaico1"/>
        </div>
        <div className="mosaico-content">
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .</p>
        </div>
      </div>{/*mosaico-item*/}

      <div className="mosaico-item">
        <div className="img">
          <img src={mosaico3} alt="imagem do mosaico1"/>
        </div>
        <div className="mosaico-content">
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .</p>
        </div>
      </div>{/*mosaico-item*/}

      <div className="mosaico-item item2">
        <div className="img ">
          <img src={mosaico4} alt="imagem do mosaico1"/>
        </div>
        <div className="mosaico-content">
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .</p>
        </div>
      </div>{/*mosaico-item*/}


      
     </div>{/*container*/}
   </section>

  </>
  )
}