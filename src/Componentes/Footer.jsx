import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p><a href="https://www.origamid.com" target="_blank" rel='noreferrer'>Origamid</a> © Projeto feito por <a href="https://github.com/gustavogularte" target="_blank" rel='noreferrer'>Gustavo Gularte Arend</a>.</p>
    </footer>
  )
}

export default Footer
