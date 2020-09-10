import React from 'react';

import './style.css'
export default function BgForm(){
  return(
  <>
    <section className="bg-form">
      <div className="form">
        <h2> Pode Acreditar, por dentro é ainda mais bonito.</h2>
        <form>
          <fieldset>
            <div className="input campo">
              <label htmlFor="nome"> Nome Completo</label>
              <input type="text" name="nome" placeholder="Informe o seu nome completo"/>
            </div>{/*input*/}

            <div className="input">
              <label htmlFor="email"> E-mail</label>
              <input type="text" name="nome" placeholder="Informe o seu email"/>
            </div>{/*input*/}

            <div className="input">
              <label htmlFor="telefone"> Telefone </label>
              <input type="text" name="nome" placeholder="Informe o seu telefone"/>
            </div>{/*input*/}

            <button> enviar </button>

            <span> Campos Obrigátorios</span>
          

          </fieldset>
        </form>



      </div>
      

    </section>{/*bg-form*/}
  </>
  )

}