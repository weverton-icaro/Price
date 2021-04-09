import React from 'react';
import {HeaderStyle} from './style';

function Header(){
  return (
    <>
      <HeaderStyle>
        <div className="header-form">
          <div className="logo">
            <a href="./">
              <img src="img/logo.svg" alt="logo"/>
            </a>
          </div>
          <div className="header-form__content">
            <p>Melhor que seguro tradicional. É seguro sob demanda! Liga/desliga, você paga somente <br/>quando usa e economiza quando seu veículo está em segurança.</p>
            <p>Descubra agora sua economia em 4 passos:</p>
          </div>
        </div>
      </HeaderStyle>
    </>
  )
}

export default Header;