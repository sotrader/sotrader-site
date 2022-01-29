import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer } from './styles';
import { AiOutlineClose } from 'react-icons/ai';

import { motion, useAnimation } from 'framer-motion';
import { overlayVariants } from '../../variants/overlayVariants';
import { modalVariants } from '../../variants/modalVariants';

export const Modal = ({
  isOpen,
  setIsOpen,
  title,
  content,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    blockScrollOfBody();

    if (isOpen) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isOpen]);

  function blockScrollOfBody() {
    if (isOpen) {
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = '100%';
      document.body.style.overflow = 'visible';
    }
  }

  return ReactDOM.createPortal(
    <Overlay
      isOpen={isOpen}
      as={motion.div}
      animate={controls}
      variants={overlayVariants}
    >
      <ModalContainer
        as={motion.div}
        variants={modalVariants}
      >
        <AiOutlineClose className="close-icon" onClick={() => setIsOpen(false)} />
        <h3>{title}</h3>      
        <div className='main-container'>
          <ul>
            {content?.map((text) => (
              <>
              <li>{text}</li>
              <hr/>
              </>
            ))}
          </ul>
          <p>Nossa TRADING COMPANY está habilitada para importação e exportação indireta.</p>
        </div>
      </ModalContainer>
    </Overlay>,
    document?.getElementById('root-modal'),
  )
}