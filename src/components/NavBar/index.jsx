import React, { useState } from 'react';
import './styles.scss';
import logo from '../../images/logo.png'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function NavBar() {

    const [active, setMode] = useState(false)

   

  return (
    <header className={active ? 'header-open' : ''}>
       <a href='#top'><img src={logo} alt='Logo SoTrader' className={active ? 'img-open' : ''}/></a> 
            <>
            <nav className={active ? 'nav-open' : ''}>
            <ul className={active ? 'nav-open' : ''}>
               <li onClick={()=> setMode(false)}><a href='#top'>Home</a></li>
               <hr/>
               <li onClick={()=> setMode(false)}><a href={
                   window.innerWidth > 780 ? '#serviços' : '#Serviços'
               }>
                   Serviços</a></li>
               <hr/>
               <li onClick={()=> setMode(false)}><a href='#contato'>Contato</a></li>
            </ul>
        </nav>
                <div className={active ? 'social-open nav-social-media' : 'nav-social-media'}>
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5551999903376" target="_blank" className='icon-social-nav'>
                 <FaWhatsapp color='#fff' size={26}/>
                </a>
                <a href="https://www.instagram.com/so_trader/" target="_blank" className='icon-social-nav'>
                 <FaInstagram color='#fff' size={26}/>
                </a>
            </div>
            <AiOutlineMenu  className={active ? 'icon-menu menu-open' : 'icon-menu'} color='#fff' size={30} onClick={() => setMode(!active)}/>
            <AiOutlineClose className={active ? 'icon-close close-open' : 'icon-close'} color='#fff' size={30} onClick={() => setMode(!active)}/>
            </>
    </header>
    );
}

export default NavBar;