import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: inset 0px 0px 46px 2px rgba(0,0,0,0.48);
  -moz-box-shadow: inset 0px 0px 46px 2px rgba(0,0,0,0.48);
  box-shadow: inset 0px 0px 46px 2px rgba(0,0,0,0.48);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalStyle = styled.div`
  
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  


  .modal-header {
    display: flex;
    text-align: center;
    justify-content: space-between;


    h5{
      align-items: center;
      margin-left: 8px;
      font-size: 15px;
    }
  }

  .modal-body{
    p {
      font-family: 'Open sans', sans-serif;
      font-weight: 400;
      color: #333;
      font-size: 15px;
      padding: 0 10px 0 10px;
    }
  }

  .d-flex {
    display: flex;
    justify-content: center;

    border: 1px solid #ccc;
    border-radius: 8px;

    background: #eee;

    img{
      margin: 10px 0;
      -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
      -moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
      box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    }
  }
  .modal-footer .box {
    margin-top: 8px;
    width: 100%;
  }

  .row {
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .col {
    text-align: center;

    button{
      color: #fff;
      font-weight: 400;
      border: none;
      border-radius: 3px;
      width: 50%;
      cursor: pointer;
      
      :after{
        border: 1px solid #01B7FF, blue;
        color: #01B7FF, blue;
        background: rgba(1, 183, 255, 0.1);
      }
    }
  }
`; 

export const CloseModalButton = styled(MdClose)`
  margin: 8px 8px 0 0 ;
  height: 25px;
  width: 25px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;

  border: 1px solid #ddd;
  border-radius: 3px;
  background: #eee;
`;