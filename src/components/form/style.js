import styled from 'styled-components';


export const FormContainer = styled.div`
  width: auto;
  padding: 0 30px;
  background: #fff;

  margin: 0 60px;
  border-radius: 8px;

  form{
    padding: 0 60px;
  }

  .col-12{
    margin-bottom: 15px;
  }

  .form-step__title {
    position: relative;
    padding: 4px 0;
    margin-top: 30px;
    margin-bottom: 50px;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
  }

  .form-step__title::after {
    position: absolute;
    width: 100px;
    height: 2px;
    top: -20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--main-color, blue);
    content: '';
  }

  .veihcleInfoContainer .col-md-6 {
    margin-bottom: 10px;
  }

  .title-section {
    position: relative;
  }

  .title-section::after {
    position: absolute;
    width: 70px;
    height: 2px;
    top: -8px;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--main-color, blue);
    content: '';
  }

  .text-content {
    background: #F7F8FC;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.03);
  }


  .text-content h3 {
    font-size: 1.4rem;
  }

  .text-content ul {
    margin-top: 20px;
    padding: 0;
  }

  a.noDecoration {
    color: black;
    text-decoration: none;
  }
`;

export const FormStep = styled.div`

`;

export const LoadingSection = styled.div`
  
  display: none;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: inset 0px 0px 46px 2px rgba(0,0,0,0.48);
  -moz-box-shadow: inset 0px 0px 46px 2px rgba(0,0,0,0.48);
  box-shadow: inset 0px 0px 46px 2px rgba(0,0,0,0.48);
  z-index: 1;
  

  .active {
    display: block !important;
  }

  .loaderball{
    display:flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 100px;
    height:100px;
    border: 8px solid #00b7ff38;
    border-top-color: #00b7ff;
    border-radius: 50%;
    animation: spin 0.4s linear infinite;
  }

`;

export const FormGroup = styled.div`
  margin-bottom: 25px;

  .form-input {
    position: relative;
  }

  h4 {
    margin-bottom: 15px;
    margin-top: 30px;
  }

  sup {
    color: red;
  }

  label {
    text-transform: uppercase;
    font-size: 1rem;
  }

`;

export const UsageCarType = styled.div`
  margin-bottom: 25px;
  margin-top: 0;

  .col-12{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
  }

  input {
    position: absolute;
    width: 5px;
    height: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
  }

  label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    /* height: 60px; */
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    width: 100%;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-transition: .2s ease;
    transition: .2s ease;
    font-weight: 600;
    background: rgba(0,0,0,0.01);
  }

  input:checked + label {
    border: 1px solid var(--main-color, blue);
    color: var(--main-color, blue);
    background: rgba(1, 183, 255, 0.1);
  }
`;

export const BoxVehycles = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: auto;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 15px;

  
  .boxRadio {
    position: relative;
  }

  .boxRadio input {
    position: absolute;
    width: 5px;
    height: 5px;
    left: 0;
    right: 0;
    bottom:0;
    margin: auto;
    opacity: 0;
  }

  .boxRadio label{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    font-weight: 600;
    background: rgba(0,0,0,0,0.01);
  }

  .boxRadio label img {
    width: 60px;
  }

  .boxRadio input:checked + label {
    border: 1px solid var(--main-color, blue);
    color: var(--main-color, blue);
    background: rgba(1, 183, 255, 0.1);
  }

  small {
    margin: 10px 0 5px 0 ;
    color: #333;
    font-style: italic;
  }
`;

export const VehycleInfoContainer = styled.div`
  margin-bottom: 25px;
  

  .row{
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-input {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: auto;
    grid-template-columns: repeat(1, 1fr);

    width: 100%;
    position: relative;

    label{
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      height: 25px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    small{
      margin: 3px 0 15px 0;
      color: #333;
      font-style: italic;
    }
  }

  .col-md-12 {
    grid-template-columns: 1/12;
  }

`;

export const AppDriverOptions = styled.div`
  margin-bottom: 25px;

  .col-12-custom{
    margin: 10px 0 10px 0;
  }

  .col-12{
    input{
      width: 99%;
      height: 4vh;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }

`;

export const MotorcycleOptions = styled.div`
  margin-bottom: 25px;

  .col-12{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
  }
  
  input {
    position: absolute;
    width: 5px;
    height: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
  }

  label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    /* height: 60px; */
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    width: 100%;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-transition: .2s ease;
    transition: .2s ease;
    font-weight: 600;
    background: rgba(0,0,0,0.01);
  }

  input:checked + label {
    border: 1px solid var(--main-color, blue);
    color: var(--main-color, blue);
    background: rgba(1, 183, 255, 0.1);
  }
`;

export const PickupOptions = styled.div`
  margin-bottom: 25px;

  .col-12{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
  }
  
  input {
    position: absolute;
    width: 5px;
    height: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
  }

  label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    /* height: 60px; */
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    width: 100%;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 5px;
    -webkit-transition: .2s ease;
    transition: .2s ease;
    font-weight: 600;
    background: rgba(0,0,0,0.01);
  }

  input:checked + label {
    border: 1px solid var(--main-color, blue);
    color: var(--main-color, blue);
    background: rgba(1, 183, 255, 0.1);
  }
`;

export const VucOptions = styled.div`
  margin-bottom: 25px;

  .col-12{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
  }
  
  .custom-control {
    input {
      position: absolute;
      width: 5px;
      height: 5px;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      opacity: 0;
    }

    label {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      /* height: 60px; */
      padding: 10px 0;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 0;
      width: 100%;
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 5px;
      -webkit-transition: .2s ease;
      transition: .2s ease;
      font-weight: 600;
      background: rgba(0,0,0,0.01);
    }

    input:checked + label {
      border: 1px solid var(--main-color, blue);
      color: var(--main-color, blue);
      background: rgba(1, 183, 255, 0.1);
    }
  }

  .col-12-value {
    .input-group{
      display: grid;
      grid-template-columns: auto 2fr;
    }

    .input-group-text{
      background: #eee;
      border: 1px solid #ccc;
      color: #333;
      width: 100%;
      height: 4vh;

      font-family:'Open sans', sans-serif;
      text-size-adjust:auto;

      border-radius: 5px 0 0 5px;
    }
    input{
      border: 1px solid #ccc;
      color: #333;

      border-radius: 0 5px 5px 0;
    }
  }
  
`;

export const RepositoryItem = styled.option`
`;