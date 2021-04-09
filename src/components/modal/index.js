import React from "react";
import { ModalStyle, Background, CloseModalButton } from './Style';




export const Modal = ({showModal, setShowModal, handleNacional, handleImportado}) => {

  const nacional = (e) => {
    handleNacional() 
    setShowModal(prev => !prev)
  }

  const importado = (e) => {
    handleImportado()
    setShowModal(prev => !prev)
  }

  return (
    <>
      {showModal ?
        (<>
          <Background>
            <ModalStyle >
              <div className="modal-dialog sobrescrita-modal" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalFabricacaoLabel">Documento do Veículo</h5>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                  </div>
                  <div className="modal-body">
                    <p>
                      <i>No campo:</i> <b>Marca/Modelo</b><i>, no documento do seu carro, carros importados começam com a letra:</i> <b>i</b>.
                    </p>
                    <div className="d-flex">
                      <img src="img/documento-crlv.png" alt="CRLV" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="box">
                      <div className="row">
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-primary btn-block"
                            datadismiss="modal"
                            value="Nacional"
                            onClick={nacional}
                          >
                            Nacional
                          </button>
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-primary btn-block"
                            datadismiss="modal"
                            value="Importado"
                            onClick={importado}
                          >
                            Importado
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalStyle>
          </Background>
        </>)
        :null
      }
    </>
  ) 
}
