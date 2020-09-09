import React from 'react';

import './style.css';

export default function BgForm(){
  return(
    <>
    <section class="bg-form">
      <div class="container">
        <div class="left-content">
          <ul>
            <li> Lorem ipsum silor domor amet </li>
            <li> Lorem ipsum silor domor amet </li>
            <li> Lorem ipsum silor domor amet </li>
            <li> Lorem ipsum silor domor amet </li>
          </ul>
        </div>{/*left-content*/}

        <div class="right-content">
          <h2> Preencha o formulário e inicie sua caminhada para virar um WebMaster</h2>
          <form>
            <fieldset>
              <div class="input">
                <label> Nome </label>
                <input type="text" name="nome" placeholder="Informe o seu nome "/>
              </div>{/**input */}

              <div class="input">
                <label> Email</label>
                <input type="text" name="email" placeholder="Informe o seu nome "/>
              </div>{/**input */}

              <div class="input">
                <label> Telefone </label>
                <input type="text" name="telefone" placeholder="Informe o seu nome "/>
              </div>{/**input */}
            </fieldset>
            <button> entrar</button>
            <span> Campos Obrigatórios </span>
            
          </form>
        </div>{/*right-content*/}
   
      </div>{/*container*/}
    </section>{/* bg-from */}
    </>


  );
}