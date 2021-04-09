import styled from 'styled-components';


export const AcessoriesStyle = styled.div`
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
  
  .title-section {
    position: relative;
  }

  .title-section::after {
    position: absolute;
    width: 70px;
    height: 2px;
    top: -20px;
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

  .boxRadio{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
    
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
`;