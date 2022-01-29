import { useEffect, useRef, useState } from "react"
import NavBar from "./components/NavBar"
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import logistica from './images/logistica.png'
import comercio from './images/comercio.png'
import comercioBlack from './images/comercio-black.png'
import trader from './images/trader.png'
import './app.scss'
import { CardWhite } from "./components/CardWhite"
import { CardBlue } from "./components/CardBlue"
import { Button } from "./components/Button"
import Footer from "./components/Footer"
import { Modal } from './components/Modal';
import ScrollReveal from 'scrollreveal'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfos, setModalInfos] = useState({});

  function handleOpenModal({ title, content }) {
    setModalInfos({ title, content });
    setIsOpen(true);
  } 

  
    useEffect(()=>{
    
    const scrollReveal = ScrollReveal()
      
   

      scrollReveal.reveal(`
       .text-home,.card-home,
      #card1, #card2, #card3,
      .section-quem-somos,
      .section-valores,
      .infoTransition
      `, {
        origin: 'bottom',
        distance: '30px',
        duration: 900,
        interval: 200
      })

      scrollReveal.reveal(`
       .text-home
      `, {
        origin: 'top',
        distance: '20px',
        duration: 900,
        interval: 200
      })

      scrollReveal.reveal(`
      .container-card
      `, {
       origin: 'right',
       distance: '30px',
       duration: 900,
       interval: 200
     })

     scrollReveal.reveal(`
     .cardTransition,
     .footer-contact, .footer-social-media, .logoTransition
     `, {
      origin: 'left',
      distance: '30px',
      duration: 900,
      interval: 200
    })


  },[])

  return (
    <>
      <NavBar/>
      <main>
        <div className="section-home" >
          <div className="text-home">
            <h1>Bem vindo a Só Trader, uma empresa de comércio exterior</h1>
            <span>Atuamos na gestão operacional e comercial no Brasil e exterior, pautando nossas atividades na honestidade, transparência e profissionalismo.    </span>
          </div>

        <section className="card-home">
            <CardWhite>
              <h2>SOBRE NÓS</h2>
              <span id="serviços">Somos uma empresa de comércio exterior. Atuamos na gestão operacional e comercial no Brasil e exterior, pautando nossas atividades na honestidade, transparência, profissionalismo, ágil comunicação e soluções criativas. </span>
            </CardWhite>
            <img src={img1} alt="Imagem de caminhões" className="imageTransiton" />
        </section>
        </div>

        <section id="Serviços" className="section-card">
          <CardBlue id="card1">
            <img src={logistica} alt="Logística"/>
            <h3>LOGÍSTICA</h3>
            <span>Gestão e Operação</span>
            <Button 
              onClick={() => handleOpenModal({
                title: 'Logística',
                content: [
                  'Procedimentos para Gestão e Operação de Transporte Fracionado e Carga Fechada', 
                  'Projetos de Redes de Transportes  - marítimo, aéreo e terrestre',
                  'Procedimentos de Planejamento e Execução de Embarques ',
                  'Procedimentos para Otimização da Capacidade Disponível',
                  'Negociação de frete analisando os Modais de Transporte',
                  'Suporte no Desenvolvimento de Parceiros Operacionais',
                  'Procedimentos para Contratação de Transportes',
                  'Armazenagem, Embalagem e projetos logísticos',
                  'Padronização de Procedimentos Operacionais ',
                ]
              })}
            >
              <span>Saiba Mais</span>
            </Button>
          </CardBlue>
          <CardBlue id="card2">
            <img src={comercio} alt="Logística"/>
            <h3>COMÉRCIO EXTERIOR</h3>
            <span>Exportação & Importação</span>
            <Button 
              onClick={() => handleOpenModal({
                title: 'Comércio Exterior',
                content: [
                  'Assessoria quanto às diferentes modalidades de pagamento internacional: análise dos trâmites administrativos necessários e análise custo/benefício',
                  'Providência da documentação necessária para o despacho aduaneiro da mercadoria em porto/aeroporto origem/destino',
                  'Assessoria para fechamento de câmbio junto ao banco ou corretora de câmbio da empresa cliente',
                  'Levantamento de custos e auxilio na formação de preços para exportação e importação',
                  'Identificação de mercados, clientes e fornecedores em potencial no país de interesse',
                  'Assessoria na contratação do despachante aduaneiro e fiscalização do trabalho do mesmo',
                  'Acompanhamento de todo o processo da origem até a chegada da mercadoria no destino',
                  'Orientação para a empresa cliente emitir a nota fiscal de exportação e importação',
                  'Suporte e levantamento de dados para adequação do produto a cada mercado',
                  'Assessoria quanto à correta classificação fiscal dos produtos',
                  'Negociação com clientes e fornecedores internacionais',
                  'Reservas de praça de transporte internacional',
                  'Negociação de frete e seguro internacional'

                ]
              })}
            >
              <span>Saiba Mais</span>
            </Button>
          </CardBlue>
          <CardBlue id="card3">
            <img src={trader} alt="Logística"/>
            <h3>TRADER</h3>
            <span>Oportunidades de negócios</span>
            <Button 
              onClick={() => handleOpenModal({
                title: 'Trader',
                content: [
                  'Nossa principal atividade é a busca de oportunidades de negócios, nos âmbitos nacional e internacional, por meio da prospecção de mercados, produtos e serviços.',
                  'Nosso grande objetivo é, com menor investimento possível e máxima agilidade, avaliar a viabilidade, planejar e concretizar negócios lucrativos para nossos clientes e parceiros.',
                  'Nossos atuais segmentos de atuação: Material de construção (isolamento termoacustico e impermeabilizantes), Energia Fotovoltaica, Outras miscelâneas, Alimento e Textil.'
                ]
              })}
            >
              <span>Saiba Mais</span>
            </Button>
          </CardBlue>
        </section>

        <h2 className="title">NOSSA EMPRESA</h2>

        <section className="section-quem-somos">
          <CardWhite  className="cardTransition">
            <h2>QUEM SOMOS?</h2>
            <span>Somos uma empresa de comércio exterior. Atuamos na gestão operacional e comercial no Brasil e exterior, pautando nossas atividades na honestidade, transparência, profissionalismo, ágil comunicação e soluções criativas. </span>
          </CardWhite>
          <img src={img2} alt="Comércio exterior"/>
        </section>

        <section className="section-img">
          <img src={img3} alt="Funcionários conversando na empresa"/>
        </section>

        <section className="section-valores">
          <div className="container-card">
            <CardWhite>
              <h2>MISSÃO</h2>
              <span>Auxiliar nossos clientes a administrar seus negócios, buscando otimizar resutados com segurança e confiabilidade.</span>
            </CardWhite>
            <CardWhite>
              <h2>VALORES</h2>
              <span>Obstinação por resultados, Qualidade e excelência. Responsabilidade Ambiental, Credibilidade, Eficiência e Respeito</span>
            </CardWhite>
          </div>
          <img src={img4} alt="Comércio exterior" className="imgContainerV"/>
        </section>

      <section className="section-info-empresa">
          <hr/>
          <div className="infoTransition">
            <img src={comercioBlack} alt="Ícone de comércio"/>
            <h2>+15 anos</h2>
            <span>De autação em Comércio Exterior</span>
          </div>
          <hr/>
      </section>

    <Footer/>

      </main>
    <Modal 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      {...modalInfos}
    />
    </>
  )
}

export default App
