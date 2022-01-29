import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: #00000090;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  /* display: ${({ isOpen }) => isOpen ? 'flex' : 'none'}; */
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 32px;
  border-radius: .25rem;
  margin: 20px;
  height: 80%;
  max-height: 400px;
  color: #111B22;

  li{
        padding: 10px;
    }

    p{
      margin-top: 1rem;
      margin-left: .5rem;
      color: #539237;
      font-weight: bold;
    }

  h3{
    padding-bottom: 2rem;
  }

  @media(max-width: 678px) {
    font-size: 13px;

    h3{
      font-size: 15px;
      padding: 0rem;
      margin-left: 0.7rem !important;
    }
  }
  
  @media(max-width: 468px) {
    font-size: 12px;
  }

  @media(max-width: 332px) {
    font-size: 11px;
  }

    .main-container {
      overflow-y: scroll;
    }
  }

  .close-icon {
    position: absolute;
    top: -32px;
    right: -32px;
    font-size: 26px;
    color: #fff;
    cursor: pointer;

    @media(max-width: 550px) {
      top: -32px;
      right: 0px;
      font-size: 20px;
    }
  }
`;