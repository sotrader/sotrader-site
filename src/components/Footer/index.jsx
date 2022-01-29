import React from 'react';
import './styles.scss'
import surfland from '../../images/surfland.png'
import logo from '../../images/logo.png'
import { BiMap } from 'react-icons/bi'
import { RiPhoneLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'


function Footer() {
  return (
      <footer id='contato'>
        <section className='container-footer'> 
        
          <section className='footer-contact'>
            <h2>Contato</h2>
            <div>
              <BiMap className='icon-contact' size={22}/>
              <span>Porto Alegre (RS) / Garopaba (SC)</span>
            </div>
            <div>
              <RiPhoneLine className='icon-contact' size={22}/>
              <span>(051) 9 9990.3376</span>
            </div>
            <div>
              <AiOutlineMail className='icon-contact' size={22}/>  
              <span>sotrader@sotrader.com.br</span>
            </div>
          </section>

          <section className='footer-social-media'>
            <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5551999903376' target="_blank"><FaWhatsapp className='icon-social' id="whatsapp"/></a>
            <a href="https://www.instagram.com/so_trader/" target="_blank"><FaInstagram className='icon-social'id="instagram"/></a>
            <a href="https://surflandbrasil.com.br/?utm_promoter=12783" target="_blank"><img src={surfland} alt="Surfland" className='icon-social' id="surfland"/></a>
          </section>

            <section className='footer-logo'>
              <img src={logo} alt='Só Trader' className='logoTransition'/>
            </section>
        </section>

        <div className='footer-credits'>
          <span>
            SOTRADER © 2022 • Created by <a href='https://www.instagram.com/ikauan.costa/' target="_blank">Kauan Costa</a>
          </span>
        </div>

      </footer>
  );
}

export default Footer;