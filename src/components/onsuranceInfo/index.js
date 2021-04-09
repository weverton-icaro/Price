import React, {useState} from 'react';
import {OnboardStyle} from './style';

function OnsuranceOnboard(){

  // hours used daily

  const [ setHoursUsed] = useState('')
  const hoursUsedDaily = (e) => {
    setHoursUsed(e.target.value);
  }

  return(
    <>
      <OnboardStyle>
        <div className="form-step">
          <div className="form-step__header">
            <h2 className="form-step__title">Entender seu uso Onsurance</h2>
          </div>

          <div className="text-content">
            <p>O Onsurance é tarifado por minuto. E você liga-desliga seu Onsurance quando quiser e paga só nos momentos em que a proteção está ligada!</p>
        
            <h4>Imagine o seguinte cenário:</h4>
            <p>Você possui garagem em casa, um local protegido, pode deixar seu Onsurance desligado. Economia pelo tempo em que o veículo está parado lá. Da mesma forma na garagem do trabalho, shopping ou outra. Enquanto o veículo está estacionado o Onsurance pode ficar desligado. </p>
          </div>

          <h4 className="mt-5 mb-3 title-section">
            Você só liga o Onsurance quando precisar de verdade. Praticidade e economia na palma da sua mão!
            <sup className="text-danger">*</sup>
          </h4>

          <div className="row mb-4" id="hasGarageHomeTop">
            <div className="col-md-6 col-12">
              <div className="form-input">
                <label htmlFor="garageHome">Possui garagem em casa?</label>
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="boxRadio">
                      <input type="radio" id="garageHomeYes" value="sim"  name="garageHome" className="custom-control-input"/>
                      <label className="hasGarageHome" htmlFor="garageHomeYes">Sim</label>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="boxRadio">
                      <input type="radio" id="garageHomeNo" value="não" name="garageHome" className="custom-control-input"/>
                      <label className="hasGarageHome" htmlFor="garageHomeNo">Não</label>
                    </div>
                  </div>
                </div>
                <small id="garageHomeHelp" className="form-text text-muted">
                    Se seu carro fica na garagem de casa, selecione a opção Sim. Caso contrário, escolha Não.
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12" id="hasGarageWorkTop">
            <div className="form-input">
              <label htmlFor="garageWork">Possui garagem no trabalho?</label>
              <div className="row">
                <div className="col-md-4 col-6">
                  <div className="boxRadio">
                    <input type="radio" id="garageWorkYes" value="sim" name="garageWork" className="custom-control-input"/>
                    <label className="hasGarageWork" htmlFor="garageWorkYes">Sim</label>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="boxRadio">
                    <input type="radio" id="garageWorkNo" value="não"  name="garageWork" className="custom-control-input"/>
                    <label className="hasGarageWork" htmlFor="garageWorkNo">Não</label>
                  </div>
                </div>
              </div>
              <small id="garageWorkHelp" className="form-text text-muted">
                Se seu carro fica na garagem do trabalho, selecione a opção Sim. Caso contrário, (incluíndo não trabalha) escolha Não.
              </small>
            </div>
          </div>

          <div className="text-content mb-4">
            <p className="m-0">Levando em consideração os cenários apresentados acima, quantas horas por dia estimma que o Onsurance ficará ligado?</p>
          </div>

          <div className="row mb-4" id="hoursUsedDailyTop">
            <div className="col">
                <div className="form-input">
                  <label htmlFor="hoursUsedDaily">Horas de uso diário com o Onsurance</label>
                  <input type="number" min="1" max="24" className="form-control"  id="hoursUsedDaily" />
                  <small id="passwordHelpBlock" className="form-text text-muted">
                      Digite quantas horas diárias você estima que deixaria o Onsurance ligado. Pense num uso médio da semana. Considere menos de 1 hora se você não usa o carro todo dia.
                  </small>
                </div>
            </div>
          </div>

          <div className="row mb-4 valueUseDaily">
            <div className="valueUseDaily-col col-md-4">
              <div>
                <h5>Horas / Semana:</h5>
                <p>{(hoursUsedDaily * 7)}h</p>
              </div>
            </div>
            <div className="valueUseDaily-col col-md-4">
              <div>
                <h5>Horas / Mês:</h5>
                <p>{(hoursUsedDaily * 30)}h</p>
              </div>
            </div>
            <div className="valueUseDaily-col col-md-4">
              <div>
                <h5>Horas / Ano:</h5>
                <p>{(hoursUsedDaily * 365)}h</p>
              </div>
            </div>
          </div>

          <div className="text-content mb-4">
            <div className="row onboard">
              <div className="col-md-6 mb-4">
                <h4>Onsurance Onboard:</h4>
                <p className="mb-0">Todos os clientes do Onsurance-auto precisam ter o dispositivo Onsurance Onboard instalado em seus veículos. Custo de instalação já incluso no serviço. Seu carro conectado com ainda mais segurança!</p>
              </div>
              <div className="col-md-6 onboard-image">
                <img src="img/onsurance-onboard.png" alt="Dispositivo"/>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h4>O valor de R$ 39,90 será abatido mensalmente dos seus créditos.</h4>
            <div className="custom-control custom-checkbox custom-control-inline mt-3 mb-3">
              <input type="checkbox" name="onsuranceOnboard" id="onsuranceOnboard" className="custom-control-input"/>
              <label htmlFor="onsuranceOnboard" className="custom-control-label">Estou ciente!</label>
            </div>
            <p className="mb-0">
            Obs. O dispositivo chegará na sua casa e você receberá as orientações para levar na oficina parceira para instalação. Não se preocupe, seu Onsurance passa a valer imediatamente após a aprovação da sua documentação online.
            </p>
          </div>

        </div>
      </OnboardStyle>
    </>
  )
}

export default OnsuranceOnboard;