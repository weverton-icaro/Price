import styled from 'styled-components';

export const UserForm = styled.div`
  .form-input{
    position: relative;
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

  .row{
    display: grid;
  }

  .col-md-6{
    
  }

  .col-12{
    
  }

  .btn-link {
    padding: 0px;
    font-size: 100%;
  }
`;