import React from 'react';
import {AcessoriesStyle} from './style';

function Acessories(){
  return (
    <>
      <AcessoriesStyle>
        <div className="form-step">
          <div className="form-step__header">
            <h2 className="form-step__title">Acessórios</h2>
          </div>

          <div className="text-content mb-4">
            <p>Na Onsurance a <strong>Assistência 24h*</strong> é uma assinatura anual.</p>
            <p>Você terá direito a 3 utilizações com 300 km de rodagem (ida/volta) para os serviços:</p>

            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>Guincho</li>
                  <li>Reboque</li>
                  <li>Chaveiro</li>
                  <li>Táxi/Uber</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>PaneSeca/ Mecânica/ Elétrica</li>
                  <li>Troca de pneus</li>
                  <li>Guarda veículo</li>
                  <li>Transmissão de mensagens</li>
                </ul>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-input">
                  <p > * A assinatura da Assisência 24h custa R$ 249,00/ano.</p>
                  <h4 className="mb-4 mt-2">Deseja inlcuir a assistência 24h?</h4>
                  <div className="row">
                    <div className="col-md-2 col-6">
                      <div className="boxRadio">
                        <input type="radio" name="ass24h" id="ass24hYes" className="custom-control-input"/>
                        <label htmlFor="ass24hYes" className="ass24hlabel" >SIM</label>
                      </div>
                    </div>
                    <div className="col-md-2 col-6">
                      <div className="boxRadio">
                        <input type="radio" name="ass24h" id="ass24hNo" className="custom-control-input"/>
                        <label htmlFor="ass24hNo" className="ass24hlabel" >NÃO</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="mb-3">Customizar cobertura para terceiros?</h4>

            <div className="text-content mb-4">
              <p>Nossa cobertura padrão para danos materiais em terceiros é de R$ 30.000,00.</p>
              <p>Caso você queira um valor maior, pode ajustar na barra abaixo. Lembrando que maiores valores incidirão em custos maiores para o seu Onsurance.</p>
            </div>

            <div className="row" id="thirdPartyCoverageTop">
              <div className="col">
                <div className="form-input">
                  <label htmlFor="thirdPartyCoverage">Arraste para selecionar um valor</label>
                  <input type="range" id="thirdPartyCoverage" className="custom-range" min="30" max="150" step="10" />
                  <h4 className="text-center thirdPartyCoverage">R$ 30.000,00</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </AcessoriesStyle>
    </>
  )
}

export default Acessories;