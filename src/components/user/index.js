import React from 'react';
import {UserForm} from './style';



function User(){
  

  return(
    <>
      <UserForm>
        <div className="form-step">
          <div className="form-step__header">
            <h2 className="form-step__title">Sobre você</h2>
          </div>

          <div className="text-content mb-4">
            <p className="mb-0">
              Seu interesse na inovação é o que nos move... <br/>
              Precisamos de algumas informações sobre você para prestar um atendimento melhor.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-input">
                <label htmlFor="firstName">Qual seu nome?</label>
                <input type="text" className="form-control" id="firstName"/>
                <small className="form-text text-muted" id="passwordHelpBlock">
                  Digite seu primeiro nome aqui.
                </small>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-input">
                <label htmlFor="firstName">Qual seu sobrenome?</label>
                <input type="text" className="form-control" id="lastName"/>
                <small className="form-text text-muted" id="passwordHelpBlock">
                  Digite seu sobrenome aqui.
                </small>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-input">
                <label htmlFor="email">Qual é o seu email?</label>
                <input type="email" className="form-control" id="email" placeholder="Digite o seu melhor e-mail para receber p resultado da cotação." />
                <small id="passwordHelpBlock" className="form-text text-muted" >
                  Digite aqui seu email para que possamos mandar essa cotação pra você quando terminar.
                </small>
                <small id="passwordHelpBlock" class="form-text text-danger" >
                    Você quis dizer <button type="button" className="btn btn-link">{}</button> ?
                </small>
                <small id="passwordHelpBlock" style={{ margin: 0}} class="form-text text-danger">
                  Falha ao verificar o seu email, verifique se o email é valido.
                </small>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-input">
                <label htmlFor="phone">Celular:</label>
                <input type="tel" className="form-control" id="phone"/>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-input">
                <label htmlFor="zipCode">CEP</label>
                <input type="text" className="form-control" id="zipCode" />
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Digite o CEP da sua residência.
                </small>
              </div>
            </div>
          </div>
        </div>
      </UserForm>
    </>
  );
}

export default User;