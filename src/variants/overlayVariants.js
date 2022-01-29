export const overlayVariants = {
  hidden: {
    display: 'none',
    transition: {
      when: 'afterChildren'
    }
  }, 
  visible: {
    display: 'flex',
    transition: {
      when: 'beforeChildren'
    }
  }
}