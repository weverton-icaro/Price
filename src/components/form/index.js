import React, {useState, useEffect, useCallback} from 'react';
import GetDataFipe from './fipe';
import { api } from '../../services/Api';
import { Modal } from '../modal';
import OnsuranceOnboard from '../onsuranceInfo';
import Acessories from '../acessories';
import User from '../user';
import {
  FormContainer,
  FormStep,
  LoadingSection,
  FormGroup,
  BoxVehycles,
  VehycleInfoContainer,
  UsageCarType,
  AppDriverOptions,
  MotorcycleOptions,
  PickupOptions,
  VucOptions,
}from './style.js';


function Formulary() {

  //Usage type car
  const [carDriver, setCarDriver] = useState(false);

  function Car(){
    setCarDriver(prev => !prev)
    setMoto(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
  }

  function Passeio(){
    setAppDriver(false)
    setTaxiDriver(false)
    setMoto(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
  }
  const [appDriver, setAppDriver] = useState(false);
  function Uber(){
    setAppDriver(prev => !prev)
    setTaxiDriver(false)
    setMoto(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
  }

  const [taxiDriver, setTaxiDriver] = useState(false);
  function Taxi(){
    setTaxiDriver(prev => !prev)
    setAppDriver(false)
    setMoto(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
  }

  const [moto, setMoto] = useState(false);
  const [down250Cc, setDown250Cc] = useState(false);
  const [up250Cc, setUp250Cc] = useState(false);
  function Motorcycle(){
    setMoto(prev => !prev)
    setCarDriver(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
    setAppDriver(false)
    setTaxiDriver(false)
  }

  function DownCc(){
    setDown250Cc(prev => !prev)
    setUp250Cc(false)
    setCarDriver(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
    setAppDriver(false)
    setTaxiDriver(false)
  }

  function UpCc(){
    setUp250Cc(prev => !prev)
    setDown250Cc(false)
    setCarDriver(false)
    setPickup(false)
    setVuc(false)
    setTrunkTruck(false)
    setAppDriver(false)
    setTaxiDriver(false)
  }

  const [pickup, setPickup] = useState(false);
  function Caminhonete(){
    setPickup(prev => !prev)
    setAppDriver(false)
    setTaxiDriver(false)
    setCarDriver(false)
    setMoto(false)
    setVuc(false)
    setTrunkTruck(false)
  }

  //Trunk Truck or Truck
  const [vuc, setVuc] = useState(false);
  const [trunkTruck, setTrunkTruck] = useState(false);
  function Truck(){
    setVuc(prev => !prev)
    setAppDriver(false)
    setCarDriver(false)
    setMoto(false)
    setPickup(false)
    setTaxiDriver(false)
  }

  function SemBau(){
    setTrunkTruck(false)
  }

  //Active Insurance
  const [insuranceYes, setInsuranceYes] = useState(false);
  function SemSeguro(){
    setInsuranceYes(false)
  }

  //Show Modal
  const [showModal, setShowModal] = useState(false);
  const [{nacional, importado}, setTypeModal] = useState({
    nacional:'',
    importado:''
  }); 

  const openModal = () => {
    setShowModal(prev => !prev)
  } 

  const valorNacional = () => {
    setTypeModal({
      nacional: 'Nacional'
    })
  }

  const valorImportado = () => {
    setTypeModal({
      importado: 'Importado'
    })
  }

  
  
  const [type, setType] = useState('');
  
  function onChangeValue(event){
    setType(event.target.value);
  }

  console.log(type)

  useEffect(() => {
    handleBrands()
    getModelsVehicles()
  }, [])

  

  const[brand, setBrand] = useState([])
  const [selectedBrand, setSelectedBrand] = useState(null)
  console.log("aqui", selectedBrand)
  const [model, setModel] = useState([])
  const [selectedModel, setSelectedModel] = useState(null)

  // const requests = {
  //   fecthTypesVehicles: `${type}/marcas.json`,
  //   fetchModelsVehicles: `${type}/veiculos/${brand.id}.json`
  // }

  async function handleBrands(){
    const response = await api.get(`carros/marcas.json`)
    console.log('Marcas', response.data);
    setBrand(response.data);
  }

  function handleSelectOptions(selectOption){
    setSelectedBrand(selectOption.id)
    console.log(selectOption.id)
  }

  
  async function getModelsVehicles(){
    console.log('TESTE', selectedBrand)
    if(selectedBrand !== ''){
      const response = await api.get(`carros/veiculos/${selectedBrand}.json`)
      console.log('TESTE 2', selectedBrand)
      console.log('Modelos', response.data);
      setModel(response.data);
    }
  }
  
  function handleSelectOptionsModel(selectOption){
    setSelectedModel(selectOption.id)
    console.log(selectOption.id)
  }

  // const getModelsVehicles = useCallback(
  //   async() => {
  //     const response = await api.get(`carros/veiculos/${selected}.json`)
  //     console.log('Modelos', response.data);
  //     setModel(response.data);

  //     console.log(selected)
  //   },
  //   [selected],
  //)

  return (
    <>
      <FormContainer>
        <p className="mt-4" hidden={true} id="botDetector">
          Nosso ReCaptcha detectou que você possa ser um bot, caso você não seja um bot, entre em contato conosco e infome o ocorrido.
        </p>
        

        <div className="quote-form" id="noFilho">
          <div className="quote-form__header"></div>

          <div className="quote-form__body">
            <form id="formApp">

              <LoadingSection>
                <div className="loading">
                  <div className="loaderball">
                    <div className="spinner">
                    </div>
                  </div>
                </div>
              </LoadingSection>

              <FormStep>
                <h2 className="form-step__title">Dados do Veículo</h2>

                <FormGroup>
                  <h4 id="vehicleTypeTop"> Tipo de veículo <sup className="text-danger">*</sup></h4>

                  <BoxVehycles onChange={onChangeValue}>
                    <div className="col-md-3 col-6">
                      <div className="boxRadio">
                        <input type="radio" name="vehicleType" id="vehicleTypeCar" value="carros" onClick={Car}/>
                        <label htmlFor="vehicleTypeCar" className="vehicleTypelabel">
                          <img src="img/carro.png" alt="carro" />
                          Carro
                        </label>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="boxRadio">
                        <input type="radio" name="vehicleType" id="vehicleTypeMoto" value="motos" onClick={Motorcycle} />
                        <label htmlFor="vehicleTypeMoto" className="vehicleTypelabel">
                          <img src="img/moto.png" alt="moto" />
                          Moto
                        </label>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="boxRadio">
                        <input type="radio" name="vehicleType" id="vehicleTypePickup" value="caminhonetes" onClick={Caminhonete} />
                        <label htmlFor="vehicleTypePickup" className="vehicleTypelabel">
                          <img src="img/caminhonete.png" alt="pickup" />
                          Caminhonete
                        </label>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="boxRadio">
                        <input type="radio" name="vehicleType" id="vehicleTypeVUC" value="caminhoes" onClick={Truck} />
                        <label htmlFor="vehicleTypeVUC" className="vehicleTypelabel">
                          <img src="img/vuc.png" alt="VUC" />
                          V.U.C
                        </label>
                      </div>
                    </div>

                    <small id="vehicleTypeHelp" className="form-text text-muted">
                      Selecione uma opção.
                    </small>
                  </BoxVehycles>


                  {carDriver === true && (
                    <>
                      <UsageCarType>
                          <div className="col-12-title">
                            <h5 className="title-section mt-3"> Como ele será usado?</h5>
                          </div>
                          <div className="col-12">
                            <div className="custom-constrol custom-radio custom-control-inline">
                              <input type="radio" name="usageType" id="forCarRide2" onClick={Passeio} />
                              <label htmlFor="forCarRide2" className="custom-control-label">Para passeio</label>
                            </div>
                            <div className="custom-constrol custom-radio custom-control-inline">
                              <input type="radio" name="usageType" id="forTaxi" onClick={Taxi} />
                              <label htmlFor="forTaxi" className="custom-control-label">Para táxi</label>
                            </div>
                            <div className="custom-constrol custom-radio custom-control-inline">
                              <input type="radio" name="usageType" id="forUber" onClick={Uber} />
                              <label htmlFor="forUber" className="custom-control-label">Para motorista de aplicativo</label>
                            </div>
                          </div>
                      </UsageCarType>
                    </>
                  )}

                  {taxiDriver === true && (
                    <>
                        <div className="row mb-4">
                          <div className="col-12 text-content">
                            <h3 className="text-center">Condições especiais para Táxi</h3>

                            <ul>
                              <li>Cobertura até 100% FIPE confome a nota fiscal do seu veículo.</li>
                              <li>Rastreamento 24h Dedicado.</li>
                              <li>Botão de pânico para emergências.</li>
                              <li>Renda garantida até R$2.500,00 por até 90 dias (diárias).</li>
                              <li>Pagamento facilitado por boleto parcelado (fale conosco no chat ou WhatsApp).</li>
                            </ul>
                          </div>
                        </div>
                    </>
                  )}
                  

                  {appDriver === true &&  (
                    <>
                      <AppDriverOptions>
                        <div className="row mb-5">
                          <div className="col-12">
                            <h3 className="title-section mt-3">Selecione o aplicativo</h3>
                          </div>

                          <div className="col-12-custom ">
                            <div className="custom-control custom-checkbox custom-control-inline">
                              <input type="checkbox" name="uber" id="uber" className="custom-control-input" />
                              <label htmlFor="uber" className="custom-control-label">Uber</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                              <input type="checkbox" name="99" id="99" className="custom-control-input" />
                              <label htmlFor="99" className="custom-control-label">99</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                              <input type="checkbox" name="cabify" id="cabify" className="custom-control-input" />
                              <label htmlFor="cabify" className="custom-control-label">Cabify</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                              <input type="checkbox" name="outros" id="outros" className="custom-control-input"/>
                              <label htmlFor="outros" className="custom-control-label">Outros</label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="row mb-5">
                          <div className="col-12">
                            <h5 className="title-section mt-3">Coloque o nome do aplicativo</h5>
                          </div>
                          <div className="col-12">
                            <div className="form-input">
                              <input type="text" className="form-control" id="nameApp" placeholder="Separe por virgulas se tiver mais de um aplicativo" />
                            </div>
                          </div>
                        </div>

                        <div className="row mt-4">
                          <div className="col-12 text-content">
                            <h3 className="text-center m-0">Condições especiais para Motoristas de Aplicativos</h3>
                            <p className="text-center">(Uber, 99, Cabify e outros)</p>

                            <ul>
                              <li>Rastreamento 24h Dedicado.</li>
                              <li>Botão de pânico para emergências.</li>
                              <li>Carro reserva (na mesma categoria do seu) para trabalho com aplicativo enquanto reparamos o seu veículo.</li>
                              <li>pagamento facilitado por boleto parcelado (fale conosco no chat ou WhatsApp).</li>
                            </ul>
                          </div>
                        </div>
                      </AppDriverOptions>
                    </>
                  )}

                  {moto === true && (
                    <>
                      <MotorcycleOptions>
                        <div className="row mb-5">
                          <div className="col-12-title">
                            <h5 className="title-section mt-3">Quantas cilindradas tem a sua moto?</h5>
                          </div>
                          <div className="col-12">
                            <div className="custom-control custom-radio cunstom-control-inline">
                              <input type="radio" className="custom-control-input" id="abaixode250cc" name="customRadio" value={down250Cc} onClick={DownCc} />
                              <label htmlFor="abaixode250cc" className="custom-control-label">Abaixo de 250cc</label>
                            </div>
                            <div className="custom-control custom-radio cunstom-control-inline">
                              <input type="radio" className="custom-control-input" id="acimade250cc" name="customRadio" value={up250Cc} onClick={UpCc} />
                              <label htmlFor="acimade250cc" className="custom-control-label">Acima de 250cc</label>
                            </div>
                          </div>
                        </div>
                      </MotorcycleOptions>
                    </>
                  )}

                  {pickup === true && (
                    <>
                      <PickupOptions>
                        <div className="row mb-5">
                          <div className="col-12-title">
                            <h5 className="title-section mt-3">Como ela será usada?</h5>
                          </div>
                          <div className="col-12">
                            <div className="custom-control custom-radio custom-control-inline">
                              <input type="radio" className="custom-control-input" id="forCarRide" name="customRadio" />
                              <label htmlFor="forCarRide" className="custom-control-label">Para passeio</label>
                            </div>
                          
                            <div className="custom-control custom-radio custom-control-inline">
                              <input type="radio" className="custom-control-input" id="utilitarioCam" name="customRadio" />
                              <label htmlFor="utilitarioCam" className="custom-control-label">Utilitário</label>
                            </div>
                          </div>
                        </div>
                      </PickupOptions>
                    </>
                  )}

                  {vuc === true && (
                    <>
                      <VucOptions>
                          <div className="row mb-4">
                            <div className="col-12-title">
                              <h5 className="title-section mt-3">Deseja incluir o baú?</h5>
                            </div>
                            <div className="col-12">
                              <div className="custom-control custom-radio cunstom-control-inline">
                                <input type="radio" className="custom-control-input" id="trunkTruckOn" name="customRadio" onClick={() => setTrunkTruck(prevState => !prevState)} />
                                <label htmlFor="trunkTruckOn" className="custom-control-label">SIM</label>
                              </div>
                              <div className="custom-control custom-radio cunstom-control-inline">
                                <input type="radio" className="custom-control-input" id="trunkTruckOff" name="customRadio" onClick={SemBau}/>
                                <label htmlFor="trunkTruckOff" className="custom-control-label">NÃO</label>
                              </div>
                            </div>
                          </div>

                          {trunkTruck === true && (
                            <>
                              <div className="row mb-5">
                                <div className="col-12">
                                  <h5 className="title-section mt-3">Coloque o valor do baú</h5>
                                </div>

                                <div className="col-12-value">
                                  <div className="input-group">
                                    <div className="input-group-text">R$</div>
                                    <input type="number" maxLength="14" step="0.01" className="form-control" id="trunckTruckValue" placeholder="2.500,00" value={null}/>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                      </VucOptions>
                    </>
                  )}

                  

                  <input type="text" id="g-recaptcha-response" className="g-recaptcha-response" hidden={true} />

                  <VehycleInfoContainer>
                    <div className="row">
                      <div className="col-md-6" id="brandTop">
                        <div className="form-input">
                          <label htmlFor="vehicleBrand">Marca do veículo:</label>
                          <GetDataFipe
                            key={JSON.stringify(brand.id)}
                            options={brand}
                            onChange={handleSelectOptions}
                          />
                          <small className="form-text text-muted">
                            Selecione a marca do seu veículo.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6" id="vehicleModelTop">
                        <div className="form-input">
                          <label htmlFor="vehicleModel">Modelo do veículo:</label>
                          <GetDataFipe 
                            key={'1'}
                            options={model}
                            value={selectedModel}
                            onChange={handleSelectOptionsModel}
                          />
                          <small className="form-text text-muted">
                            Selecione o modelo do seu veículo.
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6" id="yearTop">
                        <div className="form-input">
                          <label htmlFor="vehicleYear">Ano do veículo:</label>
                          <input type="number" className="form-control" id="vehicleYear" placeholder="2016"/>
                          <small className="form-text text-muted">
                            Selecione o ano do seu veículo.
                          </small>
                        </div>
                      </div>

                      <div className="col-md-6" id="factoryTop">
                        <div className="form-input">
                          <label htmlFor="factoryHelp">
                            Fabricação:
                          </label>
                          <input
                            className="form-control"
                            id="factory"
                            datatoggle="modal"
                            datatarget="#modalFabricacao"
                            readOnly
                            placeholder="Coloque a fabricação"
                            value={nacional || importado}
                            onClick={openModal}
                          />
                          <Modal showModal={showModal} setShowModal={setShowModal} handleNacional={valorNacional} handleImportado={valorImportado} />
                          <small id="factoryHelp" className="form-text text-muted">
                            Selecione a opção de fabricação do seu veículo
                          </small>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-check mb-4 mt-2">
                          <input type="checkbox" className="form-check-input" id="withOutPlate" style={{height: 15}}/>
                          <label className="form-check-label" htmlFor="withOutPlate" style={{fontSize: 12}}>
                            Veículo novo
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12" id="vehiclePlateTop">
                        <div className="form-input plateVehycle">
                          <label htmlFor="vehiclePlate">Placa do veículo:</label>
                          <input type="text" className="form-control" id="vehiclePlate" placeholder="Digite a placa do véiculo"/>
                        </div>
                      </div>
                      <div className="col-md-12" id="fipeTop">
                        <div className="form-input valueVehycle">
                          <label htmlFor="FIPEValue">Valor FIPE do veículo:</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">R$</div>
                            </div>
                            <input type="number" maxLength="14" className="form-control" id="fipe"/>
                          </div>
                          <small className="form-text text-muted">
                            Digite o valor FIPE do seu veículo.
                          </small>
                        </div>
                      </div>
                    </div>
                  </VehycleInfoContainer>


                  <div className="form-group">
                    <h4 className="title-section">Tem ou teve algum seguro?</h4>
                    <div className="row">
                      <div className="col-mb-2 col-6">
                        <div className="boxRadio">
                          <input type="radio" name="activeInsurance" id="activeInsuranceYes" className="custom-control-input" value="true" onClick={() => setInsuranceYes(prevState => !prevState)}/>
                          <label htmlFor="activeInsuranceYes" className="activeInsuranceLabel">Sim</label>
                        </div>
                      </div>
                      <div className="col-mb-2 col-6">
                        <div className="boxRadio">
                          <input type="radio" name="activeInsurance" id="activeInsuranceNo" className="custom-control-input" onClick={SemSeguro}/>
                          <label htmlFor="activeInsuranceNo" className="activeInsuranceLabel">Não</label>
                        </div>
                      </div>
                    </div>
                    <small className="form-text text-muted">
                      Caso já teve ou tem algum seguro, clique em Sim. Do contrário, clique em Não.
                    </small>
                  </div>
                </FormGroup>

                {insuranceYes === true && (
                  <>
                    <div className="form-group">
                      <div className="row">

                        <div className="col-12 mb-3">
                          <div className="form-input">
                            <label htmlFor="insuranceValue">Quanto paga/ pagou pelo seu último seguro?</label>
                            <input type="number" className="form-control" id="insuranceValue"/>
                            <small className="form-text text-muted">
                              Digite o valor que pagou no seu último ou atual seguro.
                            </small>
                          </div>
                        </div>

                        <div className="col-12 mb-3">
                          <div className="form-input">
                            <label htmlFor="insuranceCompany">Qual seguradora?</label>
                            <input type="text" className="form-control" id="insuranceCompany"/>
                            <small className="form-text text-muted" id="insuranceCompanyHelp">
                              Ex.: Porto Seguro, HDI, MapFre ...
                            </small>
                          </div>
                        </div>

                        <div className="col-12 mb-3">
                          <div className="form-input">
                            <label htmlFor="insuranceExpiration">Quando termina seu contrato?</label>
                            <input type="date" className="form-control" id="insuranceExpiration"/>
                            <small className="form-text text-muted" id="insuranceExpirationHelp">
                              Selecionar a data.
                            </small>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                )}

                <>
                  <OnsuranceOnboard />
                  <Acessories />
                  <User />
                </>
                
              </FormStep>
            </form>

          </div>
        </div>
      </FormContainer>

    </>  
  )
}

export default Formulary;